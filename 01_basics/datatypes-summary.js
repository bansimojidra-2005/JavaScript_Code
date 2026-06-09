// # Primitive

// 7 types : String, Number, Boolean, null,undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 45678902344234n //BigInt number



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "nagaraj", "doga"]
let myObj = {
    name: "bansi",
    age: 20,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);

// https://262.ecma-international.org/5.1/#sec-11.4.3



// ++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myCodename = "javaScriptCode"

let anothername = myCodename
anothername = "scriptcode"

console.log(myCodename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@byl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);


