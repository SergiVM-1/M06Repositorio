/*En js no existen las clases abstractas de forma nativa, ninguna palabra clave como abstract,
entonces existe esta parte de codigo que hace lo siguiente:
if (new.target === Figura): evita que alguien cree una instancia directa de la clase abstracta Figura.
throw new Error(...): asegura que las subclases implementen los métodos requeridos.

new.target es una propiedad especial disponible dentro de los constructores.
Retorna una referencia al constructor que fue llamado con new.
Si haces new Vehiculo(), entonces new.target === Vehiculo, y lanza el error.
Si haces new Auto(), entonces new.target === Auto, así que no lanza el error.

Básicamente se puede bloquear la instanciación directa de la clase que deberia ser abstracta y se definen métodos que darán
error en caso de que no se ejecuten en las subclases. Si no se aplicaran estas lineas, no se bloquea la instanciación de 
clases que deberian ser abstractas y puede causar errores de ejecucion más adelante.
*/

class Vehiculo {
    constructor(marca, modelo, velocidadMaxima){
          if (new.target === Vehiculo) {
            throw new Error("No se puede instanciar la clase abstracta 'Vehiculo'.");
        }

        this.marca = marca;
        this.modelo = modelo;
        this.velocidadMaxima = velocidadMaxima;
    }

    acelerar(){
        throw new Error("El método abstracto 'acelerar()' debe ser implementado en la subclase.");
    }

    detener(){
        /*Al no tener el throw error no cuenta como método abstracto y se ejecutará en todas 
        las instancias de objetos de clases no abstractas*/
        return "El " + this.constructor.name + " esta se ha detenido";
    }

}

class Auto extends Vehiculo{
    constructor(marca, modelo, velocidadMaxima, puertas){
        super(marca, modelo, velocidadMaxima);    
        this.puertas = puertas;
    }

    acelerar(){
        return "El auto acelera hasta " + this.velocidadMaxima + "km/h";
    }
   
}

class Bicicleta extends Vehiculo{
    constructor(marca, modelo, velocidadMaxima, tipo){
        super(marca, modelo, velocidadMaxima);
        this.tipo = tipo;
    }

    acelerar(){
        return "La bicicleta alcanza una velocidad de " + this.velocidadMaxima +"km/h pedaleando";
    }
}

const vehiculo1 = new Auto("BMW", "Familiar", 180, 5);
console.log(vehiculo1.acelerar());
console.log(vehiculo1.detener());

const vehiculo2 = new Bicicleta("Nose", "Alguno", 40, "Montaña");
console.log(vehiculo2.acelerar());
console.log(vehiculo2.detener());

/*Al intentar instanciar un objeto de una clase "abstracta" salta este error:
Uncaught Error: No se puede instanciar la clase abstracta 'Vehiculo'.*/
const vehiculo3 = new Vehiculo();
console.log(vehiculo3.acelerar());
console.log(vehiculo3.detener());