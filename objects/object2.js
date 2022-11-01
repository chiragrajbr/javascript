//adding to empty array
//renaming/update
//deleting
//taking only keys
//taking only key values
//taking both key and key values
a={}
a.name="javascript"
console.log(a)
a.name="python"
console.log(a)
a.number=1234
console.log(a)
delete a.number
console.log(a)
a.duration="6 months"
a.location="marathalli"
console.log(Object.keys(a))
console.log(Object.values(a))
