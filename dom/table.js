let employees=[{id:100,name:"chirag",salary:45000,email:"chirag@tcs.com"},
               {id:101,name:"muni",salary:55000,email:"muni88fasfafas@cts.com"},
               {id:102,name:"darshu",salary:65000,email:"darshan55@imbbb.com"},
               {id:103,name:"chandan",salary:75000,email:"chandan@wipro.com"},
               {id:104,name:"charan",salary:35000,email:"charan@infosys.com"},
               {id:105,name:"Corabelle",salary:123544,email:"corabelle123@accenture.com"},
               {id:106,name:"Leontine",salary:12365,email:"leontine12@ibm.com"},
               {id:107,name:"Davita",salary:1222,email:"davita222@samsung.com"}]
               
               
                 function display_data(){
                    let rows=" "
                    //we can call empty row with in function but not in looping
                    for (employee of employees){
                     rows=rows+`<tr>
                                <td>${employee.id}</td>
                                <td>${employee.name}</td>
         
                                <td>${employee.email}</td>
                                <td>${employee.email.substr(employee.email.indexOf('@')+1).toUpperCase()}</td>
                                </tr>`
                             }
                     document.getElementById("getdata").innerHTML=rows
                } 
            
