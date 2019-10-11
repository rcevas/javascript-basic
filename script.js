//EJERCICIO 1
console.log("HOLA MUNDO");

//EJERCICIO 2
alert("Me llamo Rod");

//EJERCICIO 3
var nombre = "Rodrigo";
var apellido = "Cevas";

//EJERCICIO 4
var a = 5;
var b = 8;
var suma = a + b;
var total = "la suma entre " + a + " y " + b + " es " + suma;
console.log(total);

//EJERCICIO 5
var nota_examen = 4.8;
if(nota_examen > 5) {
    console.log("has aprobado el examen con " + nota_examen);
}else {
    console.log("has reprobado el examen con " + nota_examen);
} 

//EJERCICIO 6

var a = "Tengo un coche de color azul";

var b = a.replace("azul", "verde");
var c = a.replace(/o/g, "u")
console.log(b);
console.log(c);

 

 //EJERCICIO 7

 var a = ['mesa', 'silla', 'ordenador', 'libreta'];

 for (var i = 0; i<a.length; i++) {
     console.log(a[i]);
 }