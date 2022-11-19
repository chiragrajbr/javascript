//asynchronous function -executing first nearest seconds and ignoring more seconds
let a=[{id:100,name:"chirag",sal:45000},
    {id:102,name:"darshu",sal:50000}]

let first_details=()=>{
    
    setTimeout(()=>{
        
    let rows=""
     for (emp of a){
        rows=rows+`<tr><td>${emp.id}</td>
        <td>${emp.name}</td>
        <td>${emp.sal}</td></tr>`
     }
    document.getElementById("abc").innerHTML=rows
    },[2000])
}
first_details({id:133})

let added_details=(added)=>{
    setTimeout((added)=>{
        row=""
        
        for(emp of a){
            row=row+`<tr><td>${emp.id}</td>
            <td>${emp.name}</td>
            <td>${emp.sal}</td></tr>`
            document.getElementById("abc").innerHTML=row
        }
    },[5000])
}
added_details({id:105,name:"muni",sal:55000})
added_details()






