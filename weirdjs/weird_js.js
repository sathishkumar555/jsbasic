var a = "apple";

function a(){

}

console.log(window.a,this.a)
console.log("test");

//event loop


function b(){  console.log(myVar) }
function aa(){
  var myVar=5
  console.log(myVar);    //variable environment
  b();
}

var myVar=2;

aa();
console.log(myVar);

// ---------------------1)example of event queue-----------------------

// long running function
function waitThreeSeconds() {
  var ms = 3000 + new Date().getTime();
  while (new Date() < ms){}
  console.log('finished function');
}

function clickHandler() {
  console.log('click event!');   
}

// listen for the click event
document.addEventListener('click', clickHandler);  // it will add in evnt queue


// waitThreeSeconds();
console.log('finished execution');

// ---------------------end of example ---------------------


var x=5,y=6,z=10;

x=y=z; //associativity (right-left)

console.log(x,y,z);

var xa;
xa=0;
if(xa || xa === 0 ){ console.log("something working here")};


function greet(name){  // name="kumar"
  name= name|| "<enter your name>"   //default value
  console.log("welcome", name);
}
greet("sath");
greet();

//----------
    console.log(libraryName)
//---------

var english={};   // english and spanish is a namespace
var spanish={
  greetigs:{}
};
english.greetings={};
english.greetings.greet="hello english";  // it will hrow error as eng.greeti ,has not stored in memory
spanish.greet="hello spanish";

console.log(english);
console.log(spanish);


//functions are objects
  //objFunc will sits in memory
//function decalration or statement
function objFunc(){                           //objFunc is a Name(key) in obj
  console.log("functions are objects");       // all lines inside function is a code which is a invokable 
}
objFunc.a="a property";
objFunc();


//function expression:

var anoyFunc=function(){                  // name(key)  is empty (because it is anonymous)
  console.log("anonymous function")       // code 
}
anoyFunc();


function log(a){ a();}

log(function(){console.log("passing me as a argument")})  //passing func to other func () //first class func


//pass by reference:

  var c={greeting:"hi"};
  var d;
  d=c;
  console.log(c);
  console.log(d);

  function changeGreeting(obj){
    obj.greeting="hello";   //mutates an original object
  }

  changeGreeting(d)
  console.log(c);
  console.log(d);

  //equal operator setup new Memory space
  c={greeting:"hello sathish"};  //it points to new  memory

  console.log(c);
  console.log(d);

  //this
  console.log("##########this############")
  console.log(this);  // global  context.
  function az(){ this.z="zebra"; console.log(this);}    // global  context.
  function ay(){ console.log(this);}    // global  context.
 az();
 ay();
console.log(z);

var objA = {
    c:"c object",
    log:function(name){  // when method created inside an object ,`this` refers to particular object
      let self=this;
      self.c=name;            
      console.log(self);  // it prints objA 
        var dd=function(name){
          self.c=name; 
          console.log(self)   // **a function inside an function ,`this` will refer to a global object(use reference to get the obj)
        }
      dd("c object updated again")
    }
}

objA.log("c object updated");

//Array
  //different data types including functions
var arr=[
  1,
  "sathish",
  {
    name:"kumar",
    address:"chennai"
  },
  function(name){console.log(name)},
  true
];
arr[3](arr[2].name);
console.log(arr);

//syntax parsers

    function objMethod(){
      return{
        firstName:"sathishKumar"
      }
    }
  //error Syntax Parsers
  // function objMethod(){
  //   return                                 // it will parse as return; and will undefined
  //   {
  //     firstName:"sathishKumar"
  //   }
  // }

console.log(objMethod());

//IIFE:---------------------
// var greeting=f(){}() =>function object will be created and wil be invoked.
var greeting=function(name){
  console.log("hello",name)
  return 'welcome '+ name + ' to India';
}('sathish');                         //it wont available in global object

console.log(greeting);  
// anything inside an () is an expression.
var nameA="kumar";
var greeting="Hola";
(function(name){
   console.log(this);
    console.log( greeting  + name + ' to Tamil Nadu');
   greeting="Hello ";
   (function(){
    console.log(this);
   }())
}(nameA));


