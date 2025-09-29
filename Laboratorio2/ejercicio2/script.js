let numero = Math.floor(Math.random() * 101); 
let contador = 0;
//Prompt sirve para pedir datos al usuario
let numU = parseInt(prompt("Elige un número del 1 al 100"));
while (numU != numero && contador <= 7) {
if(numU < numero){
	alert("el numero aleatorio es mayor");
} else {
	alert("el numero aleatorio es menor");
}
    numU = parseInt(prompt("Elige un número del 1 al 100"));
    contador++;
}
if (numU === numero) {
    alert("Felicidades, has adivinado el número en " + contador + " intentos.");
} else {
    alert("Has perdido, el número era " + numero + ".");
}
