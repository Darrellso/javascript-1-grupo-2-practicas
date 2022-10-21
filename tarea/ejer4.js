/*Cree un programa que reciba un array de números, verifique cuáles números
están repetidos y retorne un array con dichos números (los que estan
duplicados), si no hay números repetidos en el array debe retornar el
siguiente mensaje: “No se encontraron números repetidos en la lista de
números recibida”. Debe usar un ciclo for.*/

var arreglo = [1,2,3,4,5,6,7,8,9,10,10,1];
var contador = 0;

for ( i = 0; i < arreglo.length; i++) {
    for ( j = 0; j < arreglo.length; j++) {
        if(arreglo[i] == arreglo[j]){
            contador++;
        }
    }
    if(contador > 1){
        console.log(arreglo[i]);
    }
    contador = 0;
}
