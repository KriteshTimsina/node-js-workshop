module.exports = {
  const: (users = [
    { name: "John", email: "john@example.com", role: "Frontend Dev" },
    { name: "Aron", email: "ar@outlook.com", role: " Devops" },
    { name: "Leo", email: "leo@gmail.com", role: "DB Engineer" },
    { name: "Psy", email: "psy@yahoo.com", role: "UI/ UX " },
  ]),
  index: (req, res) => {
    res.render("index", { users });
  },
};
