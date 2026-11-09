//** ________________________ARRAYS Y OBJETOS_______________ */
// ARRAYS


const frutas = ["bananas", "naranjas", "manzana"];

console.log(frutas[0]);
console.log(frutas.length);

frutas.push("peras");
console.log(frutas);
frutas.pop;
console.log(frutas.includes("bananas"));

for(const fruta of frutas){
    console.log(fruta);
}

//OBJETOS

const producto = {
    nombre: "Teclado",
    precio: 2800,
    enStock: true,
};

console.log(producto.nombre);
producto.precio = 27000;
producto.marca = "Logitech";
console.log(producto);

//Objeto con objetos/arrays dentro

const usuario = {
    nombre: "Ana",
    direccion: { ciudad: "Buenos Aires", cp: 12345},
    hobbies: ["dibujo", "musica"],
};

console.log(usuario.direccion.ciudad);
console.log(usuario.hobbies[0]);

// ARRAYS DE OBJETOS

const productos = [
    {nombre: "Teclado", precio: 25000, enStock: true},
    {nombre: "Mouse", precio: 15000, enStock: false},
    {nombre: "Monitor", precio: 50000, enStock: true},
];

for(const p of productos) {
    console.log(`${p.nombre} está ${p.precio}`);
}


//METODOS DE ARRAYS: forEach, map, filter, find

//forEach
productos.forEach((p) => console.log(p.nombre));

//map
const nombres = productos.map((p) => p.nombre);
console.log(nombres);

//filter
const baratos = productos.filter((p) => p.precio < 30000);
console.log(baratos);
console.log(baratos[0]);

//find
const monitor = productos.find((p) => p.nombre === "Monitor");
console.log(monitor);

//Metodos conjugados

const nombresEnStock = productos
    .filter((p) => p.enStock)
    .map((p) => p.nombre);
console.log(nombresEnStock);


//Ejercicios:
//

const productos02 = [
    {nombre: "Teclado", precio: 25000, cantidad: 2, enStock: true},
    {nombre: "Mouse", precio: 12000, cantidad: 5, enStock: false},
    {nombre: "Monitor", precio: 180000, cantidad: 1, enStock: true},
    {nombre: "Auriculares", precio: 45000, cantidad: 3, enStock: true},
    {nombre: "Webcam", precio: 30000, cantidad: 0, enStock: false},
];

//Ejercicio 1
function mayorNumero(lista){
    let nroMayor = lista[0];
    for(const nro of lista){
        if(nroMayor<nro){
            nroMayor = nro;
        }
    }
    return nroMayor;
}

console.log(mayorNumero([4, 19, 7, 33, 2]));
console.log(mayorNumero([-5, -2, -9]));
console.log(mayorNumero([]));

//Ejercicio 2
const nombresMayuscula = productos02.map((p) => p.nombre.toUpperCase());
console.log(nombresMayuscula);

//Ejercicio 3
const productosCaros = productos02.filter((p) => p.precio > 20000);
console.log(productosCaros);

//Ejercicio 4
const productosEnStockBaratos = productos02
    .filter((p) => p.enStock && p.precio < 100000)
    .map((p) => p.nombre);
console.log(productosEnStockBaratos);

//Ejercicio 5
function valorInventario(productos) {
    let total = 0;
    for(const p of productos){
        total = total + (p.precio * p.cantidad);
    }
    return total;
}

console.log(valorInventario(productos02));