const rand = (min = 1, max = 3) => {
  min = min * 1000;
  max = max * 1000;
  return Math.floor(Math.random() * (max - min) + min);
};

const esperaAi = (msg, time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== "string") {
        reject("BAD VALUE");
        return;
      }
      resolve(msg);
      return;
    }, time);
  });
};

async function executa() {
  try {
    const dbConnection = esperaAi("Conexão Efetuada", 2000);
    const dataValidation = esperaAi("Validação Efetuada", 1500);
    const printData = esperaAi("Dados desenhados", 4000);

    console.log(await dbConnection);
    console.log(await dataValidation);
    console.log(await printData);
  } catch (error) {
    console.log("Erro:", error);
  }
}

executa();
