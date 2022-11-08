//class-constructor
class Account{
           id;
           name;
           amount;
           constructor(a,b,c){
            this.id=a;
            this.name=b;
            this.amount=c;
           }
           get_Balance(){
            console.log("********WELCOME TO SBI ALWAYS FOR YOU*******")
            console.log("your default balance is",this.amount)
            console.log("******THANK YOU FOR VISITING US**** ")
           }
           deposite_Amount(added_amt){
            console.log("*******WELCOME TO SBI ALWAYS FOR YOU*****")
            console.log("deposited amt is",added_amt)
            
            this.amount=this.amount+added_amt
            
            console.log("total acc balance is",this.amount)
            console.log("******THANK YOU FOR VISITING US**** ")
           }
           withdrawl_Amount(withdraw){
            console.log("*****WELCOME TO SBI ALWAYS FOR YOU****")
            console.log("withdrawl amount is",withdraw)
            this.amount=this.amount-withdraw
            
            console.log("your remaining balance is",this.amount)
            console.log("******THANK YOU FOR VISITING US**** ")
           }

}
let a=new Account(101,"chirag",200)
//a.get_Balance()
a.deposite_Amount(400)
//a.withdrawl_Amount(150)




