//contraseña  y repetir contraseñas deben coincidir//

let contraseña = getElementById("password1");
let repetir = getElementById("password2");

if (contraseña !== repetir) {
  return showAlertError()
}
