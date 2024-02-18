
// Función para el desplazamiento suave
function scrollToTop() {
    window.scrollTo({
      top: 1,
      behavior: "smooth" // Desplazamiento suave
    });
  }
alert("Pulsa en las imágenes para saber más detalles sobre estas!")

// Función para mostrar el texto oculto
function mostrarTexto(idTextoOculto) {
    var textoOculto = document.getElementById(idTextoOculto);
    if (textoOculto.style.display === "none") {
        textoOculto.style.display = "block"; // Mostrar el texto
    } else {
        textoOculto.style.display = "none"; // Ocultar el texto
    }
}