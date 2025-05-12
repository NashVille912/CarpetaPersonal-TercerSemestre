'use strict';

try {
    // Bloque de código que puede generar un error
    x = 10;
    mifuncion();
    throw 'Mi error'; // Lanza un error manualmente
} catch (error) {
    console.log('Tipo de error => ' + error); //Se ejecuta si hay un error
}
finally {
    console.log('Terminada la revision de errores'); //Este bloque se ejecuta siempre
}

console.log('Continua el programa...'); 

let resultado = 5;

try {
    if (isNaN(resultado)) {
        throw 'No es un número';
    } else if (resultado === '') {
        throw 'Es una cadena vacía';
    } else if (resultado >= 0) {
        throw 'Es un número positivo';
    } else if (resultado < 0) {
        throw 'Es un número negativo';
    } 
} catch (error) {
    console.log(error);
    console.log(error.name);
    console.log(error.message);
    
} finally {
    console.log('Terminada la revision de errores');
}
