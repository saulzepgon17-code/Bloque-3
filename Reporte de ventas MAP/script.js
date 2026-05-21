process.stdin.resume();
process.stdin.setEncoding('utf8');

let inputData = '';

process.stdin.on('data', (data) => {
    inputData += data;
});

process.stdin.on('end', () => {
    const valores = inputData.trim().split(' ').map(Number);

    // Valida que todos los valores sean números no negativos
    // Si alguno no lo es, imprime "Entrada inválida" y termina
    // ....
    
    const invalido = valores.some(valor =>
        isNaN(valor) || valor<0
    );
    if (invalido) {
        console.log("Entrada inválida");
        return;
    }

    // PASO 1 — Usa map() para calcular la ganancia neta de cada venta
    // Fórmula: venta * 0.85
    // Redondea con: Math.round(resultado * 100) / 100
    // Guarda el resultado en: netas
    // ....
    
    const netas = valores.map(valor =>
       Math.round((valor * 0.85)*100)/100
    );

    // PASO 2 — Usa filter() sobre netas para conservar
    // solo las ganancias mayores a 500
    // Guarda el resultado en: validas
    // ....
    
    const validas = netas.filter(
        valor => valor >500
        );

    // PASO 3 — Usa reduce() sobre validas para sumar
    // todas las ganancias filtradas (valor inicial: 0)
    // Guarda el resultado en: total
    // ....
    
    const total = validas.reduce((acumulador, valor) => {
        return acumulador + valor;
        }, 0);

    // Calcula la cantidad de ventas válidas y el promedio:
    //   cantidad : validas.length
    //   promedio : total / cantidad  (redondeado: Math.round(resultado * 100) / 100)
    //              Si cantidad es 0 → promedio = 0
    // ....
    
    const cantidad = validas.length;
    
    let promedio;
    if (cantidad === 0){
        promedio =0;
    }else{
        promedio = Math.round((total/cantidad)*100)/100;
    }
    
    // Imprime los resultados con el formato:
    // "Ganancias netas: X,X,X"      (usa join(','))
    // "Ganancias válidas: X,X"      (puede quedar vacío)
    // "Total acumulado: X"
    // "Ventas válidas: X"
    // "Promedio: X"
    // ....
    
    console.log("Ganancias netas: " +netas.join(','));
    console.log("Ganancias válidas: " +validas.join(','));
    console.log("Total acumulado: " +total);
    console.log("Ventas válidas: " + cantidad);
    console.log("Promedio: " +promedio);
});