let a=[]
a.push("samsung","jio","wipro","infosis","accenture")
console.log(a)
// added elements to empty array
a.pop()
console.log(a)
// deleted last element from array
a.unshift("MNC")
console.log(a)
// added element from begining
a.shift()
console.log(a)
//deleted first element in an array
a.reverse()
console.log(a)
//elements in array have been reversed
a.splice(2,1)
console.log(a)
// deleted only 2nd index using 2,1-> 1 is used bcz to delete only one index
a.splice(3,0,"airtel","idea")
console.log(a) 
// added elements in b/w ,added 2 elemets from 3rd index ,0 is used to donot delete the last index
b=["orange","blue","green","red"]
console.log(a.concat(b))
/*console.log(a.indexOf("infosis"))-to find index of 1st array element
console.log(a.lastIndexOf("infosis"))-to find index of the last array element*/

