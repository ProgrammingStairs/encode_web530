function Employee(){
    this.name = "Andrew Anderson";
    this.age = 45;
    this.address = {
        city : "Indore",
        state : "Madhya Pradesh",
        toString(){
            return this.city+" "+this.state
        }
    }
}
const emp = new Employee();
module.exports = emp;