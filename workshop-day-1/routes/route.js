const HomeController = require("../src/controllers/HomeController");

const router = require("express").Router();

router.get("/", HomeController.index);

module.exports = router;
