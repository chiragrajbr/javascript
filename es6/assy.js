let employees = [{ id: 101, name: "Rahul", sal: 45000 }, { id: 102, name: "Sonia", sal: 55000 }]


let createEmployee = (emp, callback) => {
    setTimeout(() => {
        employees.push(emp)
        callback()
    }, [5000])
}

let getEmployees = () => {
    setTimeout(()=>{
    rows=""
   
        for( emp of employees){
            rows=rows+`<tr>
            <td>${emp.id}</td>
            <td>${emp.name}</td>
            <td>${emp.sal}</td>
            </tr>`
        }
    
  document.getElementById("abc").innerHTML=rows  
},[9000])
}
createEmployee({ id: 103, name: "Priyanka", sal: 650000 }, getEmployees)
