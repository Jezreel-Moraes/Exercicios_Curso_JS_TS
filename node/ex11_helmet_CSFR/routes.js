const express = require("express");
const route = express.Router();

// home
const homeController = require("./src/controllers/homeController");
route.get("/", homeController);

module.exports = route;
