const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("workshop_db", "postgres", "admin", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;
