let c=document.getElementById("p1");
function mult()
{
    let a=document.getElementById("inpid").value;
    let b=document.getElementById("inpid1").value;

    a1=parseInt(a);
    b1=parseInt(b);
    c.textContent=(a1*b1);
}
function divd()
{
    let a=document.getElementById("inpid").value;
    let b=document.getElementById("inpid1").value;
    a1=parseInt(a);
    b1=parseInt(b);
    c.textContent=(a1/b1);
}

