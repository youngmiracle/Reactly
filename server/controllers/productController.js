const { where } = require('sequelize');
const db = require('../models');
const MotorOil = db.motorOil;
const GearOil = db.gearOil;
const AntiFreeze = db.antiFreeze;

class Products{
    async MotorOil(req, res, next){
        const request = req.body;

        const motOil = await MotorOil.findAll({ where:request});
        res.json(motOil);
    }
    async GearOil(req, res, next){
        const request = req.body;

        const gearOil = await GearOil.findAll({where: request});
        res.json(gearOil);
    }
    async AntiFreeze(req, res, next){
        const request = req.body;
        const antiFreeze = await AntiFreeze.findAll({where: request});
        res.json(antiFreeze);
    }
}

module.exports = new Products();
