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

let gerente1 = new Gerente("Carlos", 5000, "Sistemas");
console.log(gerente1); //Objeto clase hijo

let empleado1 = new Empleado("Juan", 3000);
console.log(empleado1); //Objeto clase padre

