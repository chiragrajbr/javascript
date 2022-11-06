let a=new Date()
console.log(a)
//to execute date

let today=a.getDate()
console.log(today)
//to execute only date

let month=a.getMonth()+1
console.log(month)
//to execute only month

let year=a.getFullYear()
console.log(year)
//to execute only year

let hour=a.getHours()
console.log(hour)
//to execute only hour

let minute=a.getMinutes()
console.log(minute)
//to execute only minute

let seconds=a.getSeconds()
console.log(seconds)

let zone=a.getTimezoneOffset()
console.log(zone)
// to find current zone of global timeings

console.log("today date is"+" "+today+","+"month is"+" "+month+" ,"+"and the year is"+" "+year)
//joining the date with some sentence

console.log(`current running date is ${today}:${month}:${year}`)
//joining the date using backtick method
