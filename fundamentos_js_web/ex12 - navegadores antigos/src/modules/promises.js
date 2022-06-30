function promise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Ola, eu sou uma promises");
      resolve();
    }, 5000);
  });
}

export default async function () {
  await promise();
  console.log("terminou");
}
