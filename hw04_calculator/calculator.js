var numresult; 
var str; 
function onclicknum(nums) { 
    str = document.getElementById("nummessege"); 

    if(nums=="0" && str.value=="0")
    str.value=0;

    else if(nums!="0" && str.value=="0")
    str.value=nums;

    else
    str.value = str.value + nums; 
} 

function onclickdot(){
    str=document.getElementById("nummessege");

    if(str.value=="")
    str.value="0.";

    else{
        for(i=0; i<=str.value.length;i++){ //判断是否已经有一个点号 
            if(str.value.substr(i,1)==".") 
            return false; 
        } 
        str.value+=".";  
    }

   
}

function onclickback(){
    str = document.getElementById("nummessege");
    str.value=str.value.slice(0,str.value.length-1);
}

function onclickclear() { 
    str = document.getElementById("nummessege"); 
    str.value = ""; 
} 

function onclickresult() { 
    str = document.getElementById("nummessege");
    
    try{
        numresult = eval(str.value);
        if(numresult=="Infinity")
        alert("Dividend cannot be zero!");
        else
        str.value = numresult; 
    }

    catch(e){
        alert("Invalid Expression!");
    }
    
} 