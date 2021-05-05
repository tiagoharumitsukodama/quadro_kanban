const Sequelize = require('sequelize');
/*
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
  })
 */

const sequelize = new Sequelize({
    "dialect": "sqlite",
    "storage": ":memory"
  })
  
module.exports = sequelize;