document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevenir que se envíe el formulario sin realizar la validación

    // Elementos definidos
    let password = document.getElementById("password1").value;


    // Validación del campo contraseña y confirmar contraseña
    if (!password || !confirmPassword) {
      showAlertError("La contraseña debe ser ingresada.");
      return;
    }

    if (password.length < 6) {
      showAlertError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }


function showAlertError(message) {
  alert(message);
}