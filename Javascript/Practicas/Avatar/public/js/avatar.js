let seleccionarPersonajeJugador = () => {
    if (zuko.checked) {
        alert("Has seleccionado a Zuko");
    } else if (katara.checked) {
        alert("Has seleccionado a Katara");
    } else if (aang.checked) {
        alert("Has seleccionado a Aang");
    } else if (toph.checked) {
        alert("Has seleccionado a Toph");
    }
}


let btnPersonajeJugador = document.getElementById("boton-personaje")
btnPersonajeJugador.addEventListener('click', seleccionarPersonajeJugador)

// Selección de personajes
let zuko = document.getElementById('zuko');
let katara = document.getElementById('katara');
let aang = document.getElementById('aang');
let toph = document.getElementById('toph');

