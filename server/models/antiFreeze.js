const Sequelize = require('sequelize');

module.exports = function(sequelize){
    return sequelize.define('AntiFreeze', {
        id_AntiFreeze:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoincrement: true,
            allowNull: false
        },
        Image:{
            type: Sequelize.STRING(1000),
            allowNull: false
        },
        FreezingPoint:{
            type: Sequelize.STRING(6),
            allowNull: false
        },
        Color:{
            type: Sequelize.STRING(10),
            allowNull: false
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
        tableName:'antifreeze'
    })
}