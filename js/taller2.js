/*
Construya una mini aplicación con Js únicamente que calcule el total de deuda, 
teniendo en cuenta que está en un arreglo de abonos y préstamos (mismo arreglo con 
valores positivos y negativos).Debe mostrarme el valor actual de mi saldo, 
actualizándose luego de cada transacción
*/

var suma = function(numero1, numero2) {

    //parseFloat transforma una cadena de texto en entero   
    //parseInt transforma una cadena de texto en decimales
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    var resultado = numero1 + numero2;
    document.getElementById("total").innerHTML = resultado
}