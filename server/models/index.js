const Sequelize = require('sequelize');
const dotenv = require('dotenv');

dotenv.config('../.env');

const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD,{
    dialect: "mysql",
    host: process.env.DATABASE_HOST,
    logging: false
});

const motorOil = require('./motorOil')(sequelize);
const gearOil = require('./gearOil')(sequelize);
const antiFreeze = require('./antiFreeze')(sequelize);
const user = require('./user')(sequelize);


module.exports ={
    sequelize: sequelize,
    motorOil: motorOil,
    gearOil: gearOil,
    antiFreeze: antiFreeze,
    user: user
}