//Variables
var a; //Declarar
var b = 'b'; //Declarar y Asignar
b = 'bb'; //Reasignacion

//Global Scope
var fruits = 'Apple'; //Global

function bestFruit() {
    console.log(fruits)
}
bestFruit();

function myAge() {
    let age = 21;
    console.log(`mi edad es ${age}`);
}
myAge();
console.log(age)