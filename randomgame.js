//overall

// document.querySelector
// document.querySelectorAll
// document.createElement
// textcontent
// addEventListener
// style
// math functions =>ceil,floor,random
//panel.setAttribute("class","className");

//string methods
    // length,uppercase,lowercase,slice,indexOf,
//array methods
    //length,join,split,toString(),push,pop,shift,unshift


//events

    // event bubbling and capturing in stopPropagation




    var rnum=Math.ceil(Math.random() * 100)+1;
    
    var radom=(document.querySelector('.guessField').value);
    
    var radSub=document.querySelector('.guessSubmit');
    var sucmsg=document.querySelector('.successmsg');
    var lowVal=document.querySelector('.lowVal');
    var highVal=document.querySelector('.highVal');
    var newstart=document.querySelector('.newstart');
    
    newstart.style.display="none";
    
    
    
    function add(){
        console.log('add');
    }
    add();
    (function(){
        console.log('anonymous funxtion');
    })()
    var a=function(){
        console.log("anonymous fun 222");
    
    }
    
    
    radSub.addEventListener('click',submirandValue);
    var limit=[];
    
    function submirandValue(){
    
     radom=Number(document.querySelector('.guessField').value);
     
     var paara=document.createElement('div');
     paara.textContent=radom;
     document.body.appendChild(paara);
     
        if(rnum === radom){
           sucmsg.textContent="Congratulations! You got it right!" 
           lowVal.textContent="";
           radSub.disabled=true;
           newstart.style.display="block";
    
           
        }else if(rnum >= radom){
            lowVal.textContent=" Last guess was too low!";
            sucmsg.textContent="";
        }else if(rnum <= radom){
            lowVal.textContent=" Last guess was too High!";
            sucmsg.textContent="";
            
        }
    }
    newstart.addEventListener('click',function(){
      
        radSub.disabled=false;
        radom=" ";
        newstart.style.display="none";
        document.querySelector('.guessField').value=''
        
    })
    
    
    //button test
    var btnt=document.querySelectorAll('.btntest');
    for(var i=0;i< btnt.length;i++){
        btnt[i].addEventListener('click',function(){
            alert("button test case");
        })
    }
    
    