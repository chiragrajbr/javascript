//normal method applying condition
let a=[1,2,3,55,66,44]
for(i=0;i<a.length;i++){
    if(a[i]%2==0){
        console.log(a[i])
    }
}
    


//condition applying using filter method -greater than less than modulus any kind of function
//if we take filter method we must call fat arrow function
let b=[1,2,3,55,66,44]
 let c=b.filter((number)=>{
return number>5
})
console.log(c)
