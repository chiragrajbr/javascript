//spread operator---extract and copy
//to copy array elements it takes more codes in ES5
let a=[1,2,34,576,87,9,54]
let b=[]
for(i=0;i<a.length;i++){
    console.log(b.push(a[i]))
}
console.log(b)

//copying array using tripple dot--ES6
let x=["chirag","darshu",21,22]
let y=[...x]
console.log(y)

//to extend array using tripple dot
let d=["chirag","darshu",21,22]
let e=[...d,"muni","prostack academy"]
console.log(e)
