const {Type} = require('../models/models');
const ApiError = require('../error/ApiError');

class TypeController{
    async create(req, res, next){
        const {name} = req.body;
        const type = await Type.create({name});
        res.json(type);
    }
    async getAll(req, res, next){
        const type = await Type.findAll();
        res.json(type);
    }
}

module.exports = new TypeController;