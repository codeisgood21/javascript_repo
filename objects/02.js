// const tinderuser = new Object() // Singleton Object 
const tinderuser   ={}
tinderuser.name = "Pratham"
tinderuser.age = 21

const regularuser = {
    email : "some@gmail.com",
    fullname :{
        userfullname : {
            firstname :"Pratham",
            lastname :"Raghav"
        }
    }
} 
const obj1 = {1:"1" ,2:"2",3:"3"}
const obj2 = {4:"4",5:"5"}
const obj3 = {...obj1,...obj2}
// const obj3 = Object.assign({},obj1,obj2)
console.log(obj3)
// console.log(tinderuser)
//array ke andar bahut saare objects 
const array = [
    {
        id :1 
    },
    {
        id :2 
    },
    {
        id:3
    }
]
// console.log(array[0].id)
// console.log(Object.keys(tinderuser))
// console.log(Object.values(tinderuser))
// console.log(Object.entries(tinderuser))
// console.log(tinderuser.hasOwnProperty('isbool'))
const course = {
    coursename : "Javacscript",
    price :898
}
// const{coursename : name} = course 
// console.log(name)
// const navbar = () => {

// }
// navbar(company = "Pratham")

