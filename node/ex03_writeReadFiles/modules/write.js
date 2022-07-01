const fs = require("fs").promises;

module.exports = (fileName, data) => {
  fs.writeFile(fileName, data, { flag: "w" });
};
