const Sequelize = require('sequelize');

module.exports = function(sequelize){
    return sequelize.define('GearOil', {
        id_GearOil:{
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
        Specification:{
            type: Sequelize.STRING(45),
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
        tableName:'gearoil'
    })
}