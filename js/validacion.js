
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
let errorAlert = document.getElementById("alert-danger"); 
let errorMessage = errorAlert.querySelector("p"); 
let checkPassword = document.getElementById("password2");
let terms = document.getElementById("terminos")

//Variables para "Ningun campo puede estar vacío"
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  document.getElementById("alert-success").classList.remove("show");
  errorAlert.classList.remove("show");

  if (password.value.length < 6) {
    errorMessage.textContent =
      "La contraseña debe contener al menos 6 caracteres.";
    showAlertError();
    return;
  }

  // contraseñas que no coinciden
    if (password.value !== checkPassword.value) {
      errorMessage.textContent;
      showAlertError();
     return;
   }

   // si el checkbox está marcado
   if (!terms.checked) {
    errorMessage.textContent =
    ("Debes aceptar los términos y condiciones del servicio.");
    showAlertError();
    return;
  }

  //Ningún campo puede estar vacío
  if (
    nombre.value == "" || apellido.value == "" || email.value == "" || password.value == "") {
    showAlertError();
    return;
  }

  showAlertSuccess();
  form.submit();
});

