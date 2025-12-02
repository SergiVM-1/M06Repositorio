console.log("Creamos cookies")
document.cookie = "usaurio = Ana";
document.cookie = "idioma = es";
document.cookie = "tema = oscuro";
console.log("Mostramos las cookies: " + document.cookie);
console.log("La linea que nos permite pasar la cookie a array es el split");

let arrayCookies = document.cookie.split(";");
console.log(arrayCookies);
for(let cookie of arrayCookies) {
    console.log(cookie);
    let temp = cookie.split("=");
    let nomCookie = temp[0];
    let valorCookie = temp[1];
    console.log("Nombre cookie : {" + nomCookie + "}, valor cookie: {" + valorCookie + "}");
}

