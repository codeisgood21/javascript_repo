//arrow function and this keyword
const user = {
    username : "Pratham",
    price :231 ,
    welcomemessage : function(){
        console.log(`Hello ${this.username}`)
    }
}
// user.welcomemessage()
// console.log(this) 
// function chai(){
//     console.log(this)
// }
// chai()
// another method of decalruing the function 
const chai = ()=>{
    let username = "Pratham"
    console.log(this.username)

}
chai()