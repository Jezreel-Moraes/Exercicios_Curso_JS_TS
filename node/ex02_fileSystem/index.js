const fs = require("fs").promises;
const { stat } = require("fs");
const path = require("path");

async function readdir(rootDir, tabIndex = "") {
  rootDir = rootDir || path.resolve(__dirname);
  const files = await fs.readdir(rootDir);
  await walk(files, rootDir, tabIndex);
}

async function walk(files, rootDir, tabIndex) {
  for (let file of files) {
    const fileFullPath = path.resolve(rootDir, file);
    const stats = await fs.stat(fileFullPath);

    if (/\.git/g.test(fileFullPath)) continue;
    if (/node_modules/g.test(fileFullPath)) continue;

    const isDirectory = stats.isDirectory();
    const symbol = isDirectory ? ">" : "|";

    console.log(tabIndex, symbol, file);

    if (isDirectory) {
      await readdir(fileFullPath, tabIndex + " ");
    }
  }
}

readdir(path.resolve(__dirname, "..", ".."));
