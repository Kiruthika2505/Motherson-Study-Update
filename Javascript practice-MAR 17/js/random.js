let a=document.getElementById("t1");
let b=document.getElementById("p1");
function randomnum(){
    if(a.value>=1&&a.value<=10)
    {
        b.textContent="Good Work";
    }
    else{
        b.textContent="Not Matched";
    }
}