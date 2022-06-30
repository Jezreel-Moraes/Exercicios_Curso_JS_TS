export default class ValidateCPF {
  constructor(cpfEnviado) {
    Object.defineProperty(this, "cleanCpf", {
      writable: false,
      enumerable: true,
      configurable: false,
      value: cpfEnviado.replace(/\D+/g, ""),
    });
  }

  isSequence() {
    return this.cleanCpf.charAt(0).repeat(11) === this.cleanCpf;
  }

  createNewCpf() {
    const cpfWithoutDigits = this.cleanCpf.slice(0, -2);
    const firstDigit = ValidateCPF.generateDigit(cpfWithoutDigits);
    const secondDigit = ValidateCPF.generateDigit(
      cpfWithoutDigits + firstDigit
    );
    this.newCPF = cpfWithoutDigits + firstDigit + secondDigit;
  }

  static generateDigit(cpfWithoutDigits) {
    let total = 0;
    let reverse = cpfWithoutDigits.length + 1;

    for (let numberString of cpfWithoutDigits) {
      total += reverse * Number(numberString);
      reverse--;
    }

    const digito = 11 - (total % 11);
    return digito <= 9 ? String(digito) : "0";
  }

  validate() {
    if (!this.cleanCpf) return false;
    if (typeof this.cleanCpf !== "string") return false;
    if (this.cleanCpf.length !== 11) return false;
    if (this.isSequence()) return false;
    this.createNewCpf();

    return this.newCPF === this.cleanCpf;
  }
}
