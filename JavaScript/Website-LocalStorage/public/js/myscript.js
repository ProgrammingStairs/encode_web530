
function handleSubmit(){
    // alert("It works");
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var address = document.getElementById("address").value;
    var arr=[];
    var obj = {username,email,password,address};
    var receivedData = JSON.parse(localStorage.getItem("data"));    
    // alert(receivedData);

    if(receivedData){
        var result = receivedData.find((obj)=>{
            return obj.email==email;
        });
        if(result){
            alert("Duplicate Email Id | Try with Another Email Id");
        }else{
            arr = [...receivedData,obj];
            localStorage.setItem("data",JSON.stringify(arr));
            alert("Data Added Successfully");
        }
    }else{
        arr = [...(receivedData||[]),obj];
        localStorage.setItem("data",JSON.stringify(arr));
         alert("Data Added Successfully");
    }
}