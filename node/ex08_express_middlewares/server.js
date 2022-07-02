const express = require("express");
const app = express();
const routes = require("./routes");
const path = require("path");
const beforeMiddleware = require("./src/middlewares/beforeMiddleware");
const afterMiddleware = require("./src/middlewares/afterMiddleware");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "public")));
app.use(beforeMiddleware);
app.use(routes);
app.use(afterMiddleware);

app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

app.listen(3000, () => {
  console.log("Server listening on port 3000");
  console.log("http://localhost:3000");
});
