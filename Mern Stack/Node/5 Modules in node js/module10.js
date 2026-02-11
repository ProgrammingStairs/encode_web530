var obj = {
    name:"Andrew Anderson",
    age:56,
    address :{
        city:"Indore",
        state:"Madhya Pradesh",
        toString(){
            return this.city+" , "+this.state;
        }
    }
}
module.exports = obj;
// console.log(module);

