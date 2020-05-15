/*
Crear un formulario con nombre, teléfono, correo, dirección, profesión y edad que al dar
guardar me mapee todos estos valores en un objeto de la forma: key, value. 
var user = {
    name: XXX,
    mail: XXX,
    dir: XXX, 
    age: XX, 
    occupation: XXX, 
    tel: XXX 
    } 
Y luego me imprima este objeto por consola con la siguiente instrucción: 
console.log(user);
*/

var nombre = document.getElementById("nombre");
var nombre = document.getElementById("email");
var nombre = document.getElementById("direccion");
var nombre = document.getElementById("age1");
var nombre = document.getElementById("age2");
var nombre = document.getElementById("age3");
var nombre = document.getElementById("ocupacion");
var nombre = document.getElementById("telefono");
var error = document.getElementById("error");
error.style.color = "red";

function enviarFormulario() {
    console.log("Enviando formulario...");

    var mensajeError = [];

    if (nombre.value === null || nombre.value === "") {
        mensajeError.push("Ingrese su nombre");
    }

    if (email.value === null || email.value === "") {
        mensajeError.push("Ingrese su email");
    }
    if (direccion.value === null || direccion.value === "") {
        mensajeError.push("Ingrese su direccion");
    }
    if (age1.value === null || age1.value === "") {
        mensajeError.push("Ingrese su age1");
    }
    if (age2.value === null || age2.value === "") {
        mensajeError.push("Ingrese su age2");
    }
    if (age3.value === null || age3.value === "") {
        mensajeError.push("Ingrese su age3");
    }
    if (ocupacion.value === null || ocupacion.value === "") {
        mensajeError.push("Ingrese su ocupacion");
    }
    if (telefono.value === null || telefono.value === "") {
        mensajeError.push("Ingrese su telefono");
    }

    error.innerHTML = mensajeError.join(',');

    return false
}