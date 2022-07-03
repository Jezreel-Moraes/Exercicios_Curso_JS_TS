require("dotenv").config();

const express = require("express");
const app = express();
const someMiddleware = require("./src/middlewares/someMiddleware");
const routes = require("./routes");
const path = require("path");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");

mongoose
  .connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conexão com a base de dados efetuada!");
    app.emit("dbConnection");
  })
  .catch((error) => {
    console.log(error);
  });

const sessionOptions = session({
  secret: "Uma coisa muito secreta",
  store: MongoStore.create({ mongoUrl: process.env.CONNECTION_STRING }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  },
});

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "public")));
app.use(sessionOptions);
app.use(flash());
app.use(someMiddleware);
app.use(routes);
// app.use('/route', middleware)

app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

app.on("dbConnection", () => {
  app.listen(3000, () => {
    console.log("Server listening on port 3000");
    console.log("http://localhost:3000");
  });
});
