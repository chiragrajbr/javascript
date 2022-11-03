//capitalizing the every first letter in a word in sentence using loop
let a="prostack academy a training institute located in marathalli"
let b=a.split(" ")
let mm=[]
//console.log(b)--to check wheather it is splitted or not
for (b of b){
let c=b.substring(0,1)
//console.log(c)
let d=c.toUpperCase()
console.log(d)
mm.push(d+b.slice(1))
}
console.log(mm)
console.log(mm.toString())
// toString is default value its add comma b/w them so use join method
console.log(mm.join(" "))