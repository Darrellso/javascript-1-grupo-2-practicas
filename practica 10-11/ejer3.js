//Escriba un programa que reciba una frase y este debe de intercambiar las
//vocales por la ‘i’. Ej, “esta es la entrada” → “isti is li intridi”

frase = prompt("Escriba una frase: ") 

vocal_a = "a"
vocal_e = "e"
vocal_i = "i"
vocal_o = "o"
vocal_u = "u"

nueva_frase = frase.replace(vocal_a,"i")
nueva_frase = nueva_frase.replace(vocal_e,"i")
nueva_frase = nueva_frase.replace(vocal_o,"i")
nueva_frase = nueva_frase.replace(vocal_u,"i")

alert("La nueva frase es: " + nueva_frase)