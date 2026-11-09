const gastos = [];

function agregarGasto(index, descripcion, monto, categoria, fecha) {
    gastos.push({index, descripcion, monto, categoria, fecha});
}

function listarGastos(gastos) {
    for(const gasto of gastos) {
        console.log(`${gasto.index}  ${gasto.descripcion}: $${gasto.monto} de ${gasto.categoria} - ${gasto.fecha} `);
    }
}

agregarGasto(1, "Alquiler", 50000, "Vivienda", "2024-06-01");
agregarGasto(2, "Supermercado", 15000, "Alimentación", "2024-06-02");
agregarGasto(3, "Transporte", 5000, "Transporte", "2024-06-03");
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
    return mayor;
}

console.log(`El mayor gasto es: ${mayorGasto(gastos).descripcion} por $${mayorGasto(gastos).monto}`);   