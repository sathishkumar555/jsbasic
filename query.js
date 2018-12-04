

// var r;

var r=10;
var r="ram";
var r=10.5;
var r={};
var r=[1,2,3];

var person = {
    name: ['Bob', 'Smith'],
    age: 32,
    gender: 'male',
    interests: ['music', 'skiing'],
    bio: function() {
      alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
    },
    greeting: function() {
      alert('Hi! I\'m ' + this.name[0] + '.');
    },
    allinfo:this.name
  };

console.log(r)
console.log(person)


// var que=document.querySelector('h3');
// que.textContent="Doss ram";

var elee=document.createElement('h3');
elee.textContent="sath";

document.body.appendChild(elee);

var que=document.querySelector('h3');
que.textContent="test";
que.style.color="red";
que.style.background="black";
// que.onclick=function(){
//     alert("onclick method");
// }

//or

que.addEventListener('click',addmethod);
function addmethod(){
    alert("i am in add method");
}

//or
que.addEventListener('click',function(){
    alert("i am in add method");
    
});



//  var que=document.querySelector('h3');


