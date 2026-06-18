//Immediately Invoked Function Expressions (IIFE)
(function chai(){
    console.log(`Db connneected`)
})(); // semicolon is mandatory for IIFE
((name)=>{
    console.log(`Hello World ${name}`)
})("Pratham");

