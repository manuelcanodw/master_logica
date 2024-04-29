// crear un detector de palindromos, esdecir palabras que empiezan y terminan igual para
//Respuesta: para ello vamos a usar unstring, lo vamos adividir por palabras, con la etiqueta split, lo giraremos y lo comparamos, pues asi sabremos si de atras paraadelante o inverso la palabra dice lomismo ejemplo, ana, malayalam

function palindromo(texto) {
    let invertido = texto
                    .split('')
                    .reverse()
                    .join(''); 
 
    //console.log(invertido);
    //  con este consonlog verifico que me devuelva el array dividido
                                
    // if(invertido === texto){
    //     return true;
    // } else {
    //     return false;
    // }
    // esta condicional se puede simplificar de la siguiente manera

    return invertido === texto;

}
console.log("¿Es un palindromo? " + palindromo("malayalam"));