const marvel = ["Ironman","Hulk","Thor"]
const dc =  ["Flash","Supreman","Batman"]
const all_heroes = marvel.concat(dc)
console.log(all_heroes)
const all =  [...marvel, ...dc]
console.log(all)
const another = [1,1,2,[2,123],[1213,13],11,[2]]
const real = another.flat(Infinity)
console.log(real)
console.log(Array.from("Pratham"))
let score1 = 12 
let score2 = 423
let score3 =12
console.log(Array.of(score1,score2,score3))
