//valeur de départ en kelvin 
const kelvin = 293;

// conversion  kelvin en celsius
const celsius = kelvin - 273;

//
let fahrenheit = celsius * (9/5) + 32;
//renvoie un nombre flottant pseudo-aléatoire compris dans l'intervalle [0, 1[
console.log(Math.random(fahrenheit));

//...
console.log(Math.floor(fahrenheit));
 
//interpolation de chaines

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

/*
 Que faire pour convertir 0kelvin en Fahrenheit ??
Il faut juste la valeur de kelvin(293 au départ) par 0
*/
