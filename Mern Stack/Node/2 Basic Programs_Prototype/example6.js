function Employee(){
    this.name = "Andrew anderson"
    this.age = 67;
    this.isAdmin = true;
    this.showDetails=function display(){
        console.log("Name : "+this.name);
        console.log("Age : "+this.age);
        console.log("Address : "+this.address);
    }
}
Employee.prototype.address = "Indore";
Employee.prototype.checkIsAdmin = function(){
    console.log("Admin Status : "+this.isAdmin);
}

const emp = new Employee();
// console.log(emp);
emp.showDetails();
emp.checkIsAdmin();