const Sequelize = require('sequelize');
const dotenv = require('dotenv');
const motorOil = require('./motorOil');

dotenv.config('../.env');

const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD,{
    dialect: "mysql",
    host: process.env.DATABASE_HOST,
    logging: false
});

const MO = require('./motorOil')(sequelize);

module.exports ={
    sequelize: sequelize,
    motorOil: MO
}