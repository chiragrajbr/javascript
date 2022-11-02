//to find string length
var a="university"
console.log(a.length)

//to find the character or what we have in this index
var a="anonimonous"
console.log(a.charAt(2))

//to find index of a character
var a="delhi"
console.log(a.indexOf('l')) 

//last index of-if same alphabets are present in a string we use this lastindex
var a="chandan"
console.log(a.lastIndexOf('a')) 

//substr-from needed index value to ,how many index we want
var a="hyderabad"
console.log(a.substr(3,2)) 

//substring-from needed index value to till which index we need
var a="hyderabad"
console.log(a.substring(3,7)) 

//slice-to display the string from where we needed,if we do not give the value of ending  
//index it will display till ending values
var a="applegrapesmangoes"
console.log(a.slice(5,10))

//include--to check the word is present in the string or not
var a="karnataka"
console.log(a.includes('t'))

//string concate--to join to strings
var a="flipkart"
var b=".com"
console.log(a.concat(b))

//another method
var a="flipkart"
var b=".com"
console.log(a+' '+b)


