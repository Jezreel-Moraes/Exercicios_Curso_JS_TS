const path = require("path");
const writeFile = require("./modules/write");
const readFile = require("./modules/read");

const fileName = path.resolve(__dirname, "file.json");
const data = [
  { name: "Jonas", age: 12 },
  { name: "Alessandra", age: 64 },
  { name: "Claudia", age: 34 },
  { name: "Ricardo", age: 52 },
  { name: "Arnaldo", age: 15 },
  { name: "Amanda", age: 24 },
];

const jsonData = JSON.stringify(data, "", 2);

async function showData() {
  const jsonData = await readFile(fileName);
  if (!jsonData) {
    console.log("no data");
    return;
  }
  const objData = JSON.parse(jsonData);
  console.log(objData);
}

writeFile(fileName, jsonData);
showData();
