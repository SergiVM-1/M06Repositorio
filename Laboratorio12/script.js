document.getElementById("formularioInscripcion").addEventListener("submit", function(event) {
    
    event.preventDefault(); 

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (password.length < 8) {
        alert("La contraseña debe tener al menos 8 caracteres.");
        return;
    }

    console.log(`Bienvenido ${nombre}, tu email es ${email}`);
});