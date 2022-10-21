/*Cree un programa que reciba como parámetro una palabra y verifique si
dicha palabra es palíndromo, es decir, la palabra se lee igual de izquierda a
derecha o de derecha a izquierda, o no. Para la resolución de dicho problema
debe utilizar ciclo for.*/

var palabra = prompt("Introduzca una palabra");
var caracteres = palabra.length;
var palindromo = true;

for (var i = 0; i < caracteres, palindromo; i++) {
  if (palabra[i] !== palabra[(caracteres - 1) - i]) {
    palindromo = false;
  }
}

if (palindromo) {
  alert("La palabra es palindromo");
} else {
  alert("La palabra no es palindromo");
}