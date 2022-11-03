//printing first letter to caps in function
function a(caps){
    let b=caps.slice(0,1)
    let capitalize=b.toUpperCase()
    return capitalize+caps.slice(1)

}
console.log(a("mandya"))
//
function a(caps){
    let b=caps.slice(0,1)
    let c=b.toUpperCase()+caps.slice(1)
    return c
}
console.log(a("chirag"))

//
function z(caps){
    let b=caps.charAt(0).toUpperCase()+caps.substr(1)
    return b

}
console.log(z("banglore"))