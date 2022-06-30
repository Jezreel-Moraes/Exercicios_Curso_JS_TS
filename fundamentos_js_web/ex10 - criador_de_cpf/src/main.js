import CreateCPF from "./modules/CreateCPF";
import "./assets/css/style.css";

const response = document.querySelector(".result");

document.addEventListener("submit", (event) => {
  event.preventDefault();
  response.innerText = CreateCPF.makeCPF();
});

response.innerText = CreateCPF.makeCPF();
