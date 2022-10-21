/*Cree un programa que reciba como parámetro un array de números, y
verifique la lista de manera que retorne el número mayor.*/

let numeros = [1, 2, 3, 4, 5];

let numero_mayor = numeros[0];

for (var i = 0; i < numeros.length; i++) {

    if (numeros[i] > numero_mayor) {
        numero_mayor = numeros[i];
    }
}

console.log( numero_mayor);




