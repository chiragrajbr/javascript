function form_Validate() {
    let name = document.getElementById('sname').value
    
    if (name=="") {
        document.getElementById('alertmg').innerHTML = "Please Enter User Name"
        
    }
    return false
    

    }
