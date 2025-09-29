class Alumno{
    constructor(nombre, edad, nota){
        this.nombre = nombre;
        this.edad = edad;
        this.nota = nota;
    }

    estaAprobado(){
        if(this.nota >= 5){
            return "Aprobado";
        } else {
            return "Suspendido";
        }
    }

    presentacion(){
        return "Soy " + this.nombre + ", tengo " + this.edad + " y mi nota es " + this.nota + " (" + this.estaAprobado() + ").";
    }
}

class AlumnoBecado extends Alumno{
    constructor(nombre, edad, nota, beca) {
        super(nombre, edad, nota);
        this.beca = beca;
    }

    presentacion(){
        const base = super.presentacion();
        return base + " Con beca de " + this.beca + "€.";
    }
}

const alumno1 = new Alumno("Anna", 28, 7);
const alumno2 = new Alumno("Jose", 26, 4);
const alumno3 = new Alumno("Sergio", 22, 5.5);
const becado1 = new AlumnoBecado("Mario", 21, 8, 1500);

console.log(alumno1.presentacion());
console.log(alumno2.presentacion());
console.log(alumno3.presentacion());
console.log(becado1.presentacion());

