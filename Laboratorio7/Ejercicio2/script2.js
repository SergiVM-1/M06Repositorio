let nodeNombre = document.getElementById("nombre");
let nodeEntradaNom = document.getElementById("entradaNombre");
let nodeFechaNac = document.getElementById("fechaNAcimiento");
let nodeFecha = document.getElementById("fecha");
let nodeSelect = document.getElementById("pais");
let nodeValorSelect = document.getElementById("valorSelect");

function mostrar() {
    nodeNombre.innerHTML = nodeEntradaNom.value;
    nodeFechaNac.innerHTML = nodeFecha.value;
    nodeValorSelect.innerHTML = nodeSelect.value;
}
