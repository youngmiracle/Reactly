const {Sequelize} = require('sequelize')
const dotenv = require('dotenv')

dotenv.config('./.env');

module.exports = new Sequelize(
    process.env.DATABASE_NAME, // Название БД
    process.env.DATABASE_USER, // Пользователь
    process.env.DATABASE_PASSWORD, // ПАРОЛЬ
    {
        dialect: 'mysql',
        host: process.env.DATABASE_HOST,
        logging: false
    }
)