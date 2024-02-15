var span = document.getElementById("spanhide").addEventListener("mouseover" , mostrarTexto);
document.getElementById("imagen").addEventListener("mouseout", ocultarTexto);


function ocultarTexto() {
    var span = document.getElementById("spanhide");
    span.style.display = "none";
}
function mostrarTexto() {
    var span = document.getElementById("spanhide");
    span.style.display = "inline"; // Cambiar a "block" si es necesario
    span.style.visibility = "visible";
}