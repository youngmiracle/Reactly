const db = require('../models');
const MotorOil = db.motorOil;

class oilController{
    async Motor(req, res, next){
        const request = req.body;
        if(request.ILSAC === null ){
            const mOil = await MotorOil.findAll({where:{
                SAE: request.SAE,
                API: request.API,
                ACEA: request.ACEA
            }});
            res.json(mOil);
        }else if(request.ACEA === null){
            const mOil = await MotorOil.findAll({where:{
                SAE: request.SAE,
                API: request.API,
                ILSAC: request.ILSAC
            }});
            res.json(mOil);
        }else if(request.API === null){
            res.status(503).json({message: "Ошибка обработки запроса"})
        }
        // const mOil = await MotorOil.findAll({where:{}});
    }
}

module.exports = new oilController();