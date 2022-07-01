const fs = require("fs").promises;

module.exports = (fileName) => fs.readFile(fileName, "utf8");
