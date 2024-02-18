alert ("Bienvenida a nuestra asociación\nHemos hecho un calendario con las principales actividades que ofrecemos. Apúnta todo lo que quieras en el calendario de abajo!")


function cosa(dia) {
    document.getElementById(dia).innerHTML = prompt("Eventos");
}

