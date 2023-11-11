/* Ejercicio Práctico
En este ejercicio deberás convertir las siguientes Funciones a Arrow Functions:*/

// 1er Ejercicio

/*function sumarLosTres(num1, num2, num3) {
 return num1 + num2 + num3
} */

// SOLUCION 1er Ejercicio

let sumarLosTres = (num1,num2,num3) => {
    return num1 + num2 + num3
} 

// 2do Ejercicio

/* function cuadrado(num) {
    return num * num
   } */

// SOLUCION 2do Ejercicio

let cuadrado = (num) => num * num

// 3er Ejercicio

/* function decirHola() {
 console.log('¡Hola!');
} */

// SOLUCION 3er Ejercicio 

let decirHola = () => console.log("Hola!")

// 4rto Ejercicio

/*function saludar (nombre) {
 if (nombre === undefined) {
   return "hola anónimo";
 } else {
   return "hola " + nombre;
 }
} */

// SOLUCION 4rto Ejercicio 

let saludar = (nombre) => {
    if (nombre=== undefined) {
        return "Hola anónimo";
    } else {
        return "Hola" + nombre
    }
}

// 5nto Ejercicio 

/* let nombreCompleto = (nombre, apellido) =>
  "¡Hola, " + nombre + " " + apellido + "!";
let exclamar = str => {
 `str`
}
let mayusculas = (str) => return str.toUpperCase()
let minusculas = (str) => str.toLowerCase() */

// SOLUCION 5nto Ejercicio 

let nombreCompleto = (nombre, apellido) => nombre + " " + apellido

let exclamar = str => "¡"+ str + "!"

let mayusculas = strDos => strDos.toUpperCase()

let minusculas  = strTres => strTres.toLowerCase()