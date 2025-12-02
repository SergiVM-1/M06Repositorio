function agregarMensaje() {
    let nuevoLi = document.createElement("li");

    nuevoLi.textContent = "Nuevo Mensaje";

    let parrafo = document.getElementById("mensaje");
    parrafo.innerHTML = "";        
    parrafo.appendChild(nuevoLi);  
}
