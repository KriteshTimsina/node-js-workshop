const Student = require("../models/StudentModel");
const User = require("../models/UserModel");
const Faculty = require("../models/FacultyModel");
module.exports = {
  index: async (req, res) => {
    const students = await Student.findAll({ include: [User, Faculty] });
    res.send(students);
  },
  new: async (req, res) => {
    const student = Student.build({
      name: "First",
      address: "test",
      userId: 2,
      facultyId: 2,
    });
    await student.save();
    res.send(student);
  },
};
