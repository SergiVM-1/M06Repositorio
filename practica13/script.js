const textarea = document.getElementById("motivacion");
const contador = document.getElementById("contador");
const form = document.getElementById("formulario");

textarea.addEventListener("input", () => {
  const max = textarea.maxLength;
  const actual = textarea.value.length;
  const restante = max - actual;

  contador.textContent = `${actual} / ${max}`;

  if (restante < 20) {
    contador.style.color = "red";
  } else {
    contador.style.color = "black";
  }
});

form.addEventListener("submit", (event) => {

  const email = document.getElementById("email").value;
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!regexEmail.test(email)) {
    alert("El email no tiene un formato válido.");
    event.preventDefault();
    return;
  }

  const nombre = document.getElementById("nombre").value;
  const regexNombre = /^[A-ZÁÉÍÓÚÑ][a-zA-ZÁÉÍÓÚÑ\s]*$/;

  if (!regexNombre.test(nombre)) {
    alert("El nombre debe empezar por mayúscula y solo contener letras y espacios.");
    event.preventDefault();
    return;
  }

  const password = document.getElementById("password").value;

  if (password.length < 8) {
    alert("La contraseña debe tener mínimo 8 caracteres.");
    event.preventDefault();
  } else if (!/[A-Z]/.test(password)) {
    alert("Debe incluir al menos una mayúscula.");
    event.preventDefault();
  } else if (!/[a-z]/.test(password)) {
    alert("Debe incluir al menos una minúscula.");
    event.preventDefault();
  } else if (!/[0-9]/.test(password)) {
    alert("Debe incluir al menos un número.");
    event.preventDefault();
  }
});