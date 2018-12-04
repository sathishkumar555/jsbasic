var par=document.querySelector('a')
par.textContent="Mozilla Developer Network";
par.href="https://developer.mozilla.org";

var np=document.createElement('p');
np.textContent="new paragraph";

var ma=document.querySelector('main');
ma.appendChild(np);


var text = document.createTextNode(' — the premier source for web development knowledge.');
var linkPara = document.querySelector('p');
linkPara.appendChild(text);


// ma.removeChild(np);

np.style.color="red";
np.setAttribute("class","paraclass");
np.setAttribute('id',"paraid");


//fetch
//https://api.myjson.com/bins/1fpe0l
var fetchurl= "https://api.myjson.com/bins/1fpe0l";
// var fetch= 
fetch(fetchurl).then(function(response){
    response.json().then(function(json){
        console.log(json)
            for(var i=0;i< json.length;i++){
                var newp=document.createElement('p');
                newp.setAttribute("class","jsclass");
                newp.textContent=json[i].name;
                ma.appendChild(newp);
            }
        })
})

fetch(fetchurl).then(function(response){
    console.log(response)
    
    return response.json()
})
    .then(function(response){
        console.log(response)
        return response
    })


//Closures:

function makeSizer(Size){
    return function(){
        document.body.style.fontSize=Size + 'px';
        document.body.style.color="pink";
        
    }
}

var font16=makeSizer(12);
var font18=makeSizer(18);
var font20=makeSizer(20);

document.querySelector('.newpara').onclick=font20;

