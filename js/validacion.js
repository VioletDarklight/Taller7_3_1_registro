//let repetir = getElementById("password2");
//let contraseña = document.getElementById("password1");

//contraseña  y repetir contraseñas deben coincidir//

//if (contraseña !== repetir) {
// return showAlertError();
//}

//Funciones de alertas
function showAlertSuccess() {
  document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
  document.getElementById("alert-danger").classList.add("show");
}

// Contraseña de 6 caracteres o más
let form = document.getElementById("registrationForm");
let password = document.getElementById("password1");
let errorAlert = document.getElementById("alert-danger"); //A CHEQUEAR
let errorMessage = errorAlert.querySelector("p"); //A CHEQUEAR
let checkPassword = document.getElementById("password2");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let passwordValue = password.value;

  document.getElementById("alert-success").classList.remove("show");
  errorAlert.classList.remove("show");

  if (passwordValue.length < 6) {
    errorMessage.textContent =
      "La contraseña debe contener al menos 6 caracteres.";
    showAlertError();
    return;
  }

  //Sugerencia de Leti y Flor para las contraseñas que no coinciden
  //  if (password.value !== checkPassword.value) {
  //    errorMessage.textContent = "Las contraseñas no coinciden";
  //    showAlertError();
  //    return;
  //  }
  showAlertSuccess();
  form.submit();
});
