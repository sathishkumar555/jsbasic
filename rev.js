var cre=document.createElement('h1');
cre.textContent="love Js";
document.body.appendChild(cre);


 var a=document.querySelector('h1');
 a.style.color='grey';

 var di=document.createElement('div');
 di.textContent="example div";
 di.setAttribute('class','newclass');
 di.style.background="orange";
document.body.appendChild(di);


var counh2=document.querySelectorAll('h2');
console.log(counh2);
console.log(counh2.length);

for(var i=0;i< counh2.length;i++){
    counh2[i].textContent="query selector all";
    counh2[i].style.color="blue";
}

var inpuval1=document.querySelector('.testclass');
var btn=document.querySelector('.formbtn');
btn.addEventListener('click',function(){ 
    console.log("addEventListener click anoym function " + inpuval1.value);
});
btn.addEventListener('click',testfunc);
function testfunc(){
    console.log("test named function " + inpuval1.value);
}

function checkbtn(){
    console.log("direct check btn " +inpuval1.value);
}










