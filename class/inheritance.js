//inheritance-inheriting property from parent class
class Account{
    name;
    email;
    loc;
    min_Balance=500;
    // taking common requirements
    constructor(name,email,loc){
 
        this.name=name;
        this.email=email;
        this.loc=loc;
        //invoking

    }

}
class savings_Acc extends Account{
    constructor(id,name,email,loc){
        super(name,email,loc)
        this.id=id
        //child node -added extra requirements
        
    }
    
}
class current_Acc extends savings_Acc{
    constructor(id,name,email,loc,phonenumber){
        super(id,name,email,loc)
        this.phno=phonenumber
    }

}
let a=new savings_Acc(101,"chirag","chirag@123","mandya")
console.log(a)
let c=new current_Acc(101,"chirag","chirag@123","mandya",123123)
console.log(c)

    
    