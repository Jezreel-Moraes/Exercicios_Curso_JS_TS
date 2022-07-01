module.exports.get = (req, res) => {
  res.send(`
    <form action='/' method='POST'> 
      Nome <input type="text" name="name"></input> <br>
      Sobrenome <input type="text" name="lastName"></input><br>
      <input type="submit"></input>
    </form>`);
};

module.exports.post = (req, res) => {
  res.send(
    `
    Olá, sou sua nova rota de POST! <br>
      nome: ${req.body.name} <br>
      sobrenome: ${req.body.lastName}
    `
  );
};
