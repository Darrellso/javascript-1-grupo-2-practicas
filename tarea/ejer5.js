/*Haga un programa que reciba un parámetro numérico x, el cual debe ser
mayor o igual a 5, y que imprima un patrón, que simule un triángulo de
asteriscos, como el siguiente. Debe utilizar ciclos for para la solución del
problema.*/

let x=5;
let asteriscos="*";

for(let i=1; i<=x; i++){
    console.log(asteriscos);
    asteriscos+="*";
}