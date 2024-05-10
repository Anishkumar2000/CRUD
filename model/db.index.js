const Sequelize = require("sequelize");
const sequelize = require("../config/database");
const Admin = require("./user.model");

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Admin = Admin;

module.exports = db;
