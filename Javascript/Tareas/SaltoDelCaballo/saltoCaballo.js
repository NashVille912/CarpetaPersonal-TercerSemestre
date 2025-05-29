const N = 8; // Tamaño del tablero (8x8)

// Función principal que intenta resolver el problema del salto del caballo
function resolverSaltoDelCaballo() {
    let paso = 0;          // Contador que indica el número de paso actual del caballo
    let intentos = 0;      // Contador para saber cuántos intentos de movimiento se han probado
    // Matriz que representa el tablero, con ceros indicando casillas no visitadas
    const solucion = Array.from({ length: N }, () => Array(N).fill(0));
    // Movimientos posibles del caballo en coordenadas [fila, columna]
    const movimientos = [
        [2, 1], [1, 2], [-1, 2], [-2, 1],
        [-2, -1], [-1, -2], [1, -2], [2, -1]
    ];

    // Función que verifica si un movimiento a una casilla es válido (dentro del tablero y no visitada)
    function esMovimientoPosible(fila, columna) {
        return (
            fila >= 0 &&                  // fila no negativa
            columna >= 0 &&               // columna no negativa
            fila < N &&                   // fila dentro del límite
            columna < N &&                // columna dentro del límite
            solucion[fila][columna] === 0 // la casilla no está visitada aún
        );
    }

    // Función recursiva que intenta encontrar la solución comenzando en (fila, columna)
    // El parámetro index indica cuántos pasos llevamos dados (índice de la recursión)
    function encontrarPosicion(fila, columna, index) {
        // Si la casilla ya fue visitada, no se puede pasar aquí
        if (solucion[fila][columna] !== 0) {
            return false;
        }

        // Marca la casilla actual con el número de paso
        solucion[fila][columna] = paso++;

        // Si se han completado todos los pasos (todas las casillas visitadas), se encontró solución
        if (index === N * N - 1) {
            return true;
        }

        // Recorremos todos los movimientos posibles del caballo
        for (const [dx, dy] of movimientos) {
            const nuevaFila = fila + dx;
            const nuevaColumna = columna + dy;

            // Si el movimiento es posible, intentamos continuar el recorrido desde esa nueva casilla
            if (esMovimientoPosible(nuevaFila, nuevaColumna)) {
                intentos++; // Contamos que hemos probado un nuevo movimiento
                if (encontrarPosicion(nuevaFila, nuevaColumna, index + 1)) {
                    return true; // Si encontramos solución, propagamos el éxito hacia arriba
                }
            }
        }

        // Si ningún movimiento funciona desde aquí, retrocedemos (backtracking):
        // desmarcamos la casilla actual y reducimos el paso
        solucion[fila][columna] = 0;
        paso--;
        return false; // No se encontró solución por esta ruta
    }

    // Función que muestra la solución encontrada en una tabla HTML
    function mostrarResultado() {
        const contenedor = document.getElementById('resultado');
        let html = '<table>';
        let intentosH4 = document.querySelector('h4');
        intentosH4.textContent = `Cantidad de Intentos: ${intentos}`; // Mostrar número de intentos

        // Construimos la tabla fila por fila
        for (let i = 0; i < N; i++) {
            html += '<tr>';
            for (let j = 0; j < N; j++) {
                // Mostramos el paso con dos dígitos (rellenando con cero a la izquierda si es necesario)
                const num = String(solucion[i][j]).padStart(2, '0');
                html += `<td class="ocupado">${num}</td>`;
            }
            html += '</tr>';
        }
        html += '</table>';

        // Insertamos la tabla en el div resultado
        contenedor.innerHTML = html;
    }

    // Inicia el intento desde la posición (0,0) y el paso 0
    if (encontrarPosicion(0, 0, 0)) {
        mostrarResultado(); // Si hay solución, la mostramos
    } else {
        alert("NO HAY SOLUCIÓN POSIBLE"); // Si no, avisamos
        document.getElementById('resultado').innerHTML = ''; // Limpiamos cualquier resultado previo
    }
}

// Evento para que al hacer click en el botón se ejecute la función resolverSaltoDelCaballo
document.getElementById('btnResolver').addEventListener('click', () => {
    resolverSaltoDelCaballo();
});