// function numeroAleatorio(min, max) {
        //     return Math.floor(Math.random() * (max - min + 1)) + min;
        // }
        // let numeroAleatorio = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
        let jugador;
        let pc;
        let opciones = ["Piedra", "Papel", "Tijera", "Lagarto", "Spock"];
        let puntosJugador = 0;
        let puntosPC = 0;

        // Función para que la PC elija su jugada y mostrarla
        let eleccionPc = () => {
            pc = opciones[Math.floor(Math.random() * opciones.length)];
            let eleccionPC = document.getElementById("eleccion-compu");
            eleccionPC.textContent = "Computadora Eligió: " + pc;
        }
        //Funcion para reiniciar el juego
        let resetearJuego = () => {
            document.location.reload();
        }

        // Función para ejecutar el juego
        let asignarJugador = (valor) => {
            jugador = valor;
            let eleccionJugador = document.getElementById("eleccion-jugador");
            let ronda = document.getElementById("ronda");

            // La PC elige su jugada antes de comparar
            eleccionPc();

            if (jugador == 'Piedra') {
                eleccionJugador.textContent = "Jugador Eligió: Piedra";
            } else if (jugador == 'Papel') {
                eleccionJugador.textContent = "Jugador Eligió: Papel";
            } else if (jugador == 'Tijera') {
                eleccionJugador.textContent = "Jugador Eligió: Tijera";
            } else if (jugador == 'Lagarto') {
                eleccionJugador.textContent = "Jugador Eligió: Lagarto";
            } else if (jugador == 'Spock') {
                eleccionJugador.textContent = "Jugador Eligió: Spock";
            }

            // Combate
            if (pc == jugador) {
                ronda.textContent = "¡Empate!";
            } else if (
                //Scissors cuts Paper covers Rock crushes Lizard 
                // poisons Spock smashes Scissors decapitates Lizard
                // eats Paper disproves Spock vaporizes 
                // Rock crushes Scissors.
                (jugador == "Tijera" && pc == "Papel") ||
                (jugador == "Papel" && pc == "Piedra") ||
                (jugador == "Piedra" && pc == "Lagarto") ||
                (jugador == "Lagarto" && pc == "Spock") ||
                (jugador == "Spock" && pc == "Tijera") ||
                (jugador == "Tijera" && pc == "Lagarto") ||
                (jugador == "Lagarto" && pc == "Papel") ||
                (jugador == "Papel" && pc == "Spock") ||
                (jugador == "Spock" && pc == "Piedra") ||
                (jugador == "Piedra" && pc == "Tijera")
            ) {
                ronda.textContent = "¡Ganaste!";
                puntosJugador++;
                document.getElementById("jugador").textContent = "Puntos Jugador: " + puntosJugador;
            } else {
                ronda.textContent = "¡Perdiste!";
                puntosPC++;
                document.getElementById("compu").textContent = "Puntos Computadora: " + puntosPC;
            }
                if (puntosJugador == 5) {
        alert("¡Felicidades! Has ganado el juego.");
        resetearJuego();
    } else if (puntosPC == 5) {
        alert("Lo siento, la computadora ha ganado el juego.");
        resetearJuego();
    }
        }
