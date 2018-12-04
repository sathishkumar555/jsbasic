var btnmac=document.querySelector('.strmac');
var strp=document.querySelector('.strp');

btnmac.addEventListener('click',function(){
    if(btnmac.textContent==="Start Machine"){
        btnmac.textContent="Stop Machine";
        strp.textContent=" The machine is stopped";
        
    }else{
        btnmac.textContent="Start Machine";
        strp.textContent="The machine is  Started";
    }
});