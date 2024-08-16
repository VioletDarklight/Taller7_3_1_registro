
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

  // contraseñas que no coinciden
    if (password.value !== checkPassword.value) {
      errorMessage.textContent;
      showAlertError();
     return;
   }
  showAlertSuccess();
  form.submit();
});

// si el checkbox está marcado
if (!checkbox.checked) {
  alert("Debes aceptar los términos y condiciones del servicio.");
  event.preventDefault(); // Previene el envío del formulario
};