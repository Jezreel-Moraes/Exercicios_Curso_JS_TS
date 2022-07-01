const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Menu inicial:");
});

app.get("/tests/:user_id?", (req, res) => {
  res.send("iai");
  console.log(req.params);
  console.log(req.query);
});

app.get("/form/:userName?", (req, res) => {
  res.send(
    `Olá ${req.params.userName}!` +
      "<form action='/form' method='POST'>" +
      'Nome <input type="text" name="nome"></input>' +
      '<input type="submit"></input>' +
      `<input type="hidden" name="userName" value="${req.params.userName}"></input>` +
      "</form>"
  );
});

app.post("/form", (req, res) => {
  console.log(req.body);
  res.send("Recebido! " + Number(req.body.nome) * 6);
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
  console.log("http://localhost:3000");
});
