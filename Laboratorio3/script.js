//Para guardar datos es localStorage.setItem();
//setItem para contar las recargas de la página.
//Para obtener datos es localStorage.getItem();
document.addEventListener("DOMContentLoaded",function(){
    //función para el contador
});
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("enviar");
    const nickInput = document.getElementById("nick");
    const colorInput = document.getElementById("back-color");

    // 1️⃣ Aplicar los valores guardados al cargar la página
    const nickGuardado = localStorage.getItem("nickname");
    const colorGuardado = localStorage.getItem("backgroundColor");

    if (nickGuardado) {
        nickInput.value = nickGuardado;
    }

    if (colorGuardado) {
        colorInput.value = colorGuardado;
        document.body.style.backgroundColor = colorGuardado;
    }

    // 2️⃣ Guardar los valores al enviar el formulario
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const nick = nickInput.value;
        const color = colorInput.value;

        localStorage.setItem("nickname", nick);
        localStorage.setItem("backgroundColor", color);

        // Aplicar color inmediatamente
        document.body.style.backgroundColor = color;

        alert(`Datos guardados: Nickname = ${nick}, Color = ${color}`);
    });
});

//Función para la última visita
document.addEventListener("DOMContentLoaded", function() {
    //Guardar última visita
    let visitaGuardada = localStorage.setItem(document.cookie);
    //Escribirla
    localStorage.getItem(visitaGuardada);


});

