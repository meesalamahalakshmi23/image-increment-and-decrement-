let image=document.getElementById("image")
let warning=document.getElementById("warning")
image.style.width="120";
count=120;
function onIncbtn(){
    if(count<=200){
        count+=5
        image.style.width=count+"px";
        warning.textContent="";
    }else{
        warning.textContent="Image size cannot be increased more than 200px"
        warning.style.color="black";
        warning.style.fontSize="20px";
    }
}

function onDecbtn(){
    if(count>=60){
        count-=5
        image.style.width=count+"px";
        warning.textContent="";
    }else{
        warning.textContent="Image size cannot be decreased more than 60px"
        warning.style.color="black";
        warning.style.fontSize="20px";
    }

}
function onResetbtn(){
    count=120;
    image.style.width=count+"px";
    warning.textContent="";

}
        
