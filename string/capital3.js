let a="wipro is heiring freshers of 2020-2022 passed out batch"
let b=a.split(" ")
let z=[]
for (capital of b){
     c=capital.substr(0,1).toUpperCase()
     d=c+capital.slice(1)
     z.push(d)
}
e=z.join(" ")
console.log(e)
