//Escribe un programa que invierta una cadena usando recursión. Dada la
//cadena "freeCodeCamp", el programa debería devolver "pmaCedoCeerf"


function invertirCadena(cadena){
    if (cadena.length == 0)
        return '';
    else
        return invertirCadena(cadena.substr(1)) + cadena.charAt(0);
}

console.log(invertirCadena('freeCodeCamp')); 