//dates
 let mydate = new Date()
 console.log(mydate)
 console.log(mydate.toDateString())
 console.log(typeof mydate)
 let date = new Date(2023,0,23,1,4)
 console.log(date.toDateString())
 let mytime = Date.now()
 console.log(mytime)
date.toLocaleDateString('default',{
    weekday :"long ",
})
console.log(date)