// ------------------------------end iof IIFE---------------------------


//--------------Closure---------
    // -can use for function expressions,callback and factories
  function greetAll(whatToSay){
    return function(name){
      console.log(whatToSay + " "+ name ,this)
    }
  }

var sayHi=greetAll("Hi");       //it will create in global excecutio context.
sayHi("Nagaraj")
// console.log(sayHi);

function buildFunctions(){
  var arr=[];
  for(var i=0;i<3;i++){
    arr.push(function(){console.log(i)})
  }
  return arr;
}

var fs=buildFunctions();
fs[0]();
fs[1]();
fs[2]();
//////or//////////////
function buildFunctions2(){
  var arr=[];
  for(var i=0;i<3;i++){
    arr.push(
      (function(j){
        return function(){console.log(j)}
      }(i))
    )
  }
  return arr;
}

var fs2=buildFunctions2();  // one function call
fs2[0]();
fs2[1]();
fs2[2]();
////or ////////// you can use let in for loop(es6)

//factory

function displayLanguage(ln){

  return function(fName,lName){
    console.log(fName,lName,"speaks "+ ln);
  }
}
//two function call
var en = displayLanguage('en');
var sp= displayLanguage('sp');

en("sathish","kumar");
sp("ram","doss");


function callLater(){
  var greeting="Hi welcome to function";
  setTimeout(function(){
      console.log(greeting);
  },3000)

}
callLater();

//callback

  function tellMeStatus(callback){
    var a=5;
    callback();
  }

  tellMeStatus(function(){
    console.log("method1 call done")   //function passing as param to other function
  })

  // tellMeStatus(function(){
  //   alert("method2 call done")
  // })
//----------End of closure------- 


//----------------start of call bind and apply:----------------------
    
    var person={
      fullName:"sathish",
      lastName:"Kumar",
      getFullName:function(){
        return this.fullName + " "+ this.lastName
      }

    }

    var logName=function(ln1,ln2){
      console.log("logs! "+this.getFullName());
      console.log(ln1,ln2);
      console.log("--------");
    };

    var logPersonName=logName.bind(person); // lognName is the func object attched to the person object
    logPersonName("tamil","english");

    logName.call(person,"english","french");
    logName.apply(person,["tamil","spanish"]);

    (function(ln1,ln2){
      console.log("logs! "+this.getFullName());
      console.log(ln1,ln2);
      console.log("--------");
    }).call(person,"enn1","ennn2");

    (function(ln1,ln2){
      console.log("logs! "+this.getFullName());
      console.log(ln1,ln2);
      console.log("--------");
    }).apply(person,["enn1","ennn2"]);

    
    (function(ln1,ln2){
      console.log("logs! "+this.getFullName());
      console.log(ln1,ln2);
      console.log("--------");
    }).bind(person,"enns1","ennbn2")();

    // function borrowing

    var person2={
        fullName:"sathish",
        lastName:"Kumar"
      };
    console.log(person.getFullName.apply(person2));


    //function currying(bind =>new copy of an function)
      function multiply(a,b){
        return a*b;
      }

      var mulby2=multiply.bind(this,2);   //
      //internally  it creates like 
        // function mulby2(b){
        //     var a=2;
        //     return a*b;
        // }
        console.log(mulby2(4));



//----------------End of call bind and apply:----------------------

