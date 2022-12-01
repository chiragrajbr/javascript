//finding empty array
let a=[]
console.log(a.length)

//finding empty object
//3 types same operation --object.entries   object.keys    object.values

let b={}
console.log(Object.keys(b).length)

//array in statements
let c=[]
if (c.length==0){
console.log("array is empty")
}
else{
    console.log("array is not empty")
}

//object in statements
let d={name:"cc"}
if (Object.entries(d)==0) {
    console.log("object is empty")
    
} else {
    console.log("object is not empty")
    
}


var t={1:101}
console.log(Object.entries(t))