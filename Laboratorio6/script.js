console.log("APARTADO 1")
console.log("Definimos una clase y sus propiedades")

class Pais{
    constructor(nombre, poblacion, area, ciudades){
        this.nombre = nombre
        this.poblacion = poblacion
        this.area = area
        this.ciudades = ciudades
    }

    incrementarPoblacion(cantidad){
        return this.poblacion += cantidad
    }

    densidad(){
        return this.poblacion / this.area
    }

    compararArea(otroPais){
        console.log(this.area)
        console.log(otroPais.area)
        return this.area > otroPais.area ? this.nombre + " es más grande que " + otroPais.nombre : otroPais.nombre + " es más grande que " + this.nombre
    }

    mostrarCiudades(){
        for (let i = 0; i < this.ciudades.length; i++)
            console.log(this.ciudades[i])
    }

    mostrarCiudadesPorLetra(){
        for (let i = 0; i < this.ciudades.length; i++)
            for (let j = 0; j <= this.ciudades[i].length; j++)
                console.log(this.ciudades[i][j])
    }
}
let pais1 = new Pais("España", 45, 506.0530, ["Barcelona", "Madrid", "Valencia"])
let pais2 = new Pais("Argentina", 20, 278.540, ["Argentina", "La Plata", "Mar de Plata"] )

console.log(Pais)
console.log(pais1)
console.log(pais2)

console.log("-----------------------")
console.log("APARTADO 2")
console.log("2.2. Creación de un método que sume la cantidad de población")
console.log("Función incrementarPoblacion(cantidaad)")
console.log(pais1.poblacion)
console.log(pais1.incrementarPoblacion(250))

console.log("2.2. Método densidad() que calcule la densidad de un país (población / área")
console.log("Función densidad()")
console.log(pais1.densidad())

console.log("---------------")
console.log("APARTADO 3")
console.log("3.1 Método que compare el área del país actual con otro país con operador ternario")
console.log("Función compararArea(otroPais)")
console.log(pais1.compararArea(pais2))

console.log("---------------")
console.log("APARTADO 4")
console.log("4.1 Método mostrarCiudades recorre el array y muestra en consola")
console.log("Método mostrarCiudades()")
console.log(pais1.mostrarCiudades())

console.log("4.2 Método que muestre las ciudades por letra")
console.log("Método mostrarCiudadesPorLetra()")
console.log(pais1.mostrarCiudadesPorLetra())
