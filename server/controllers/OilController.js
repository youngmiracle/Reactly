const { where } = require('sequelize');
const db = require('../models');
const MotorOil = db.motorOil;

class oilController{
    async Motor(req, res, next){
        const request = req.body;

            const mOil = await MotorOil.findAll({ where:{request}});
            res.json(mOil);
    }
}

module.exports = new oilController();