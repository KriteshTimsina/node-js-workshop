const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("@root/sequelize-config");
class Faculty extends Model {}
Faculty.init(
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "faculty",
    modelName: "Faculty",
  }
);
Faculty.sync({ alter: true });
module.exports = Faculty;
