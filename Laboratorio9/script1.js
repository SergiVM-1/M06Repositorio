//Ejercicio1
let boton = document.getElementById("btn-multi");

function mensaje1(){
    alert("Mensaje número 1");
}

function mensaje2(){
    alert("Mensaje número 2");
}

boton.addEventListener('click', mensaje1);
boton.addEventListener('click', mensaje2);

//Ejercicio2
let body = document.getElementById("main-body");
let textarea = document.getElementById("campo-texto");
let div = document.getElementById("info-pantalla");

textarea.addEventListener("keydown", (e) => {
    console.log(e.key + " " + "[event: keydown]");
});

//Ejercicio 3
textarea.addEventListener("keydown", (e) => {
    if (e.key >= "0" && e.key <= "9") {
        error(e);
    }
});

function error(event) {
    event.preventDefault();
    alert("No puedes introducir números");
}


