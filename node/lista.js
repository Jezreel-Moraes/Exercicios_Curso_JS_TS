const itens = {
  kitHacker: 230.95,
  kitDeIdentidadeFalsa: 59.95,
  lanterna: 45,
  lanternaUltravioleta: 50,
  multímetroDigital: 19.95,
  Mochila: 59.95,
  algemas: 8.9 * 3,
  péDeCabra: 29.9,
  IMIDesertEagle: 0,
  Shotgun: 0,
  cutelo: 50.9,
};

let valor = 0;
for (const item in itens) {
  console.log(item, " | ", itens[item]);
  itens[item] ? (valor += Number(itens[item])) : null;
}

console.log(valor);
console.log(700 - valor);
