const CLAVE_ALMACENAMIENTO = "aceptoCondiciones";
const acepto = document.getElementById("acepto_condiciones"); 
const noAcepto = document.getElementById("no_acepto_condiciones"); 
const condicionRadios = document.querySelectorAll('input[name="condiciones"]');


function actualizarFondo(aceptado) {
  document.body.style.backgroundColor = aceptado ? "lightgreen" : "lightcoral";
}

function guardarYActualizar(valorBooleano) {
  localStorage.setItem(CLAVE_ALMACENAMIENTO, valorBooleano.toString());
  actualizarFondo(valorBooleano);
}


window.addEventListener("load", () => {
  const valorGuardado = localStorage.getItem(CLAVE_ALMACENAMIENTO);
  
  if (valorGuardado === "true") {
    acepto.checked = true;
    actualizarFondo(true);
  } else if (valorGuardado === "false") {
    noAcepto.checked = true;
    actualizarFondo(false);
  } else {
    noAcepto.checked = true; 
    actualizarFondo(false);
  }
});

condicionRadios.forEach(radio => {
  radio.addEventListener("change", (evento) => {
    const esAcepto = evento.target.id === "acepto_condiciones";
    
    guardarYActualizar(esAcepto); 
  });
});