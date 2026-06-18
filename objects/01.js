const mysym = Symbol("Key1")
const object = {
    name : "Pratham",
    "age" : 20 ,
    [mysym] : "Key1",
    location:"Jaipur",
    email :"pratham@google.com",
}
console.log(object.email)
console.log(object["email"])
console.log(object["age"])
console.log(object[mysym])
object.greeting = function(){
    console.log(`Hello ${this.name}`)
}
console.log(object.greeting())
object.email = "pratham@chatgpt.com"
Object.freeze(object)

