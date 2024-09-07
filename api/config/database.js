const pg = require('pg');
const Sequelize = require('sequelize');
const db = {};
const dotenv=require('dotenv');
dotenv.config();

module.exports = new Sequelize(
   process.env.DB_URL
);
