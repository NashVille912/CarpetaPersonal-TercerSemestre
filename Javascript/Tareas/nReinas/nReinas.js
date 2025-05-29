const N = 8; // Puedes cambiarlo a 9, 10, etc. (mínimo 8)

function nReinas(n) {
    const solutions = [];
    const board = Array(n).fill(-1); // Arreglo que guarda en qué columna está la reina de cada fila

    function isSafe(row, col) {
        for (let i = 0; i < row; i++) {
            if (board[i] === col ||         // Misma columna
                board[i] - i === col - row || // Misma diagonal \
                board[i] + i === col + row) { // Misma diagonal /
                return false;
            }
        }
        return true;
    }

    function printBoard() {
        const visualBoard = [];
        for (let i = 0; i < n; i++) {
            let row = Array(n).fill('.');
            if (board[i] !== -1) row[board[i]] = 'R';
            visualBoard.push(row.join(' '));
        }
        console.log(visualBoard.join('\n'));
        console.log('-'.repeat(n * 2));
    }

    function backtrack(row = 0) {
        if (row === n) {
            solutions.push([...board]);
            console.log("¡Solución encontrada!");
            printBoard();
            console.log("Índices de reinas:", board);
            console.log("\n");
            return;
        }

        for (let col = 0; col < n; col++) {
            if (isSafe(row, col)) {
                board[row] = col;
                printBoard(); // Mostrar cómo se va formando el tablero
                backtrack(row + 1);
                board[row] = -1; // Backtrack
            }
        }
    }

    backtrack();
    console.log(`Total de soluciones para N=${n}: ${solutions.length}`);
}

// Ejecutar el algoritmo
nReinas(N);
