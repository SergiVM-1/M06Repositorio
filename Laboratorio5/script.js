console.log("PARTE 1");

console.log("PARTE 1.1");
var inventario = [["croassanes", 10, 2.15], ["agua", 40, 1], ["bolsa patatas", 25, 0.75]];
console.log("Creamos una matriz de productos con cantidades y precios");
console.log(inventario);
console.log("-----------------");

console.log("PARTE 1.2");
console.log("Mostramos el nombre del producto de la segunda fila y su precio = " + inventario[1][0] + ", " + inventario[1][2]);
console.log("Utilizamos length para devolver el total de filas en la matriz y el número de elementos en la primera fila");
console.log("Total de filas de la matriz = " + inventario.length);
console.log("Elementos primera fila = " + inventario[0].length);
console.log("-----------------");

console.log("PARTE 1.3");
console.log("Bucle que muestra que elementro de la lista se esta accediendo = ")
for (var i = 0; i < inventario.length; i++) {
    for (var j = 0; j < inventario[i].length; j++) {
        console.log("Inventario[" + i + "][" + j + "] = " + inventario[i][j]);
    }
}
console.log("Bucle que solo recoge el nombre de los productos = ")
for (var i = 0; i < inventario.length; i++) {
        console.log("Inventario[" + i + "][" + 0 + "] = " + inventario[i][0]);
    }


console.log("-----------------");
console.log("PARTE 2");
console.log("PARTE 2.1")
function calcularValorTotal (inventario){
    var total = 0;

    for (var i = 0; i < inventario.length; i++) {
        total += inventario[i][1] * inventario[i][2];
    }

    return total;
}

console.log("Hemos creado una función llamada calcularValorTotal que multiplica cantidad * precio de cada producto y devuelve la suma total");
console.log(calcularValorTotal);
console.log("Resultado = " + calcularValorTotal(inventario));
console.log("-----------------");

console.log("PARTE 2.2");
console.log("Creamos una variable ordenarPorPrecio y le asignamos una función de comparación = ");
var ordenarPorPrecio = function(a, b){return a[2] - b[2]};
console.log(ordenarPorPrecio);
console.log("La utilizamos para ordenar la matriz por el precio que esta en la última posición [2] de cada fila forma ascendente");
console.log("Matriz sin ordenar = " + inventario);
console.log("Bolsa patatas = 18.75 // Croassanes = 21.5 // Agua = 40");
inventario.sort(ordenarPorPrecio);
console.log("Matriz ordenada = " + inventario);
console.log("-----------------");

console.log("PARTE 3");
console.log("PARTE 3.1");
console.log("Queremos crear un método nuevo al array que devuelva el último elemento de array");
Array.prototype.getLast = function() {
   return this[this.length -1];
};
console.log("Último elemento de la matriz = " + inventario.getLast());
console.log("El This hace referencia al array que esta llamando al método");
console.log("-----------------");

console.log("PARTE 3.2");
console.log("Vamos a verificar que el metodo anterior funciona creando una array simple de prueba");
var arraySimple = ["hola", 18, false];
console.log(arraySimple);
console.log(arraySimple.getLast());
console.log("Comprobamos que la longitud es la misma = " + arraySimple.length);

