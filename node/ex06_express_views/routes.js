const express = require("express");
const route = express.Router();

// home

const homeController = require("./src/controllers/homeController");
route.get("/", homeController.get);
route.post("/", homeController.post);

// contact

const contactController = require("./src/controllers/contactController");
route.get("/contact", contactController);

module.exports = route;
