//Ejercicio 1
let boton = document.getElementById("btn-multi");

boton.addEventListener('mousedown', function(e){
    console.log('Evento de tipo: ' + e.type);
});
boton.addEventListener('mouseup', function(e){
    console.log('Evento de tipo: ' + e.type);
});
boton.addEventListener('click', function(e){
    console.log('Evento de tipo: ' + e.type);
});
boton.addEventListener('dblclick', function(e){
    console.log('Evento de tipo: ' + e.type);
});

//Ejercicio 2 Y 3
let section = document.getElementById("section-bbl");
let div = document.getElementById("div-bbl");
let btn = document.getElementById("btn-bbl");

section.addEventListener('click', function(e){
    console.log('Click en el padre');
});
div.addEventListener('click', function(e){
    console.log('Click en el hijo');
});
btn.addEventListener('click', function(e){
    console.log('Click en el botón');
    //Parte ejercicio 3
    e.stopPropagation();
});

