//task1
var div1=document.createElement('div');
document.body.appendChild(div1);
var div=document.getElementsByTagName("div")[0];
var p;
for(var i=0;i<=500;i++){
    p=document.createElement("p");
    p.classList.add("box");
    p.addEventListener('mouseleave',hoverbox)
    div.appendChild(p);
    document.body.appendChild(div);
}


function hoverbox(e){
    
}





// end of task1