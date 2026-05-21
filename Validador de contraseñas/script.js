process.stdin.resume();
process.stdin.setEncoding('utf8');

let inputData = '';

process.stdin.on('data', (data) => {
    inputData += data;
});

process.stdin.on('end', () => {
    const contrasenas = inputData.trim().split(',');

    // Valida que la entrada no esté vacía ni tenga contraseñas vacías
    // Si no es válida, imprime "Entrada inválida" y termina
    // ....
    
    if(
        inputData.trim()==='' || contrasenas.some(contrasena => contrasena.trim() === '')
        ){
            console.log("Entrada inválida");
            return;
        }

    // PASO 1 — Usa every() para verificar si TODAS las contraseñas
    // tienen al menos 8 caracteres (usa .length)
    // Guarda el resultado (true/false) en: todasLongitud
    // ....
    
    const todasLongitud = contrasenas.every(
        contrasena => contrasena.length >= 8
        );

    // PASO 2 — Usa every() para verificar si TODAS las contraseñas
    // contienen al menos un número (dígito del 0 al 9)
    // Pista: usa /[0-9]/.test(contrasena)
    // Guarda el resultado (true/false) en: todasNumero
    // ....
    
    const todasNumero = contrasenas.every(
        contrasena => /[0-9]/.test(contrasena)
        );

    // PASO 3 — Usa every() para verificar si TODAS las contraseñas
    // contienen al menos una letra mayúscula (A-Z)
    // Pista: usa /[A-Z]/.test(contrasena)
    // Guarda el resultado (true/false) en: todasMayuscula
    // ....
    
    const todasMayuscula = contrasenas.every(
        contrasena => /[A-Z]/.test(contrasena)
        );

    // Imprime los resultados con el formato:
    // "Todas tienen longitud mínima: true/false"
    // "Todas tienen número: true/false"
    // "Todas tienen mayúscula: true/false"
    // ....
    
    console.log("Todas tienen longitud mínima: " + todasLongitud);
    console.log("Todas tienen número: " +todasNumero);
    console.log("Todas tienen mayúscula: " +todasMayuscula);
});