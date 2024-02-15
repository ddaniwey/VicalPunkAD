// Solicitar al usuario que acepte las cookies
if (!confirm("Acepta las cookies\nporfi plis <3")) {
    // Si no confirma, mostrar un mensaje y mantener en un bucle

    while (!confirm("Acepta las cookies\nPorfi plis <3"));
} else {
    alert("Gracias punky");
}

// Vamos a hacer un alert con los datos introducidos
function enviar(){
var nombre = document.getElementById("nombre").value;
var apellidos = document.getElementById("apellidos").value;
var email = document.getElementById("correo").value;
var DNI = document.getElementById("DNI").value;
var estadocivil = document.getElementsByName("estado-civil");

if (estadocivil[0].checked == true) {
    var mensajeestado = "soltera";
} else if (estadocivil[1].checked == true) {
    var mensajeestado = "casada";
} else {
    var mensajeestado = "divorciada";
}


alert("Has rellenado tus datos con: \n" + "Nombre: "+ nombre + "\nApellidos: " + apellidos + "\nTu email: " + email + "\nTu DNI: " + DNI + "\nTu estado civil es: " + mensajeestado);

}