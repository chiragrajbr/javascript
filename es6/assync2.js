//call back
let calc=(a,b, calback)=>{
  return calback(a,b)
}
let r1=calc(10,20,(a,b)=>{
    return a+b

})
console.log(r1)

