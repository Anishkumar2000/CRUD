const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Admin = sequelize.define("admin", {
  userid: {
    type: Sequelize.DataTypes.NUMBER,
    primaryKey: true,
  },
  username: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.DataTypes.STRING,
    unique: true,
  },
});

module.exports = Admin;
