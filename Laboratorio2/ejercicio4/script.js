var ancho = innerWidth;
var largo = innerHeight;
console.log("Ancho: " + ancho + " Largo: " + largo);

const bienvenido = alert("Bienvenido/a");

let nombre = prompt("Cual es tu nombre?");
document.writeln(nombre);

const boton = document.getElementById("abrirBtn");

boton.addEventListener("click", () => {
   const ventana = window.open("https://www.google.com");

        const cerrar = confirm("Quieres cerrar la ventana abierta?");

        if (cerrar) {
            ventana.close();
        }
    });