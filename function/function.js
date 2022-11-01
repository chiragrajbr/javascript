//simple function
function add(a,b){       //parameter
      console.log(a+b)   //body
}
add(10,20)               //invoke=arguments

//function with return value
function wish(msg){
    return "hello"+msg
}
let m1=wish("gm")
console.log(m1)

//function adding  string
function add(a,b){
    console.log(a+b)
}
add("karnartaka","mandya")

//function with default value
function add(a=11,b=22,c=33){
    console.log(a+b+c)
}
add()

//function that default value can change with arguments
//the numbers we r given will always store from first index
function sss(a=100,b=200,c=300){
    console.log(a+b+c)
}
sss(50,100,150)
sss(12,56)// this are default values that can be reusable anytimeS





