const express = require("express");
const route = express.Router();

// home

const homeController = require("./controllers/homeController");
route.get("/", homeController.get);
route.post("/", homeController.post);

// contact

const contactController = require("./controllers/contactController");
route.get("/contact", contactController);

module.exports = route;
