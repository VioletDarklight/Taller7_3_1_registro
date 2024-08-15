function showAlertSuccess() {
  document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
  document.getElementById("alert-danger").classList.add("show");
}

//contraseña  y repetir contraseñas deben coincidir//

let contraseña = getElementById("password1");
let repetir = getElementById("password2");

if (contraseña !== repetir) {
  return showAlertError()
}
