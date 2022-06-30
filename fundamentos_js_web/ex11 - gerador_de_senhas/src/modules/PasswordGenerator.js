function range(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
const asciiRange = {
  number: { min: 48, max: 57 },
  upper: { min: 65, max: 90 },
  lower: { min: 97, max: 122 },
  symbol: { min: 33, max: 47 },
};

function makeNumber() {
  const min = asciiRange.number.min;
  const max = asciiRange.number.max;
  return String.fromCharCode(range(min, max));
}

function makeUpper() {
  const min = asciiRange.upper.min;
  const max = asciiRange.upper.max;
  return String.fromCharCode(range(min, max));
}

function makeLower() {
  const min = asciiRange.lower.min;
  const max = asciiRange.lower.max;
  return String.fromCharCode(range(min, max));
}

function makeSymbol() {
  const min = asciiRange.symbol.min;
  const max = asciiRange.symbol.max;
  return String.fromCharCode(range(min, max));
}

export default class PasswordGenerator {
  constructor() {}

  static makePassword(length, hasNumbers, hasUppers, hasLowers, hasSymbols) {
    const password = [];

    for (let _ = 0; _ < length; _++) {
      hasNumbers && password.push(makeNumber());
      hasUppers && password.push(makeUpper());
      hasLowers && password.push(makeLower());
      hasSymbols && password.push(makeSymbol());

      if (password.length >= length) break;
    }
    console.log(password.join(""));
    return password.join("").slice(0, length);
  }
}
