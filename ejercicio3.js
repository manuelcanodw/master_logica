

function coincidencias(frase, busqueda){

    let texto_limpio = frase.toLowerCase().replace(/[!¡.,-]/gi, ''); 

    //console.log(texto_limpio);

    let resultado = 0;

    if (texto_limpio.includes(busqueda)) {

        let palabras = texto_limpio.split(" ");
        console.log(palabras)

    }else {
        resultado = 0;
    }
    return resultado;

    


}

coincidencias("hola, que tal, soy Victor robles.", "victor");