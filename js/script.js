
let usuario = prompt("¡Hola! ¿Cuál es tu nombre?");

if (usuario === "" || usuario === null) {
    usuario = "Invitado";
}

const mensajeElemento = document.getElementById('mensaje-saludo');


let fecha = new Date();
let hora = fecha.getHours();
let saludo;

if (hora < 12) {
    saludo = "¡Buenos días, " + usuario + "! ";
} else if (hora < 20) {
    saludo = "¡Buenas tardes, " + usuario + "! ";
} else {
    saludo = "¡Buenas noches, " + usuario + "! ";
}


mensajeElemento.textContent = saludo;


function marcarFavorito(elemento) {
    elemento.textContent = "¡Favorita!";
    elemento.style.backgroundColor = "#e23636";
    console.log("Película marcada por: " + usuario);
}

