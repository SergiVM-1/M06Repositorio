class Vehiculo {
    #velocidad;
    #estadoMotor;

    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
        this.#velocidad = 0;
        this.#estadoMotor = false; 
    }

    encenderMotor() {
        console.log(`Estado previo del motor: ${this.#estadoMotor ? 'Encendido' : 'Apagado'}`);
        if (!this.#estadoMotor) {
            this.#estadoMotor = true;
            console.log("El motor se ha encendido.");
        } else {
            console.log("El motor ya estaba encendido.");
        }
        console.log(`Estado actual del motor: ${this.#estadoMotor ? "Encendido" : "Apagado"}`);
    }

    acelerar(incremento) {
        console.log(`Velocidad inicial: ${this.#velocidad} km/h`);
        this.#velocidad += incremento;
        console.log(`Se aceleró ${incremento} km/h.`);
        console.log(`Velocidad actual: ${this.#velocidad} km/h`);
    }

    mostrarInformacion(){
        console.log(`El Vehiculo de marca ${this.marca}, modelo ${this.modelo} tiene velocidad ${this.getVelocidad()} km/h, motor ${this.getEstadoMotor()}.`);
    }

    getVelocidad() {
        return this.#velocidad;
    }

    getEstadoMotor() {
        return this.#estadoMotor ? "Encendido" : "Apagado";
    }
}

class Coche extends Vehiculo {
    constructor(marca, modelo, numPuertas){
        super(marca, modelo);
        this.numPuertas = numPuertas;
    }

    encenderMotor(){
        super.encenderMotor();
    }

    acelerar(incremento){
        super.acelerar(incremento);
        console.log("Gracias al motor de 78 caballos");
    }

    mostrarInformacion(){
        console.log(`El coche de marca ${this.marca}, modelo ${this.modelo} tiene velocidad ${this.getVelocidad()} km/h, motor ${this.getEstadoMotor()}, y por si no lo había dicho dispone de ${this.numPuertas} puertas.`);
    }
}

class Bicicleta extends Vehiculo{
    constructor(marca, modelo){
        super(marca, modelo);
    }

    encenderMotor(){
        if(this.getEstadoMotor){
            console.log("La bicicleta no tiene motor");
        } else {
            const base = super.encenderMotor();
        }
    }

    acelerar(incremento){
        super.acelerar(incremento);
        console.log("Gracias a la fuerza de los cuádriceps");
    }

    mostrarInformacion(){
        console.log(`La bici de marca ${this.marca}, modelo ${this.modelo} tiene velocidad ${this.getVelocidad()} km/h. No tiene motor como ya se puede suponer.`);
    }
}


console.log("Creamos un objeto de Vehiculo:");
const auto = new Vehiculo("BMW", "Sedan");
console.log(auto);
console.log(auto.encenderMotor());
console.log(auto.acelerar(20));
console.log(auto.mostrarInformacion());

console.log("-------------------------------");
console.log("Creamos un objeto de Coche:");
const coche1 = new Coche("BMW", "Serie 3 Compact", 3);
console.log(coche1);
console.log(coche1.encenderMotor());
console.log(coche1.acelerar(20));
console.log(coche1.mostrarInformacion());

console.log("-------------------------------");
console.log("Creamos un objeto de Bicicleta:");
const bici = new Bicicleta("Asus", "BMX");
console.log(bici);
console.log(bici.encenderMotor());
console.log(bici.acelerar(20));
console.log(bici.mostrarInformacion());
