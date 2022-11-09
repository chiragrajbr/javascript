class teacher{
    name;
    roleno;
    section;
    constructor(name,roleno,section){
        this.name=name;
        this.roleno=roleno;
        this.section=section

    }
    
}
class student extends teacher{
    constructor(name,roleno,section,age){
        super(name,roleno,section,age)
        this.age=age
    }

}
let a=new teacher("mamatha",01,"a")
console.log(a)
let c=new student("mamatha",01,"a",25)
console.log(c)
