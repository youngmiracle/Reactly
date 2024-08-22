const Sequelize = require('sequelize');

module.exports = function(sequelize){
    return sequelize.define('MotorOil', {
        id_MotorOil:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoincrement: true,
            allowNull: false
        },
        Image:{
            type: Sequelize.STRING(1000),
            allowNull: false
        },
        Type:{
            type: Sequelize.STRING(15),
            allowNull: false
        },
        SAE:{
            type: Sequelize.STRING(6),
            allowNull: false
        },
        API:{
            type: Sequelize.STRING(5),
            allowNull: false
        },
        ILSAC:{
            type: Sequelize.STRING(5),
            allowNull: true
        },
        ACEA:{
            type: Sequelize.STRING(5),
            allowNull: true
        },
        Size:{
            type: Sequelize.STRING(10),
            allowNull: false
        },
        Price:{
            type: Sequelize.INTEGER(15),
            allowNull: false
        }
    },{
        timestamps:false,
        tableName:'motoroil'
    }
);
}