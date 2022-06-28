// fetch("pessoas.json")
//   .then((response) => response.json())
//   .then((json) => loadJson(json))
//   .catch((error) => {
//     console.error(error);
//   });

axios("pessoas.json")
  .then((response) => loadJson(response.data))
  .catch((error) => {
    console.error(error);
  });

function loadJson(json) {
  const table = document.createElement("table");

  for (person of json) {
    const tr = document.createElement("tr");
    const name = document.createElement("td");
    const age = document.createElement("td");

    name.innerText = person.nome;
    age.innerText = person.idade;
    tr.appendChild(name);
    tr.appendChild(age);
    table.appendChild(tr);
  }
  const response = document.querySelector(".response");
  response.appendChild(table);
}
