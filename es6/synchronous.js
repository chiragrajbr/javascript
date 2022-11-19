let a=[{id:101,name:"chirag",sal:45000},
    { id:102,name:"darshu",sal:50000 }]
    


let b=()=>{
    setTimeout(()=>{
        
        for(info of a){
            console.log(info)
        }
    },[4000])
}
let c=(emp)=>{
   
   setTimeout(()=>{
    a.push(emp)
   },[2000])
}
let r1=b()
console.log(r1)
let r2=c({id:103,name:"darshan"})
console.log(r2)
