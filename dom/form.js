function form_validation() {
    var sn=document.getElementById("sn").value
    

    if (sn==""){
    document.getElementById("alertmg").innerHTML="plz enter student name"
    }
    return false
}
