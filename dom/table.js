let employees=[{id:100,name:"chirag",salary:45000},
               {id:101,name:"muni",salary:55000},
               {id:102,name:"darshu",salary:65000},
               {id:103,name:"chandan",salary:75000},
               {id:104,name:"charan",salary:35000},
               {"id":105,"name":"Corabelle","salary":123544},
               {"id":106,"name":"Leontine","salary":12365},
               {"id":107,"name":"Davita","salary":1222}]
               
               
                 function display_data(){
                    let rows=" "
                    //we can call empty array with in function but not in looping
                    for (employee of employees){
                     rows=rows+`<tr>
                                <td>${employee.id}</td>
                                <td>${employee.name}</td>
                                <td>${employee.salary}</td>
                                </tr>`
                             }
                     document.getElementById("getdata").innerHTML=rows
                } 
            
