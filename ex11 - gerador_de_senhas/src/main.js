import PasswordGenerator from "./modules/PasswordGenerator";
import "./assets/css/style.css";

document.addEventListener("submit", (event) => {
  event.preventDefault();
  updatePassword();
});

function updatePassword() {
  const response = document.querySelector(".generated_password");
  const length = document.querySelector(".length").value;
  const hasNumbers = document.querySelector(".hasNumbers").checked;
  const hasUppers = document.querySelector(".hasUppers").checked;
  const hasLowers = document.querySelector(".hasLowers").checked;
  const hasSymbols = document.querySelector(".hasSymbols").checked;
  const password = PasswordGenerator.makePassword(
    length,
    hasNumbers,
    hasUppers,
    hasLowers,
    hasSymbols
  );
  response.innerText = password;
}

updatePassword();
