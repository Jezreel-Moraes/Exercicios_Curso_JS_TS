//#region Função que retorna função

// function falaFrase(começo) {
//   function falaResto(resto) {
//     return começo + " " + resto;
//   }
//   return falaResto;
// }

// const olaMundo = falaFrase("Ola,");
// console.log(olaMundo("mundo!"));

//#endregion

//#region callback functions

// function rand(min = 1000, max = 3000) {
//   return Math.floor(Math.random() * (max - min) + min);
// }

// function f1(callback) {
//   setTimeout(function () {
//     console.log("f1");
//     callback ? callback() : null;
//   }, rand());
// }
// function f2(callback) {
//   setTimeout(function () {
//     console.log("f2");
//     callback ? callback() : null;
//   }, rand());
// }
// function f3(callback) {
//   setTimeout(function () {
//     console.log("f3");
//     callback ? callback() : null;
//   }, rand());
// }

// const f1callback = () => {
//   f2(f2callback);
// };

// const f2callback = () => {
//   f3(f3callback);
// };

// const f3callback = () => {
//   console.log("fim das funções");
// };

// f1(f1callback);

//#endregion

//#region [IIFE] -> Immediately Invoked Function Expression

// const document = 1;

// (function () {
//   const name = "Jose";

//   function sayName(name) {
//     console.log(name);
//   }

//   (function cumprimentar() {
//     console.log("Olá, eu sou:");
//     sayName(name);
//     console.log("E vc?");
//   })();
// })();
//#endregion

//#region Factory Function

// const pessoa = (nome) => {
//   return {
//     nome,
//     falarNome() {
//       console.log(this.nome);
//     },
//   };
// };

// const p = pessoa("João");
// p.falarNome(); // João

const pessoa = (nome, idade) => {
  return {
    nome,
    idade,

    apresentação(hook) {
      console.log(
        `Olá, eu me chamo ${this.nome}${hook ? hook() : ""}, e você?`
      );
    },

    falarIdade() {
      return ` e tenho ${this.idade}`;
    },
  };
};

const p = pessoa("Maria", 19);

p.apresentação();
console.log(p.falarIdade());
p.apresentação(p.falarIdade);
