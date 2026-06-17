//Primitive

// 7 types : String ,Number , Boolean ,null ,undefined, Symbol ,BigInt

const score = 100
const id = Symbol('123')
const anotherid = Symbol("123")
console.log(id==anotherid)
const bigNumber = 213123123123222332323n
const name = "Pratham" 
//Reference (Non primitive)

//Array , Objects, Functions
const heroes = ["Shaktimaan ","Naagraj" ,"Doga"] ;
let myobj ={
    name:"pratham",
    age :21,
}

const myfunction = function(){
    console.log("Hello World!")
}
console.log(typeof(myfunction))
// non primitive ka type is object except for function which is a object function

// STACK , HEAP Memory 
// Primitive-> Stack
// NonPrimitive ->Heap
