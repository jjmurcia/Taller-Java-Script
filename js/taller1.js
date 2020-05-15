/*
1. Construya una mini aplicación con Js únicamente que pueda eliminar o añadir de una 
pila de tareas de la siguiente manera: 
a. Un botón que pueda añadir una nueva tarea. 
b. Un botón que pueda eliminar la última tarea asignada al darla por hecha.  
*/
//add
var addNew = [];
document.getElementById("new").innerHTML = addNew;

function add() {
    addNew.push("Java Script");
    document.getElementById("new").innerHTML = addNew;
    console.log(addNew);
}

//remove

function remove() {
    addNew.pop();
    document.getElementById("new").innerHTML = addNew;
    console.log(addNew);
}