//---------------functional programming--------------------
      function mapForEach(arr,fn){  
        var newArr=[];
          for(var i=0;i <arr.length;i++){
          newArr.push(fn(arr[i]))
          }
        return newArr;
      }

      var arrr=[1,2,3]; 
      var arr2= mapForEach(arrr,function(item){
          return item*2
      });   
      console.log(arr2);

      var arr3= mapForEach(arrr,function(item){
        return item  > 2;
    }); 
  
    console.log(arr3);
    // ---------or--------------

    var checkLimit=function(limit,item){
      return item >limit;
  };  

    var arr4=mapForEach(arrr,checkLimit.bind(this,2)); //by bind
    console.log(arr4)

    // ---------or--------------

    var checkLimitSimplified=function(limit){      //by currying or closuure
      return function(limit,item){
        return item >limit;
    }.bind(this,limit)
    }

    var arr5=mapForEach(arrr,checkLimitSimplified(1));
    console.log(arr5);

       // ---------or--------------

       var checkMulSimplified=function(limit){      //by bind
        return function(limit,item){
          return item * limit;
      }.bind(this,limit); 
      }
  
      var arr6=mapForEach(arrr,checkMulSimplified(2));
      console.log(arr6);

      var arr7= _.map([1,2,3],function(e){
        return e*5;
      })

      console.log(arr7);
      var arr8=_.filter([2,3,4,1,6,7,-2],(e)=>{
        return e >2;
      })

      console.log(arr8);

//---------------End of functional programming--------------------

//---------------start of oojs--------------------
      var userObj={
        firstName:"DefaultUserFirst",
        lastName:"DefaultUserLast",
        getFullName:function(){
          return this.firstName+" "+ this.lastName;
        }
      }

      var sathishObj={
        firstName:"sathish",
        lastName:"Kumar",
      };
      var ramObj={
        firstName:"Ram",
        lastName:"doss",
      };
      var sriObj={
        firstName:"sri",
        lastName:"dhar",
      };

      
      //or

      // var sathishObj={
      //   firstName:"sathish"
      // } ;
      sathishObj.__proto__=userObj;   //only for example purpose and dont try in project cause performance issues.
     
      console.log(sathishObj);
      console.log(sathishObj.getFullName());


        var obJ1={}; var obJ2=[]; var obJ3=function(){};
        console.log(obJ1,obJ2,obJ3);

      for( prop in sathishObj){
         console.log(prop +" "+ sathishObj[prop])       //it will return all its objects and proto objects 
      }

      // example of Reflection and extend
      for( prop in sathishObj){
        if(sathishObj.hasOwnProperty(prop)){
        console.log(prop +" "+ sathishObj[prop])       //it will return only sathishObj objects.

        }
     }

    console.log(_.extend(sathishObj,ramObj,sriObj));  //_.extend is a underscore library


//---------------End of oojs--------------------

//-----------function constructor and Object------------

     function Person(fname,lname){
        console.log("-------------CONSTRUCTOR------------");
        this.firstName=fname;
        this.lastName=lname;
        // return { greeting:"Hi sathish"}
     }

     //All properties will be inside the construtor func, but method can 
      //inside prototype as if we create inside Person ,if will create an 1000 person objects
      //then memory of 1000 methods will be occupied,

     Person.prototype.getFullName=function(){
       return this.firstName +  " "+ this.lastName;
     }
     // `new` keyword will create an empty object of Person{} and invoke Person function
     // `this`  in constructor function will point to a newly created empty  object.

     var sathish= new Person("sathish","kumar"); 
     console.log(sathish.getFullName());

     var ram= new Person("ram","doss"); 
     console.log(ram);


     Person.prototype.getLatestFullName=function(){
      return this.firstName +  " "+ this.lastName;
    }
    console.log(ram.getLatestFullName());

    //own prototype methods

      String.prototype.greaterThan=function(limit){
        return this.length > limit
      }

     console.log("sathish".greaterThan(3));

     Array.prototype.repeatAray=function(){
       return this.reverse();
     }
     console.log([1,2,3].repeatAray());

     Number.prototype.isPositive=function(){
       return this > 0;
     }
     console.log((5).isPositive());

     //prototype=> Object.create
     var Obej={
       fname:"sathish",
       lname:"kumar",
       greet:function(){
         return this.fname +" "+ this.lname;
       }
     }

     var per1=Object.create(Obej);
     var per2=Object.create(Obej);

     console.log(per1);
     
//-----------End of function constructor and Object------------

var ais=[];
var bis={};

// to find the type of array:
    //ais.instanceof Array
    //Object.prototype.toString.call(ais)

console.log(typeof ais);

//strict mode
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
