function contarLetras(cadena, practica){
    let contador = 0;
    for (let i=0; i < cadena.length; i++){
        if (cadena[i] == practica)
            contador++;
    }
    return contador;
}

console.log(contarLetras('freeCodeCamp', 'a')); 