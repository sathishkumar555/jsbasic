var apiurl="https://api.myjson.com/bins/114iyd";


var request = new XMLHttpRequest();
request.open('GET', apiurl);
request.responseType = 'json';

request.onload = function() {
    var res=request.response;
    fetchdata(res)
 };
  request.send();



function fetchdata(data){
    for(var i=0;i< data.length;i++){
        var doc=document.createElement('div');
        doc.textContent=data[i].title;
        doc.setAttribute("class","test");
        document.body.appendChild(doc);
    }
}


