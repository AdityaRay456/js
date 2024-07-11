//Primitive

//7 type :String,Number,Boolean,Null,undefined,Symbol,BigInt

const score = 100
const scoreValue = 100.3;

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('1,2,3')
const anotherId = Symbol('123')

console.log(id === anotherId);

//Reference(Non Primitive)

const bigNumber = 52736252265274729n





//Reference {Non primitve}

//Array, Objects, Functions


const heros = ["shaktiman", "nagraj", "doga"];
let myObj = {
    name: "Aditya",
    age: 20,

}
const myFunction = function () {
    console.log("Hello World")
}

console.log(typeof heros)
