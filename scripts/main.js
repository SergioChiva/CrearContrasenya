let caracteres = "";
let contrasena = "";
let btn = document.querySelector("#btn");
let rdo = document.querySelector("#rdo");
let mensaje = document.querySelector("span");
let todasLm = "abcdefghijklmnopqrstuvwxyz";
let todasLM = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let todosN = "0123456789";
let todosS = "!@#$%^&*()_+[]{}|;:',.<>?`~";

btn.addEventListener("click", () => {
    
    let longitud = document.querySelector("#longitud").value;
    let letrasM = document.querySelector("#letrasM").checked;
    let letras_m = document.querySelector("#letras_m").checked;
    let numeros = document.querySelector("#numeros").checked;
    let simbolos = document.querySelector("#simbolos").checked;

    if (letrasM) {
        caracteres += todasLM;
    }
    if (letras_m) {
        caracteres += todasLm;
    }
    if (numeros) {
        caracteres += todosN;
    }
    if (simbolos) {
        caracteres += todosS;
    }
    
    for (let index = 0; index < longitud; index++) {
        contrasena += caracteres.charAt(Math.random() * caracteres.length);
    }
    
    rdo.value = contrasena;
    
    contrasena = "";
    caracteres = "";
});

document.querySelector("#copiar").addEventListener("click", () => {
    navigator.clipboard.writeText(rdo.value)
    mensaje.textContent = "Contraseña copiada al portapapeles";
    setTimeout(() => {
        mensaje.textContent = "";
    }, 2000);
});
