let seleccionarPersonajeJugador = () => {

        
    let zuko = document.getElementById('zuko');
    let katara = document.getElementById('katara');
    let aang = document.getElementById('aang');
    let toph = document.getElementById('toph');
    let spanPersonajeJugador = document.getElementById('personaje-jugador');

    if (zuko.checked) {
        spanPersonajeJugador.innerHTML = "Zuko";
    } else if (katara.checked) {
        spanPersonajeJugador.innerHTML = "Katara";
    } else if (aang.checked) {
        spanPersonajeJugador.innerHTML = "Aang";
    } else if (toph.checked) {
        spanPersonajeJugador.innerHTML = "Toph";
    }
    else {
        alert("No has seleccionado ningun personaje");
    }

    let spanPersonajeEnemigo = document.getElementById('personaje-enemigo');
    let personajes = ['Zuko', 'Katara', 'Aang', 'Toph'];
    
    //Seleccion del personaje del enemigo
    let personajeAleatorio = () => {
        return personajes[Math.floor(Math.random() * personajes.length)];
    }
    let personajeEnemigo = personajeAleatorio();
    // Asignar un personaje aleatorio al enemigo
    spanPersonajeEnemigo.innerHTML = personajeEnemigo;
}

function iniciarJuego(){


    // Seleccion del Personaje 
    let btnPersonajeJugador = document.getElementById("boton-personaje")
    btnPersonajeJugador.addEventListener('click', seleccionarPersonajeJugador)
    btnPersonajeJugador.addEventListener('click', seleccionarPersonajeJugador)

}

// Espera a que la ventana se cargue completamente antes de ejecutar iniciarJuego
window.addEventListener('load', iniciarJuego);


