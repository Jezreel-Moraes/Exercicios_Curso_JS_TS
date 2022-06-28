class Controle {
  constructor(nome) {
    this.nome = nome;
    this.volume = 0;
  }
  aumentarVolume() {
    this.volume++;
    console.log("Aumentado ->", this.volume);
  }

  diminuirVolume() {
    this.volume--;
    console.log("Diminuído ->", this.volume);
  }

  static falarBanana() {
    console.log("banana");
  }
}

c = new Controle("controle");
console.log(c);
Math.random();
