const Sequelize = require('sequelize');

module.exports = function(sequelize){
    return sequelize.define('User', {
        id_User:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoincrement: true,
            allowNull: false
        },
        Login:{
            type: Sequelize.STRING(32),
            allowNull: false
        },
        Password:{
            type: Sequelize.STRING(100),
            allowNull: false
        },
        id_Role:{
            type: Sequelize.INTEGER,
            allowNull: false,

        }
    },{
        timestamps:false,
        tableName: 'user'
    })
}