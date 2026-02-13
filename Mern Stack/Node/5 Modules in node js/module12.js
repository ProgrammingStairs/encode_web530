const emp = new function Employee(){
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

module.exports = emp;