const { Sequelize } = require('sequelize');
const db = new Sequelize('blogX', 'postgres', 'Welcome123', {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
});

module.exports = db;
