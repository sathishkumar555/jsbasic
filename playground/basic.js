


// ------------------DOM--------------------------------
    var di=document.getElementsByTagName("div")[0];
    var h5=document.createElement("h5");
    var h1Text=document.createTextNode("I am h1 tag");
    h5.appendChild(h1Text);
    di.appendChild(h5);
    document.body.appendChild(di);

    var ul=document.createElement('ul');
    for(var i=1;i<=5;i++){
      var li=document.createElement('li');
      var liTextNode=document.createTextNode("user"+i);
      li.addEventListener("click",clickMethod);
      li.classList.add('ulstyle');
      li.appendChild(liTextNode);
      ul.appendChild(li);
    }
    function clickMethod(e){
      debugger
      console.log(e)
    }


  
    document.body.appendChild(ul);





// ------------------End of DOM--------------------------------



var d = document.createElement("p");
d.textContent = "I am paragraph";
document.body.appendChild(d);
d.setAttribute("class", "paraclass");

console.log("basic datad");
var button = document.querySelector("button");
button.setAttribute("class", "formbtn");
var btn = document.querySelector(".formbtn");

btn.addEventListener("click", btnfun);
function eventBubb(){
  // alert("event bubbling");
}
function btnfun(e) {
  console.log("add event click");
  fetch("http://myjson.com/n8p8s").then(function(res) {
    res.json().then(function(data) {
      console.log(data);
    });
  });
}

function clickme() {
  console.log("add event click");
}

function add() {
  console.log("add");
}
(function() {
  console.log("anonymous funxtion");
})();

add();

var arr = [
  "https://www.google.com",
  "https://www.hackerearth.com",
  "https://www.hackerearth.com",
  "https://www.wikipedia.com",
  "https://www.hackerearth.com"
];
console.log(arr);
let unique = [...new Set(arr)];
var filt = unique.map((e, i) => {
  return arr.filter(ee => ee == e);
});

function comparator(a, b) {
  if (a.length < b.length) {
    return -1;
  }
  if (a.length > b.length) {
    return 1;
  }
  return 0;
}

let final = filt
  .sort(comparator)
  .reverse()
  .sort(comparator)
  .reverse();
console.log(final);
let result = final.map(e => e[0]);
result.unshift(result.length);
console.log(result.join("\n"));

// Promises:
console.log("promise starts");

const promise = new Promise((resolve, reject) => {
  setTimeout(function() {
    resolve("Success!"); // Yay! Everything went well!
    // reject("error")
  }, 100);
});
console.log(promise);
promise.then((succmessage, errormessage) => {
  console.log(succmessage);
  // console.log(errormessage);
});

//sapient

// function longest_palindrome(s){

// var maxLen = 0,
// maxStr = '';
// var str=s.split("");
// str.map((v,i,arr)=>{
//     var subs = s.substr(i, s.length);
//     for(var j=subs.length; j>=0; j--)
//     {
//     var subString = subs.substr(0, j);
//     if (subString.length <= 1)
//     continue;
//         var repeat=subString.split("").reverse().join("");
//     if (repeat==subString)
//     {
//     if (subString.length > maxLen)
//     {
//     maxLen = subString.length;
//     maxStr = subString;
//     }
//     }
//     }
//     return maxStr
// })

// // for(var i=0; i < s.length; i++)
// // {
// // var subs = s.substr(i, s.length);

// // for(var j=subs.length; j>=0; j--)
// // {
// // var subString = subs.substr(0, j);
// // if (subString.length <= 1)
// // continue;
// //     var repeat=subString.split("").reverse().join("");
// // if (repeat==subString)
// // {
// // if (subString.length > maxLen)
// // {
// // maxLen = subString.length;
// // maxStr = subString;
// // }
// // }
// // }
// // }

// // return maxStr;
// }
let checkPrime = (v) => {
    for(let i = 2; i < v; i++)
      if(v % i === 0) return "NO";
    return "YES";
  }
function longest_palindrome(s) {
  var maxLen = 0,
    maxStr = "";

  for (var i = 0; i < s.length; i++) {
    var subs = s.substr(i, s.length);

    for (var j = subs.length; j >= 0; j--) {
      var subString = subs.substr(0, j);
      if (subString.length <= 1) continue;
      var repeat = subString
        .split("")
        .reverse()
        .join("");
      if (repeat == subString) {
        if (subString.length > maxLen) {
          maxLen = subString.length;
          maxStr = subString;
        }
      }
    }
  }
  return checkPrime(maxStr.length);
}
console.log(longest_palindrome("random1221random"));

//random1232321random


//To check object and array of two  values are equal or not


var isEqual=function(val,other){
  var type=Object.prototype.toString.call(val);
  var other=Object.prototype.toString.call(other);
  console.log(type,other);
    if(!(type === other)){
      return false;
    }

}
var arr = [10, 12, 15, 21];
var other={a:"apple",b:"ball"};


console.log(isEqual(arr,other));



///to check the output

var output = (function(x){
  delete x;
  return x;
})(0);

console.log(output);



///////////1)event bubbling and capturing/////////////////
var items = document.querySelectorAll(".item");
 
for (var i = 0; i < items.length; i++) {
    var el = items[i];

    //capturing phase
    el.addEventListener("click", doSomething, true);

    //bubbling phase
    el.addEventListener("click", doSomething, false);
}

function doSomething(e) {
    console.log(e.currentTarget.id);
}


//2)////////timeout///////////////

(function(){
    console.log(1);
    setTimeout(function(){ console.log(2)},0);
    setTimeout(function(){ console.log(3)},100);
    console.log(4);
    return 5;
})()

// 3)object Length

var objT={a:"apple",b:"ball",c:"cat",d:"dog"};
console.log(ObjLength(objT));

function ObjLength(objT){
  var len=Object.keys(objT);
  return len.length;
}

//or

function countProperties (obj) {
  var count = 0;

  for (var property in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, property)) {
          count++;
      }
  }

  return count;
}

// var bookCount = countProperties(bookAuthors);

//delete



//litmus7
// 1)
String.prototype.repeatme=function(len){
	return this.split('').join('').repeat(len)
}

console.log("sathish".repeatme(5))  //sathishsathishsathishsathishsathish


//2)

function strduplicate(str){
	
	var d=str.split("");
	var ar=[], br=[];
	var out=d.map((e,i,arr)=>{
		ar.indexOf(e) < 0 ? ar.push(e) : br.push(e)
	})
	return br.join("")
}
strduplicate("aabcdde")


// 3)

// const store=[1,1,1,3,4,5,4,3,3,6,7,4,3,1];
        //or
var storea=["a","b","a","d","d","e","d"];
var counts={};
storea.map((x)=> counts[x]=(counts[x] || 0)+1);
console.log(counts);


// 4)

function strduplicate(str){
	var count={},dup=[];
	var d=str.split("");
	var out=d.map((e,i,arr)=>{
		count[e] = (count[e] || 0) +1;
		if(count[e] >1){dup.push(e)}
	})
	return dup.join("")
}
console.log(strduplicate("aabcdde"));

// xy=5;
// console.log(xy);
// let xy;
