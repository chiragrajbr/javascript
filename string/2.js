//joining strings (long process)
var name="chirag"
var from="mandya"
var too="banglore"
var km=100
console.log("myslef"+' '+name+"."+"am from"+" "+from+" "+"travelling to"+" "+too+" "+"kilometer of"+" "+km)

//joining strings(easy way using back tick)
var name="chirag"
var from="mandya"
var too="banglore"
var km=100
console.log(`my name is ${name},am from ${from} travelling to ${too} kilometer of ${km}.`)

//converting string to upper case
var a="mcdonalds"
console.log(a.toUpperCase())
//to lower case
var a="BEST WISHES TO U"
console.log(a.toLowerCase())

//capitalizing only first character
var a="chirag"
let b=a.charAt(0).toUpperCase()
console.log(b+a.slice(1))

//capitalizing only  middle letter 
var a="chirag"
console.log(a.indexOf("r"))
var r=a.charAt(3).toUpperCase()
console.log(a.slice(0,3)+r+a.slice(4))

//capitalizing only first 3 letters
var a="chirag"
var r=a.charAt(0).toUpperCase()+a.charAt(1).toUpperCase()+a.charAt(2).toUpperCase()
console.log(r)
console.log(r+a.slice(3))

//easy way 
var d=a.slice(0,3).toUpperCase()
console.log(d+a.slice(3))

//capital of middle letter in easy way
var e="chirag"
console.log(a.slice(0,2)+a.charAt(2).toUpperCase()+a.slice(3))

