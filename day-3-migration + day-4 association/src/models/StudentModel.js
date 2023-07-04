const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("@root/sequelize-config");
const User = require("../models/UserModel");
const Faculty = require("./FacultyModel");

class Student extends Model {}
Student.init(
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    facultyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "students",
    modelName: "Student",
  }
);
Student.belongsTo(User, { foreignKey: "userId" });
User.hasOne(Student, { foreignKey: "userId" });

Faculty.hasMany(Student, { foreignKey: "facultyId" });
Student.belongsTo(Faculty, { foreignKey: "facultyId" });
Student.sync({ alter: true });
module.exports = Student;
