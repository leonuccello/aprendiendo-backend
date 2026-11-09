const gastos = [];

function agregarGasto(descripcion, monto, categoria, fecha) {
    let seAgregoElGasto = false;
    if(monto>0 && typeof monto === "number") {
        gastos.push({descripcion, monto, categoria, fecha});
        seAgregoElGasto = true;
    } else {
        console.log("El monto debe ser mayor a 0");
    }
    return seAgregoElGasto;
}

function listarGastos(gastos) {
    for(const gasto of gastos) {
        console.log(` ${gasto.descripcion}: $${gasto.monto} de ${gasto.categoria} - ${gasto.fecha} `);
    }
}

agregarGasto("Alquiler", 50000, "Vivienda", "2024-06-01");
agregarGasto("Supermercado", 15000, "Alimentación", "2024-06-02");
agregarGasto("Transporte", 5000, "Transporte", "2024-06-03");
listarGastos(gastos);

function totalGastos(gastos) {
    let total = 0;
    for(const gasto of gastos) {
        total += gasto.monto;
    }
    return total;
}   

console.log(totalGastos(gastos));

function gastosPorCategoria(gastos, categoria) {
    let total = 0;
    for(const gasto of gastos) {
        if(gasto.categoria === categoria) {
            total += gasto.monto;
        }
    }
    return total;
}

console.log(`Gastos en Vivienda: $${gastosPorCategoria(gastos, "Vivienda")}`);
console.log(`Gastos en Alimentación: $${gastosPorCategoria(gastos, "Alimentación")}`);
console.log(`Gastos en Transporte: $${gastosPorCategoria(gastos, "Transporte")}`);  


function mayorGasto(gastos) {
    let mayor = gastos[0];
    for(const gasto of gastos) {
        if(gasto.monto > mayor.monto) {
            mayor = gasto;
        }
    }
    if(gastos.length === 0) {
        mayor = null;
    }
    return mayor;
}

console.log(`El mayor gasto es: ${mayorGasto(gastos).descripcion} por $${mayorGasto(gastos).monto}`);   
console.log(mayorGasto([]));


//correccion de agregarGastos()

agregarGasto("Cine", -500, "Entretenimiento", "2024-06-04");
agregarGasto("Restaurante", 0, "Alimentación", "2024-06-05");
agregarGasto("Gas", "500", "Vivienda", "2024-06-06");
listarGastos(gastos);