// Código atual

function* gerador() {
  const all = {
    nome: "nome",
    idade: "idade",
    valor: 1000,
  };

  const other = [...all];

  for (item of all) {
    yield [item];
  }
}
