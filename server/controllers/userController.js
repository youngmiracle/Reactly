const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {User, Basket} = require('../models/models')
const ApiError = require('../error/ApiError');

const generateJwt = (id, login, role) => {
    return jwt.sign(
        {id, login, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class userController{
    async registration(req, res ,next){
        const {login, password, role} = req.body;
        if(!login || !password){
            return next(ApiError.badRequest('Неверный логин или пароль.'));
        }
        const candidate = await User.findOne({where:{login}});
        if(candidate){
            return next(ApiError.badRequest('Пользователь с таким логином уже существует.'));
        }
        const hashPassword = await bcrypt.hash(password, 5);
        const user = await User.create({login, password: hashPassword, role});
        const basket = await Basket.create({id_user: user.id_user});
        const token = generateJwt(user.id_user, user.login, user.role);
        return res.json({token});
    }

    async login(req, res, next){
        const {login, password} = req.body;
        const user = await User.findOne({where: {login}});
        if(!user){
            return next(ApiError.internal('Пользователь не найден.'));
        }
        const comparePassword = bcrypt.compare(password, user.password);
        if(!comparePassword){
            return next(ApiError.internal('Указан неверный пароль.'));
        }
        const token = generateJwt(user.id_user, user.login, user.role);
        return res.json({token});
    }

    async check(req, res, next){
        const token = generateJwt(req.user.id_user, req.user.login, req.user.role);
        return res.json({token});
    }

}

module.exports = new userController();