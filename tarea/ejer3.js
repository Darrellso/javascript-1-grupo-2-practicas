/*Dada la siguiente matriz [ [1,0,0], [0,1,1], [0,1,0] ], haga un programa que
cuente e imprima la cantidad de ceros totales en dicha matriz. Debe utilizar
ciclos for*/

var arr = [
  [1, 0, 0],
  [0, 1, 1],
  [0, 1, 0],
];
let ceros = 0;

for ( i = 0; i < arr.length; i++) {
  for ( j = 0; j < arr[i].length; j++) {
    if (arr [i][j] == 0) {
      ceros++
    }
  }
}
console.log(ceros);
