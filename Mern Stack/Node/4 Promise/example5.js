// example showing the concept of async and await

function compoundInterest(p,r,t){
    return new Promise((resolve,reject)=>{
        var amt = p*Math.pow(1+r/100,t);
        var ci = amt-p;
        resolve(ci);
    });
}
console.log("Getting Hungry...");

async function zomato(){
    try{
        console.log("Fill address details");
            var res = await compoundInterest(1000,2.34,5);
        console.log("Hey Your order arrived | Please receive");
        console.log("Bill Amount : "+res);
    }catch(error){
        console.log("Error : "+error);
    }
}
console.log("Lets Order some food..");
zomato();
console.log("Back to my work");

