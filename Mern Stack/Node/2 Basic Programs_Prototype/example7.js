function Vehicle(make,model,year){
    this.color="black";
    this.price="INR 9,00,000";
    this.makeNew = make;
    this.showDetails=function(){
        console.log("Make : "+this.makeNew);
        console.log("Model : "+model);
        console.log("Year : "+year);
        console.log("Color : "+this.color);
    }
}
Vehicle.prototype.show = function(){
    console.log("Make : "+this.makeNew);
    console.log("Price : "+this.price);
    console.log("Model : "+this.model);    
}

const vec = new Vehicle("Honda","Amaze",2015);
vec.showDetails();
vec.show();