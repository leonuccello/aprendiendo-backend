const nombre = "Leon";
let edad = 32;
edad = 33;
console.log("Nombre: "+ nombre + ", Edad: " + edad);

//Tipos de variables

const texto = "Hola";
const precio = 1500.5;
const activo = true;
console.log(typeof texto, typeof precio, typeof activo);


//template strings
const mensaje = `Hola ${nombre}, tenes ${edad} años`;
console.log(mensaje);

//OPERATORS
console.log(10 + 3);
console.log(10 - 3);
console.log(10 * 3);
console.log(10 / 3);
console.log(10 % 3);

//operadores comparadores

console.log(5 > 3);
console.log(5 === 5);
console.log(5 === "5");
console.log(5 !== 3);

//comparadores

const temperatura = 20;

if(temperatura > 25){
    console.log("Hace calor");
} else if(temperatura > 15) {
    console.log("Clima templado");
} else {
    console.log("Hace frio");
}

//operadores logicos para combinar condicionales

const esMayor = edad >= 18 && edad < 65;
const dia = "domingo";
const esFinDeSemana = dia === "sabado" || dia === "domingo";

console.log(esMayor);
console.log(esFinDeSemana);

//ejercicio 1

const numero0 = 7;
const resto = numero0%2;

if(resto === 0){
    console.log("Es par");
} else {
    console.log("Es impar");
}

//ejercicio 2

const monto = 1500000;
const dolar = 1550;
const dolares = (monto/dolar).toFixed(2);
const mensaje0 = `${monto} pesos equivale a ${dolares} dolares`;
console.log(mensaje0);

//ejercicio 3

const edad02 = 50;
if(edad02 >= 18){
    console.log("Es mayor");
} else if(edad02 >= 16) {
    console.log("Puede votar");
} else {
    console.log("Es menor");
}

//ejercicio 4

const precio02 = 8000;
const esCliente = true;
const montoMinimo = 10000;
const conDescuento = precio02-(precio02*15/100);

if(precio02 > montoMinimo && esCliente){
    console.log("Con el descuento del 15% el costo es: " + conDescuento);
} else {
    console.log("No hay descuento, el costo es: " + precio02);
}   


//****--------------------------------------------- */

//ejercicio 5

const notaExamen = 8;

if(notaExamen >= 9&&notaExamen <= 10){
    console.log("Excelente"); 
} else if(notaExamen>=6){
    console.log("Aprobado");
} else {
    console.log("Desaprobado");
}

// fin de la segunda sesion de ejercicios


