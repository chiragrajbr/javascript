//working on object methods----

var a={
    academy:"prostack academy",
    time:"8:00AM-10:00PM",
    location:"marathalli",
    contact:"www.prostackacademy.com",
    phone_No:001122
}
var b={}
//console.log(Object.assign(a))--assigning values has it is
//console.log(Object.entries(a))--assigning values in array format
//console.log(a)
//console.log(Object.is(a.location,a.phone_No))to compare 2 values

//console.log(Object.seal(a))
//a.location="banglore"---we can update using seal
console.log(a)
//console.log(Object.isSealed(a))

//console.log(Object.freeze(a)) --we cant update nor add
//console.log(Object.isFrozen(a))--to check it is freezed or not
//console.log(Object.isExtensible(a))--to check we can extense the object or not
//console.log(Object.preventExtensions(a))--to prevent adding extra object same as freeze
//b=Object.assign(a)---to assign data to empty object
console.log(b)


