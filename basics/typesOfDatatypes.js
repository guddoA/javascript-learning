// Types of Data => 1. Primitive   2. Non-Primitive

/*
 JavaScript is a dynamically typed language. This means that the type of a variable 
 is determined at runtime, based on the value assigned to it, rather than being explicitly
  declared at compile-time.
*/

//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);  //both will have different types of data though we are defining with the same thing that is Symbol('123)

// const bigNumber = 3456543576654356754n (by keeping n after any integer, that becomes big integer)



// Reference (Non-primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);
console.log(typeof myObj);  // it is an object
console.log(typeof myFunction);  // it is an object function

// https://262.ecma-international.org/5.1/#sec-11.4.3

let mySecObj = myObj;
mySecObj.name = "ANANYA";  // as object is a non-primitive datatype, so we are directly making the change in the myObj only by this line

console.log(myObj.name); // ANANYA
console.log(mySecObj.name); //ANANYA