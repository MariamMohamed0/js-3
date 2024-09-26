var counter=0;
function increment(){
    counter++;
    document.getElementById("demo").innerHTML=counter;
}
function decrement(){
    counter--;
    document.getElementById("demo").innerHTML=counter;
}

function convertdorlla(){
    var dorlla =document.getElementById("dorlla").value;
    var result=document.getElementById("result");
    if(dorlla==""){
        result.innerHTML="Enter data"
    }
    else if(isNaN(dorlla)){
        result.innerHTML="Enter number not text"
    }
    else if(dorlla<0){
        result.innerHTML="Enter a positive number";
    }
    else if(dorlla==0){
        result.innerHTML="Enter number rather than zero";
    }
    else{
        result.innerHTML=dorlla*50 +" Egption pound";
    }
    return false;
}