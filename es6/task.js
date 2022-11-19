
/*let a=(a,b,add)=>{
    if(add==="sum"){
        return a+b
    }
    if(add==="mul"){
        return a*b
    }
    
}
let r=a(10,20,"sum")
let r1=a(10,20,"mul")
console.log(r1)*/


/*let sum=(a,b)=>{
    return a+b
}
let a=(a,b,sum)=>{
    return sum(a,b)
}
let r1=a(10,20,sum)
console.log(r1)*/


//this is a call back function 
//calling function inside a function as a argument to reduce code
let a=(a,b,c)=>{return c(a,b)}
let r=a(10,20,(a,b)=>{return a*b})
let r1=a(10,20,(a,b)=>{return a+b})
console.log(r1)




var b=(a,b,c)=>{return c(a,b)}
let x=b(10,12,(a,b)=>{return a+b})
console.log(x)


