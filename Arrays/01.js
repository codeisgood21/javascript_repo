const myarr = [1,24,57,68,97,6]
// console.log(myarr)
// console.log(myarr[0])
//arrays me humesha me deep copy krta hai !
const new_array  = new Array(11,21,2,41,1,1)
// console.log(new_array)
//Array methods

myarr.push(6)
console.log(myarr)
myarr.pop()
console.log(myarr)
myarr.unshift(4)
//myarr.shift()
// console.log(myarr)
// console.log(myarr.includes(4))
// slice ,splice

const arr2 =  new_array.slice(1,3) // actual elements nhi hatha ta
console.log(arr2)
const arr1 = new_array.splice(1,3) // actual me elements me nikal ke change krdeta hai
console.log(arr1)
