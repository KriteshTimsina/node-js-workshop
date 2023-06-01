const express = require("express");
const path = require("path");
const HomeController = require("./src/controllers/HomeController");
require("dotenv").config();

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 3000;

app.get("/", HomeController.index);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
