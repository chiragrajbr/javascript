let a=[{id:101,name:"prostack",location:"marathahalli"}]
let b=[{id:102,name:"q spider",location:"jp nagar"}]

let first_Function=()=>{
    setTimeout(()=>{ 
        row=""
        for (emp of a){
            row=row+`<tr><td>${emp.id}</td>
            <td>${emp.name}</td>
            <td>${emp.location}</td></tr>`
        }
        document.getElementById("abc").innerHTML=row
    },[3000])
}
let second_Function=()=>{
    
    setTimeout(()=>{
        row=""
    for (emp of b){
        row=row+`<tr><td>${emp.id}</td>
        <td>${emp.name}</td>
        <td>${emp.location}</td></tr>`
    }
    document.getElementById("abc").innerHTML=row
        
    },[6000])
}

first_Function()
second_Function()