const express = require("express");
const route = express.Router();

// home
const HomeModel = require("./src/models/HomeModel");

// HomeModel.create({
//   name: "NomeTeste",
//   description: "DescriçãoTeste",
// })
HomeModel.find()
  .then((dados) => {
    console.log(dados);
  })
  .catch((error) => {
    console.log(error);
  });

const homeController = require("./src/controllers/homeController");
route.get("/", homeController);

module.exports = route;
