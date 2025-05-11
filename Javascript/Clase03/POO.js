    class Empleado {
    constructor(nombre, sueldo) {
        this.nombre = nombre;
        this.sueldo = sueldo;
    }

    obtenerDetalles() {
        return `EMPLEADO:  Nombre: ${this.nombre}, Sueldo: ${this.sueldo}`;
    }
}


class Gerente extends Empleado {
    constructor(nombre, sueldo, departamento) {
        super(nombre, sueldo);
        this.departamento = departamento;
    }

    obtenerDetalles() {
        return `GERENTE: ${super.obtenerDetalles()}, Departamento: ${this.departamento}`;
    }
}

function imprimir(tipo) {
    console.log(tipo.obtenerDetalles());
    
    if (tipo instanceof Gerente) {
        console.log("Es un objeto de tipo Gerente");
    } else if (tipo instanceof Empleado) {
        console.log("Es un objeto de tipo Empleado");
    } else if (tipo instanceof Object) {
        console.log("Es un objeto de tipo Object");
    }
}
let gerente1 = new Gerente("Carlos", 5000, "Sistemas");
console.log(gerente1); //Objeto clase hijo

let empleado1 = new Empleado("Juan", 3000);
console.log(empleado1); //Objeto clase padre

imprimir(gerente1); //Imprime el objeto gerente
imprimir(empleado1); //Imprime el objeto empleado