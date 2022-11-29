//finding duplicate values in an array
const number=[1,2,3,1,2]
function duplicate(ok){
    const result=[], duplicate=[]
    for(let i=0; i<ok.length;i++){
        if(!result.includes(ok[i])){
            result.push(ok[i])
        }
        else{
            duplicate.push(ok[i])
        }

    }
    return duplicate
}
console.log(duplicate(number))