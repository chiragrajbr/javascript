//fat arrow function
let sub=(a,b)=>{
console.log(a-b)
}
sub(50,30)

//structure of fat arrow function
add=()=>{
    console.log()
}
add()

//fat arrow function with default value
let get=(a="st johns",b="  pes college")=>{
    console.log(a+b)}
get()
get("mandya")//this is a default value

//fat arrow function without body/without flowerbracket(used most for single line)

let mul=(a,b,c)=>a*b*c
let r=mul(2,3,4)
console.log(r)

//fat arrow function in single line
let div=(a,b)=>console.log(a/b)
div(10,2)