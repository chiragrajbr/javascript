let a=(a,b,store)=>{
    return store(a,b)
}
let add=a(10,5,(a,b)=>{return a+b})
let sub=a(10,5,(a,b)=>{return a-b})
let mul=a(10,5,(a,b)=>{return a*b})
let div=a(10,5,(a,b)=>{return a/b})
console.log(`result of addition ${add}`)
console.log(`result of sub ${sub}`)