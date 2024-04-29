// funcion que implemete la logica de tablas de multiplicar

function tabla_multiplicar (numero) {
    // let resultado = "# tabla del "+numero+" #";  ---> otramanera de concatenar la variable
    let resultado = `# Tabla del ${numero} \n#`;

    for (let i = 1; i <= 10; i++) {
        let multiplicacion = (i*numero);

    console.log(multiplicacion);

    resultado += `${i} x ${numero} = ${multiplicacion} \n`;
    }
    
    return resultado;
}

console.log(tabla_multiplicar(5))