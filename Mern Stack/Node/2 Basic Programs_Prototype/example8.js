function Bank(actNo,name,bal){
    this.actNo = actNo;
    this.name = name;
    this.bal = bal;
}
Bank.prototype.printDetails = function(){
    console.log("Account Number : "+this.actNo);
    console.log("Name : "+this.name);
    console.log("Balance : "+this.bal);
}
Bank.prototype.withdrawal = function(wamt){
    if(wamt<=this.bal){
        this.bal = this.bal-wamt;
        console.log("Remaining Balance : "+this.bal);
    }else
        this.bal = "Insufficient Balance"
}
Bank.prototype.deposit = function(damt){
    this.bal = this.bal+damt;
    console.log("Updated Balance : "+this.bal);
}
const bank = new Bank("SBIUSER-II123","Andrew Anderson",750000);
bank.printDetails();
bank.withdrawal(600000);
bank.deposit(200000);
