class FormValidator {
  constructor() {
    this.form = document.querySelector(".form");
    this.events();
    this.errorMessages = {
      empty: (fieldName) => `O campo "${fieldName}" não pode estar vazio!`,
      userLength: "O usuário deve ter entre 3 e 12 caracteres!",
      userSpecials: "O campo precisar conter apenas letras e/ou números.",
      passwordLength: "A senha deve ter entre 6 e 12 caracteres!",
      samePassword: "As senhas devem ser iguais!",
      cpf: "CPF invalido!",
    };
    this.error = "error";
  }

  events() {
    this.form.addEventListener("submit", (event) => {
      this.handleSubmit(event);
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const fieldsAreValid = this.fieldsAreValid();
    const passwordIsValid = this.passwordIsValid();

    if (fieldsAreValid && passwordIsValid) {
      alert("Formulário enviado!");
      // this.form.submit();s
    }
  }

  fieldsAreValid() {
    let valid = true;

    this.removeErrors();

    for (const field of this.form.querySelectorAll(".validate")) {
      const label = field.previousElementSibling.innerText;

      if (!field.value)
        valid = this.createError(field, this.errorMessages.empty(label));

      if (field.classList.contains("cpf"))
        valid = this.validateCpf(field) ? valid : false;

      if (field.classList.contains("user"))
        valid = this.validateUser(field) ? valid : false;
    }

    return valid;
  }

  validateCpf(field) {
    const cpf = new ValidateCPF(field.value);

    return cpf.validate()
      ? true
      : this.createError(field, this.errorMessages.cpf);
  }

  validateUser(field) {
    const user = field.value;
    let valid = true;

    if (user.length < 3 || user.length > 12)
      valid = this.createError(field, this.errorMessages.userLength);

    if (!user.match(/^[a-zA-Z0-9]+$/g))
      valid = this.createError(field, this.errorMessages.userSpecials);

    return valid;
  }

  passwordIsValid() {
    let valid = true;
    const password = this.form.querySelector(".password");
    const confirmPassword = this.form.querySelector(".confirm-password");

    if (password.value !== confirmPassword.value) {
      valid = this.createError(password, this.errorMessages.samePassword);
      this.createError(confirmPassword, this.errorMessages.samePassword);
    }

    if (password.value.length < 6 || password.value.length > 12) {
      valid = this.createError(password, this.errorMessages.passwordLength);
    }

    return valid;
  }

  createError(field, errorMessage) {
    const errorList = field.nextElementSibling;
    const errorItem = this.createErrorItem(errorMessage);
    errorList.appendChild(errorItem);
    return false;
  }

  createErrorItem(msg) {
    const li = document.createElement("li");
    li.innerText = "* " + msg;
    li.classList.add(this.error);
    return li;
  }

  removeErrors() {
    for (const error of document.querySelectorAll("." + this.error))
      error.remove();
  }
}

const formValidator = new FormValidator();
