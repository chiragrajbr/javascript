//finding duplicate values in string
let names=["chirag","muni","bolare","chirag"]
function duplicate(a){
    result=[],duplicate=[]
    for(i=0;i<a.length;i++){
     if(!result.includes(a[i])){
        result.push(a[i])
     }
     else{
        duplicate.push(a[i])
     }
    }
    return duplicate

}
console.log(duplicate(names))