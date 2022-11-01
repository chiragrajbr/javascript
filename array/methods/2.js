//3-every==to check the condition of all the elements in an array result will be in boolean values
let age=[10,20,30,5]

function check(age){
    return age>=5
}
console.log( age.every(check))

//4-fill= replace the value in which index we need 
var a=[100,200,300]
console.log(a.fill(30,1,2))
//we have to give starting index and ending index--mandatory

//5-join=to covert arrays into strings
var a=["apple","grapes","mango"]
console.log(a.join("*"))

//6-valueof=it copies the array elements as it has
var a=[1,5,9,16]
b=a.valueOf()
console.log(b)

//7-sort=sorting the elements in the given array
//specialcharacter-numbers-alphabets
var a=["ten","nine",1,2,"$name"]
console.log(a.sort())

//8-reverse=to reverse the given array
var a=["mandya","banglore","array","is","reversed"]
console.log(a.reverse())

//9-boolean=converting boolean to string
a=true
console.log(typeof(a))
b=a.toString()
console.log(b)
console.log(typeof(b))

//10-slice=to display elements from where we want
var a=[1,2,3,4,5,6,]
console.log(a.slice(2))

//numbers method
//11-math.round()=to find round of value
var a=13.5
console.log(Math.round(a))

//12-absolute=it writes the absolute value
var a=+-123
console.log(Math.abs(a))

//13-powerof=it gives the powerof value of the number
console.log(Math.pow(2,3))

//14-squareroot=it gives the square root value of the number
var a=81
console.log(Math.sqrt(a))

//15-minimum=to find minimum value
a=1,3,6,5,4
console.log(Math.min(a))

//16-maximum=to find max value
console.log(Math.max(10,55,66))

//17-ceil=it gives the next/upper nearest integer value
a=12.3
console.log(Math.ceil(a))

//18-floor=it gives the lower integer value
a=9.5
console.log(Math.floor(a))




  
