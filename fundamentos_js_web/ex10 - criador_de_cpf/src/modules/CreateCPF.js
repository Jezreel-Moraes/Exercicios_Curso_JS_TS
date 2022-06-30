import ValidateCPF from "./validateCPF";

export default class CreateCPF {
  constructor() {}

  static generateRandomCPFNumbers() {
    const min = 100000000;
    const max = 999999999;
    return String(Math.floor(Math.random() * (max - min) + min));
  }

  static formatCPF(cpf) {
    return (
      cpf.slice(0, 3) +
      "." +
      cpf.slice(3, 6) +
      "." +
      cpf.slice(6, 9) +
      "-" +
      cpf.slice(9, 12)
    );
  }

  static makeCPF() {
    const numbers = CreateCPF.generateRandomCPFNumbers();
    const firstDigit = ValidateCPF.generateDigit(numbers);
    const secondDigit = ValidateCPF.generateDigit(numbers + firstDigit);
    const formattedCPF = CreateCPF.formatCPF(
      numbers + firstDigit + secondDigit
    );
    return formattedCPF;
  }
}
