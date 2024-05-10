const Sequelize = require("sequelize");
const dbconfig = require("./dbconfig");

const sequelize = new Sequelize(
  dbconfig.DATABASE,
  dbconfig.USER,
  dbconfig.PASS,
  {
    host:dbconfig.HOST,
    dialect:dbconfig.dialect
  }
)

module.exports = sequelize;