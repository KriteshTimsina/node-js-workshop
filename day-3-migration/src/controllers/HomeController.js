const User = require("@/models/UserModel");
module.exports = {
  index: async (req, res) => {
    const list = await User.findAll();
    res.send(list);
  },
};
