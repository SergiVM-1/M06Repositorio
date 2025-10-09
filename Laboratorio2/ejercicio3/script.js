function calcularEdad() {
    const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(\d{4})$/;

    const entrada = prompt("Introduce tu fecha de nacimiento (DD/MM/AAAA):");

    if (!regex.test(entrada)) {
        alert("Formato incorrecto.");
        return;
    }

    // Extraer día, mes, año
    const [diaStr, mesStr, anioStr] = entrada.split("/");
    const dia = parseInt(diaStr, 10);
    const mes = parseInt(mesStr, 10);
    const anio = parseInt(anioStr, 10);

    //convertimos la fecha en objeto Date
    const fechaNac = new Date(anio, mes - 1, dia); 

    if (
        fechaNac.getFullYear() !== anio ||
        fechaNac.getMonth() !== mes - 1 ||
        fechaNac.getDate() !== dia
    ) {
        alert("La fecha no es válida en el calendario.");
        return;
    }

    const hoy = new Date();
    let edad = hoy.getFullYear() - anio;

    if (
        hoy.getMonth() < fechaNac.getMonth() ||
        (hoy.getMonth() === fechaNac.getMonth() && hoy.getDate() < fechaNac.getDate())
    ) {
        edad--;
    }

    const diasSemana = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
    const diaSemana = diasSemana[fechaNac.getDay()];

    alert("Naciste en " + diaSemana + " y tienes " + edad + " años.");
}

calcularEdad();
