// Example showing the concept of callback hell | pyramid of doom

function myFunction(num,callback){
    console.log(num);
    callback(num+2,(num,callback)=>{
        console.log(num);
        callback(num+2,()=>{
            console.log("End of program");
        });
    })
}

var num = 10;
myFunction(num,(num,callback)=>{
    console.log(num);
    callback(num+2,(num,callback)=>{
        console.log(num);
        callback();
    });
});