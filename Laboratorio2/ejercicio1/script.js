/*
Basicamente, las variables declaradas dentro de una función son independientes de las declaradas fuera
de esta ya que estan fuera del scope(alcanze), por lo que no deja acceder a sus valores y por eso da el error de not defined,
tendrías que crear de nuevo esta variable para poder acceder a ella fuera de la función.

Con los bloques if las variables var tienen el comportamiento de hoisting, lo que significa que se "elevan"
a variable global antes de ejecutar el código. En cambio, let y const siguen siguen teniendo ambito de bloque
por lo que la declarada dento y fuera del if son independientes la una de la otra.

Con const se puede modificar un objeto o array ya que const solo fija la referencia, no hace al objeto inmutable, es decir, 
sus propiedades si que pueden cambiar.
*/

//funcion con var
function variable(){
    var uno = 1;
    return uno;
}
console.log(variable);
//console.log(uno); da error al intentar coger la variable fuera de la función (uno is not defined)
var uno = 2;
console.log(uno);

//funcion con let
function lets(){
    let dos = 3;
    return dos;
}
console.log(lets);
//console.log(dos); da error al intentar coger la variable fuera de la función (is not defined)
let dos = 4;
console.log(dos);

//funcion con const
function constante(){
    const tres = 5;
    return tres;
}
console.log(constante);
//console.log(tres); da error al intentar coger la variable fuera de la función (is not defined)

//bloque var
if(true){
    var ejemploVar = "Variable var en if";
    console.log(ejemploVar);
} 
console.log(ejemploVar); //No hay problema en sacarlo del if ya que es global
var ejemploVar = "Hola";
console.log(ejemploVar); //Se puede cambiar su contenido sin problema

//bloque let
if(true){ 
    let ejemploLet = "Variable let en if";
    console.log(ejemploLet);
} 
//console.log(ejemploLet); da error al intentar coger la variable fuera del if (is not defined)
let ejemploLet = "Adios";
console.log(ejemploLet);

//bloque const
if(true){
    const ejemploConst = "Variable const en if";
    console.log(ejemploConst);
} 
//console.log(ejemploConst); da error al intentar coger la variable fuera del if (is not defined)
const ejemploConst = "Muy buenas";
console.log(ejemploConst);


const persona = { nombre: "Ana" };
persona.nombre = "Luis"; 
console.log(persona); 
//Esto esta bien ya que no cambias la referencia del objeto, solo el contenido del mismo
const persona2 = { nombre: "Ana" };
persona2.nombre = "Luis"; 
// persona2 = { nombre: "Pedro" }; 
//Este caso daria error ya que estas intentando reasignar la referencia del objeto

//const hola = "hola";
//const hola = "adios";
//Esto va a dar error ya que intentas reasignar un valor o una referencia.
