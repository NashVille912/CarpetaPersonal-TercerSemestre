/*Se puede cambiar el valor de N para resolver el problema de las N reinas para diferentes tamaños de tablero*/
const readline = require("readline");

// Crear interfaz para leer input del usuario
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Solicitar al usuario el tamaño del tablero
function solicitarTamanoTablero() {
  rl.question(
    "Ingresa el tamaño del tablero (8 como minimo): ",
    (respuesta) => {
      const N = parseInt(respuesta);

      // Validar el valor ingresado
      if (isNaN(N)) {
        console.log("Por favor, ingresa un número válido.");
        solicitarTamanoTablero();
        return;
      }

      if (N < 8) {
        console.log("El tamaño del tablero debe ser al menos 8.");
        solicitarTamanoTablero();
        return;
      }

      console.log(`Iniciando con tablero de ${N}x${N}`);
      iniciarPrograma(N);
    }
  );
}

// Función que inicializa el programa
function iniciarPrograma(N) {
  // Inicializa tablero y arreglo de posiciones
  let tablero = Array(N)
    .fill()
    .map(() => Array(N).fill("."));
  let posicionesReinas = Array(N).fill(-1);
  let cantidadSoluciones = 0; // <-- Aquí declaras la variable

  /**
   * Verifica si es seguro colocar una reina en la posición especificada
   */
  function posicionSegura(fila, columna) {
    // Verificar columna
    for (let i = 0; i < fila; i++) {
      if (posicionesReinas[i] === columna) {
        return false;
      }
    }

    // Verifica diagonal superior izquierda
    for (let i = fila - 1, j = columna - 1; i >= 0 && j >= 0; i--, j--) {
      if (posicionesReinas[i] === j) {
        return false;
      }
    }

    // Verifica diagonal superior derecha
    for (let i = fila - 1, j = columna + 1; i >= 0 && j < N; i--, j++) {
      if (posicionesReinas[i] === j) {
        return false;
      }
    }

    return true;
  }

  /**
   * Imprime el estado actual del tablero
   */
  function imprimirTablero() {
    console.log("\n Tablero actual:");

    // Imprimir números de columna
    let encabezado = "   ";
    for (let i = 0; i < N; i++) {
      encabezado += ` ${i} `;
    }
    console.log(encabezado);

    // Imprimir línea divisoria
    console.log("   " + "---".repeat(N));

    // Imprimir filas del tablero
    for (let i = 0; i < N; i++) {
      let fila = ` ${i} |`;
      for (let j = 0; j < N; j++) {
        fila += ` ${tablero[i][j]} `;
      }
      console.log(fila);
    }
  }

  /**
   * Actualiza el tablero según las posiciones actuales de las reinas
   */
  function actualizarTablero() {
    // Limpiar el tablero
    tablero = Array(N)
      .fill()
      .map(() => Array(N).fill("."));

    // Colocar reinas
    for (let i = 0; i < N; i++) {
      if (posicionesReinas[i] !== -1) {
        tablero[i][posicionesReinas[i]] = "R";
      }
    }
  }

  /**
   * Función recursiva que resuelve el problema de las N Reinas usando backtracking
   */
  function resolverNReinas(fila = 0) {
    if (fila === N) {
      cantidadSoluciones++; // Incrementa cuando se encuentra una solución
      // Puedes imprimir el tablero aquí si quieres ver cada solución
      // imprimirTablero();
      return; // No retornes true, sigue buscando más soluciones
    }

    for (let col = 0; col < N; col++) {
      if (posicionSegura(fila, col)) {
        posicionesReinas[fila] = col;
        actualizarTablero();
        // Puedes comentar las siguientes dos líneas si no quieres ver cada paso
        // console.log(`\n--- Colocando reina en fila ${fila}, columna ${col} ---`);
        // imprimirTablero();
        resolverNReinas(fila + 1);
        posicionesReinas[fila] = -1;
      }
    }
  }

  // Función principal
  function iniciar() {
    console.log(`\n*** EL PROBLEMA DE LAS ${N} REINAS ***`);

    const tiempoInicio = Date.now();

    resolverNReinas(); // Ya no necesitas el if

    const tiempoFin = Date.now();

    if (cantidadSoluciones > 0) {
      console.log(`\n¡SOLUCIONES ENCONTRADAS: ${cantidadSoluciones}!`);
      console.log(`Tiempo: ${(tiempoFin - tiempoInicio) / 1000} segundos\n`);
    } else {
      console.log("No se encontró solución para este tamaño de tablero");
    }

    rl.close();
  }

  // Ejecutamos la funcion principal
  iniciar();
}

// Comenzamos solicitando el tamaño del tablero
solicitarTamanoTablero();