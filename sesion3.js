//intro a las funciones, reutulizar codigo

function saludar(nombre){
    return `hola ${nombre}`;
}

console.log(saludar("León"));
console.log(saludar("Ana"));

function sumar (a, b) {
    return a + b;
}

console.log(sumar(10, 8));

// ARROW FUNCTIONS

const restar = (a, b) => {
    return a - b;
}

const multiplicar = (a, b) => a * b;

console.log(restar(10, 2));
console.log(multiplicar(3, 4));


//Bucle for

for(let i = 1;i <= 5; i++){
    console.log(`Vuelta numero ${i}`);
}

//Bucle While

let contador = 10;

while(contador > 0){
    console.log(contador);
    contador = contador - 3;
}

//Recorriendo Palabras(Strings)

const palabra = "Hola";

for( let i = 0;i < palabra.length; i++){
    console.log(palabra[i]);
}


//** -----------------------Ejercicios---------------------------- */

//ejercicio 1: tabla de multiplicar

function tablaDel(numero){
    for(let i = 0; i <= 10; i++){
        console.log(numero*i);
    }
}

tablaDel(3);
tablaDel(7);
tablaDel(10);

//ejercicio 2: suma de numeros, de 1 a n


function sumaDeUnoAEne(n){
    let sumaNumeros = 0;
    for(let i = 1;i <= n;i++){
        sumaNumeros += i;
    }
    return sumaNumeros;
}

console.log(sumaDeUnoAEne(5));
console.log(sumaDeUnoAEne(8));

//Ejercicio 3: contar vocales

const word = "Paradise";
const word2 = "Oasis";

function contarVocales(palabraConVocales){
    let vocales = 0;
    for(let i = 0;i < palabraConVocales.length; i++){
        if(palabraConVocales[i] === "a" || palabraConVocales[i] === "e" || palabraConVocales[i] === "i" || palabraConVocales[i] === "o" || palabraConVocales[i] === "u"){{
            vocales++;
        }}
    }
    return vocales;
}

console.log(contarVocales(word.toLowerCase()));
console.log(contarVocales(word2.toLowerCase()));


//Ejercicio 4: Es primo

function esPrimo(numero){
    let esPrimo = true;
    let mensaje = "";
    for(let i = 2; i < numero; i++){
        if(numero%i === 0){
            esPrimo = false;
        }
    }
    if(esPrimo === true){
        mensaje = "Es primo";
    } else {mensaje = "No es primo";

    }
    return mensaje;
}

console.log(esPrimo(1));
console.log(esPrimo(2));
console.log(esPrimo(7));
console.log(esPrimo(10));
console.log(esPrimo(13));

//Ejercicio 5: FizzBuzz

const maximo = 30;
let mensaje = "";

for(let i = 1; i <= maximo; i++){
    if(i%3 === 0 && i%5 === 0){
        mensaje = "FizzBuzz";
    } else if(i%3 === 0) {
        mensaje = "Fizz";
    } else if(i%5 === 0){
        mensaje = "Buzz";
    } else {
        mensaje = i;
    }
    console.log(mensaje);
}
