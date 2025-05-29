// Juego del Caballo: Problema del salto del caballo en un tablero de ajedrez
const N = 8; // Tamaño del tablero (8x8)

// Función principal que resuelve el problema del salto del caballo
function resolverSaltoDelCaballo() {
    let paso = 0; // Contador para marcar el orden de los movimientos del caballo
    let intentos = 0; // Contador de intentos 
    // Inicializamos la matriz solución con ceros (0 = casilla libre)
    const solucion = Array.from({ length: N }, () => Array(N).fill(0));

    // Array con los posibles movimientos del caballo (fila, columna)
    const movimientos = [
        [2, 1], [1, 2], [-1, 2], [-2, 1],
        [-2, -1], [-1, -2], [1, -2], [2, -1]
    ];

    // Función que verifica si el movimiento a (fila, columna) es válido y no visitado
    function esMovimientoPosible(fila, columna) {
        return (
            fila >= 0 &&               // fila dentro del tablero
            columna >= 0 &&            // columna dentro del tablero
            fila < N &&
            columna < N &&
            solucion[fila][columna] === 0 // casilla no visitada
        );
    }

    // Función recursiva que intenta encontrar un recorrido completo para el caballo
    // fila, columna: posición actual
    // index: número del movimiento actual
    function encontrarPosicion(fila, columna, index) {
        if (solucion[fila][columna] !== 0) { // si casilla ocupada, no válido
            return false;
        }

        solucion[fila][columna] = paso++; // marcamos la casilla con el número de paso actual

        if (index === N * N - 1) { // si llegamos al último paso, solución encontrada
            return true;
        }

        // Intentamos todos los movimientos posibles desde la posición actual
        for (const [dx, dy] of movimientos) {
            const nuevaFila = fila + dx;
            const nuevaColumna = columna + dy;

            if (esMovimientoPosible(nuevaFila, nuevaColumna)) {
                intentos++; // Incrementamos el contador de intentos cada vez que probamos un movimiento válido
                if (encontrarPosicion(nuevaFila, nuevaColumna, index + 1)) {
                    return true; // si alguna llamada recursiva es exitosa, retornamos true
                }
            }
        }

        // Si ninguna opción funcionó, retrocedemos (backtracking)
        solucion[fila][columna] = 0; // desmarcamos la casilla
        paso--; // decrementamos el contador de pasos
        return false;
    }

    // Función para imprimir la matriz resultado en consola formateada
    function mostrarResultado() {
        for (let i = 0; i < N; i++) {
            let filaStr = '';
            for (let j = 0; j < N; j++) {
                // Formateamos con dos dígitos para que sea más legible (ej. '03')
                filaStr += solucion[i][j].toString().padStart(2, '0') + ' ';
            }
            console.log(filaStr);
        }
    }

    // Iniciamos la búsqueda desde la posición (0,0)
    if (encontrarPosicion(0, 0, 0)) {
        console.log(`Solución encontrada \nen: ${intentos} intentos`);
        console.log("=======================");
        mostrarResultado();
        console.log("=======================");
    } else {
        console.log('NO HAY SOLUCIÓN POSIBLE');
        console.log(`Cantidad de intentos realizados: ${intentos}`);
    }
}

// Ejecutar la función para ver el resultado en consola
resolverSaltoDelCaballo();
