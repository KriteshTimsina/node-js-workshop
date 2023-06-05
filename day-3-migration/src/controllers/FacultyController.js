const Faculty = require("../models/FacultyModel");
module.exports = {
  index: async (req, res) => {
    const list = Faculty.findAll();
    res.json(list);
  },
  new: async (req, res) => {
    const model = Faculty.build({ name: "BBS" });
    model.save();
    res.send(model);
  },
};
