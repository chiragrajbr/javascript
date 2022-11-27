//aysc draw back  --asyc method execute which has less time
//asynchronous promise method--use to overcome asynchronous method
//setting exicuting time and giving some message for success and failure using terneray operator
//in this promise method used and .then and .catch is teken
let employees=[{id:100,name:"chirag"},{id:101,name:"chandan"}]
let create_employee=(emp)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            flag=true
            employees.push(emp)
            flag?resolve("inserted successfully"):reject("rejected")

        },[4000])
    })
}
let get_employee=()=>{
    setTimeout(()=>{
        let rows=""
        for(emp of employees){
            rows=rows+`<tr><td>${emp.id}</td>
            <td>${emp.name}</td></tr>`
            document.getElementById("aa").innerHTML=rows
        }
    },[1000])
}
create_employee({id:103,name:"darshu"}).then((msg)=>{
    
    console.log(msg)
    get_employee()
}) 
                                      .catch((error)=>{
                                        console.log(error)
                                      })