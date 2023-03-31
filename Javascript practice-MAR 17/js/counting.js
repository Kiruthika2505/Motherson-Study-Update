function onIncrement(){
    let a=document.getElementById("counter");
    let b=a.textContent;
    let c=parseInt(b)+1;
    if(c>0){
        a.style.color="green";
    }
    else if(c<0){
        a.style.color="red";
    }
    else{
        a.style.color="black";
    }
    a.textContent=c;
}
 function onDecrement(){
     let a=document.getElementById("counter");
     let b=a.textContent;
     let c=parseInt(b)-1;
     if(c>0){
        a.style.color="green";
        }
    else if(c<0){
        a.style.color="red";
        }
    else{
        a.style.color="black";
        }
    a.textContent=c;
}
function onReset()
{
    let a=document.getElementById("counter");
    let counterValue=0;
    a.textContent=counterValue;
    a.style.color="black";
}