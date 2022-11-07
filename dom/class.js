class Account{
    
    
    open_Account(){
        console.log("account is created")
    }
    deposite_amt(){
        console.log("amount deposited successfully")
    }
    withdrawl_amount(){
        console.log("enter amount in multiples of 100")
    }
    balance_Enquiery(){
        console.log("your balance is")
    }
    
}
let a1= new Account()
a1.balance_Enquiery()
a1.deposite_amt()
a1.withdrawl_amount()
a1.open_Account()
console.log(typeof(a1))
