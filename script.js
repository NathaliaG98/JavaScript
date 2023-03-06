/*
//1) Crear un programa donde el usuario ingrese en un prompt la temperatura en grados Celcius y el programa muestre en una alert la temperatura en grados Fahrenheit.
var tempe = prompt ("Ingrese l temperatura en grados Celcius");
var gradosf = tempe * 1.8 + 32;
console.log ("La temperatur es grados Fahrenheit " + gradosf);
*/
//2) El usuario ingresa un número, se pide crear la siguiente pirámide (console.log) hasta dicho número ingresado 
var cant = parseInt(prompt("Ingrese un número"));
var cadena = "";
var fila = "";
var i;
var x;
for (i = 1; i <= cant; i++) {
    for (x = 1; x <= i; x++) {
        cadena = cadena + "*";

    }
    cadena = cadena + "\n";
}

for (i = 1; i<= cant - 1; i++) {
    for (x = 1; x <= cant-i; x++) {
        cadena = cadena + "*";

    }
    cadena = cadena + "\n";
}
console.log(cadena);


//3) Según un numero ingresado por el usuario, calcular su factorial
/*
var num = parseInt(prompt("Ingrese un número para indicar su factorial"));
var numreal = num;
var factorial = 1;

while (num != 0) {
    factorial = factorial * num;
    num--;

}
console.log("El factorial del " + numreal + "es" + factorial);
*/
//4)Crear un programa que tenga un dinero inicial.
//5)Fibonacci
/*
var num = parseInt(prompt("Ingrese un numero"));
var a = 0;
var b = 1;
for (var i = 0; i < num; i++) {
    console.log(a); var temp = a + b; a = b; b = temp;
}
*/