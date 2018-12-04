Syntax: 

var a=5;   // statement
var a;  //declaration
a=5;    //value assigning

Promises : refer(https://davidwalsh.name/promises)
 -fetch api
 -The JavaScript Promise API is awesome but can be made amazing with async and await!
    var promise= new Promise(function(resolve,reject){
        resolve("success");  or  resolve();
    })

    console.log(promise);  
    //  promiseValue  is success.
    //  promisestatus  is resolved ,pending,reject
new Promise(function(resolve, reject) {
	// A mock async action using setTimeout
	setTimeout(function() { resolve(10); }, 3000);
})
.then(function(result) {
	console.log(result);
});


InstanceOf:
    -It tests whether the prototype property of  the constructor appears anywhere  in the prototype chain of the object
    function C(){}
    function D(){}

    var o= new C();

    o InstanceOf C;  //true
    Object.getPrototypeOf(o) === C.prototype; === o.__proto__

converting numbers to string:
    (123).toString();  //  "123"
    (123.23).toFixed();  // "123"
    (123).toExponential(2);  // "12+e"
    (123).toPrecision();  // "123"
    
converting string to numbers:
    Numbers("")  or Number (" ") ===0  and Number(1222 244) is NaN
    parseInt()
        parseInt("123")//123
        parseInt("123 dfsdf")//123
        parseInt("123 1244")//123
        parseInt("123 .1244")//123
        parseInt("123.1244")//123
    parseFloat()- same like parseInts with display with decimals

in:
 [1] in [1,2,3]

 string:
 str.replace(/Microsoft/g,"windows")
 str.length;
 str.indexOf(str,pos),str.lastIndexOf(str,pos);==> return index value
 but search will accept one position  str.search("sas")==> return index value
 str.slice(start,end) and negative value
 str.substring(start,end)
 str.substr(start,limit)
 var myNumber = 32;
myNumber.toString(10);   // returns 32
myNumber.toString(32);  // returns 10
myNumber.toString(16);  // returns 20
myNumber.toString(8);   // returns 40
myNumber.toString(2); 

x.toFixed(2);           // returns 9.66
valueOf() returns a number as a number.
    (123).valueOf();        // returns 123 from literal 123
    (100 + 23).valueOf();   // returns 123 from expression 100 + 23
var x = Number.MAX_VALUE;


to find an array:

Array.isArray([1,2,3])

[] Instanceof Array

push,pop,splice,slice,unshift,shift,length,concat
sort():
            points.sort(function(a,b){
            if(a-b){
                return a-b;
            }
        })
        points.sort(function(a,b){
            if(b-a){
                return b-a;
            }
        })

Math.ceil(Math.random()*100)
Math.max(...numbers)

foreach, for of, for in,some,every,indexOf,lastIndexOf,find,findIndex

The call() and apply() methods are predefined JavaScript methods.

They can both be used to call an object method with another object as argument.


Scope:
Global=> var => outside the function 
function => var
block =>let and const
for New keyword:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new


// Prevents changes of object properties (not values)
Object.seal(object)
// Returns true if object is sealed
Object.isSealed(object)

// Prevents any changes to an object
Object.freeze(object)
// Returns true if object is frozen
Object.isFrozen(object)

Object.keys();
Object.getOwnPropertyNames(Object);


function:

-function a(x,y){}  // function definition or declaration // x and y is parameters
-var c=function(){}  // function expression.
-(function(){})() // anoynomous function.
-a(5,10)  //5,10 is arguments  //

call and apply:

With the call() method, you can write a method that can be used on different objects.

https://www.w3schools.com/js/js_function_call.asp
xample
var person = {
    fullName: function(city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}
person.fullName.call(person1, "Oslo", "Norway"); //takes seperately
person.fullName.apply(person1, ["Oslo", "Norway"]);  // takes as an array


store:
    const store=createStore();
    export default combineReducers(categories,reducer1,reducer2)

    reducers
    var initialstate={
        count:1,
        peer:""

    };
    function reducer1(state=initialstate,action){
           switch(action.type){
            case "ADD":
                return{}
            case "SUB"
        }  
    }
    function categories(state=initialstate,action){
        switch(action.type){
            case "ADD":
                return{}
            case "SUB"
        }
    }


action:

export function method1({}){
    return{
            type:"ADD",
            value
    }


}

or//

var method1=()=>({
    
})


dispatch(method1())


sapient interview:

1)refer Reference.js
2)css orders and specificity same
3)client side template system
4)CSS specificity
    inlinecss -> ID -->class -->attribute --> element --> internal Css -->outline css
5)css coding practices
6)diff b/w fixed,fluid,Adaptive and responsive web design
    Fixed:
        fixed width in pixels and usually its width is 960px
    Fluid:
        specify size in percentage and if resize the proportion of element changes
        like the columns can narrow in size,text and videos may be bit smaller
    Adaptive:
        Several versions of the layout and based on different views the layout may changes
    responsive:
        combination of adaptive and responsive  and it shrinks and stretch based on elements

7)call and apply with inheritance
8)extends and use of componentDidMount lifecycles and other
9)var arr = [1,2,3,3,2,4]
 unique and distinct count
10)sass (mixins)
11)prototype chain and inheritance and __proto__

OOps:

Object.create will create a proto object.


object by reference:
    https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0
        variables values address objects
        reference   #001  #001    [1]
        refCopy
        refCop2    



        var reference = [1];
        var refCopy = reference;   
        var refCop2=reference;

        -so if you change in refCop2 ,it will update in reference object. 
        -similarly if u change any of referencecopy obj it will reflect in reference object.
        -Array.map,filter are pure functions because,
             they copy the array and work with the copy instead of the original. 

             
-pure and impure function => Refer reference.js


//Question: 2 in [1,2]

Anwser: false. Because "in" returns whether a particular property/index available in the Object. 
In this case object has index 0 and 1 but don't have 2. Hence you get false.


refer https://www.thatjsdude.com/interview/js2.html#objectEquality
Question 13

 ////////////////

 var arrr = [10, 12, 15, 21];
for (var i = 0; i < arrr.length; i++) {
  setTimeout(function() {
    console.log('Index: ' + i + ', element: ' + arrr[i]);
  }, 3000);
}

const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  // pass in the variable i so that each function 
  // has access to the correct index
  setTimeout(function(i_local) {
    return function() {
      console.log('The index of this number is: ' + i_local);
    }
  }(i), 3000);
}

////////////////////

closures:

A closure is basically when an inner function has access to variables outside of its scope. 
Closures can be used for things like implementing privacy and creating function factories       

to check the object real datatype,(for array also it shows Object)
Object.prototype.toString.call(arr1)

Memoization:

Memoization is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and 
returning the cached result when the same inputs occur again


call,apply ,bind: refer(https://medium.com/@omergoldberg/javascript-call-apply-and-bind-e5c27301f7bb)
bind:
The bind() method creates a new function that, when called, has its this keyword set to the provided value.
t let’s us explicitly define the value of this when calling a function.
var pokemon = {
    firstname: 'Pika',
    lastname: 'Chu ',
    getPokeName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var newPokeMon=function(){ console.log(this.getPokeName())};

var logPoekMon= newPokeMon.bind(pokemon);

logPoekMon();

call():
it calls a method with given this value and arguments provided individually

apply:
passed arguments as an array


    let                                       const
1) let a=10                                    const a=10
    a=11 // work                               a=11;  // error
2) reassinging of obj works                    reassinging of obj works
3)let yy={s: "10"};                             const yy={s: "10"};
 yy={s:"sathish"}// will work                            yy={s:"sathish"} // this wont work


  var obj1 = {name: 'John'}; var obj2 = obj1;
 obj2.name = 'James';
  obj1 == obj2  ? 'true' : 'false'  //true
  obj1 === obj2 ? 'true' : 'false'  //true


  //delete
delete keyword in javascript delete the property from the current object not from the prototype object and Object.
create will set obj as prototype object of inheritedObj.


Hoisting:
    -JavaScript only hoists declarations,not initializations.
    -let and const cant be hoisted.
    -function definition will be hoisted to the top of the scope.
    -function declaration wont be hoisted at the top of scope.

"use strict":
    -assigning variable without declaration will throw error
    -deleting primitive values will throw error
    


event loop:

heap,Stack and Queue

stack:
-A frame which calls the second frame with arguments and local variable and second frame calls the third 
 frame and finally empty the stack

Queue:
-There will be a list of  messages to be processed and each message will have  associated  functions which
gets called to handle the messages.

-At some point during the event loop, the runtime starts handling the messages on the queue,
 starting with the oldest one. To do so, the message is removed from the queue and its corresponding 
 function is called with the message as an input parameter. As always, calling a function creates a new 
 stack frame for that function's use.

-The processing of functions continues until the stack is once again empty; then the event loop 
  will process the next message in the queue (if there is one).
            while (queue.waitForMessage()) {
            queue.processNextMessage();
            }

Heap:
-Objects are allocated in a heap which is just a name to denote a large mostly unstructured region of memory.



Memory Management:  //garabage collection
    Memory lifecycles:
        -Allocate the memory you need
        -Use the allocated memory (read, write)
        -Release the allocated memory when it is not needed anymore
    -"garbage collector" whose job is to track memory allocation and use in order to 
        find when a piece of allocated memory is not needed any longer in which case,
        it will automatically free it.



event bubbling:
        -the third parameter is by default false.
    item.addEventListener("click", doSomething, false);
    item.addEventListener("click", doSomething);
    
        

event capturing:
        -if the third parameter is true then it is happen in the capturing phase .
    item.addEventListener("click", doSomething, true);

to interupt event
    use event.stopPropagation();

event.prevent default:
    This function needs to be called when reacting to an event 
    on the element whose default reaction you want to ignore. 


-refer.basic js for zoho interview questions

    -primitive types cant be deleted
    -object properties we can delete.


Litmus7 Technical:
 if you delete a prototype property, it will affect all objects inherited from the prototype.

1)String.prototype.repeatme=function(len){
	return this.split('').join('').repeat(len)
}

"sathish".repeatme(5)  //sathishsathishsathishsathishsathish


2)str("aabcdde")  //ad

    function strduplicate(str){
	
	var d=str.split("");
	var ar=[], br=[];
	var out=d.map((e,i,arr)=>{
		ar.indexOf(e) < 0 ? ar.push(e) : br.push(e)
	})
	return br.join("")
}
strduplicate("aabcdde")


3)const store=[1,1,1,3,4,5,4,3,3,6,7,4,3,1];
        //or
var storea=["a","b","a","d","d","e","d"];
var counts={};
storea.map((x)=> counts[x]=(counts[x] || 0)+1);
console.log(counts);



Wipro:
Es5 and ES6:
    -) function currying 
    -) function vs fat arrow function
    -) let and const diff
    -)how to stop updating an array
    -) accessiblity for blind person
    -) event bubbling vs capturing
    -) e.stoppropagation and e.stopimmediate propagation
    -) rest vs spread
    -) var a=5 vs a=5
React:

-) react.pure components
    https://reactjs.org/docs/react-api.html#reactfragment
    should component update witll check if any props or change comiong is new or not.
    
    https://codeburst.io/when-to-use-component-or-purecomponent-a60cfad01a81
-)mutable and immutable
-)provider, 
-)redux thunk vs promises
         -promise will return a promises
         -redux thunk will make a action generators to return as function
-) context API
-) to transfer props to two different child components.
-) to call the child method from parent component
-) dop or some react method.


Html5 and css3:
-doctype
-meta view port initial scale 1.0 and width 100%
-to make div centre in horizontal and vertical and div is position fixed
-doctype not mentioned and using HTML5 element
    -if doctype is  not included ,semantic elements wont work and the browser will move to quirks or strict mentioned
    it means html will render based on browser version.
-box model surrounded by
    content,padding,border,margin and values will be 0
-animate vs transform
    -An animation lets an element gradually change from one style to another.
    -CSS transitions allows you to change property values smoothly (from one value to another), over a given duration.
-datalist
    for predefined values and for auto complete
-to optimise the page.


rupeek:

http://www.mocky.io/v2/5bdd28dd32000075008c6227
https://s3-ap-southeast-1.amazonaws.com/he-public-data/Rupeek%20Frontend%20Challange%20Mobileb02d046.png
https://s3-ap-southeast-1.amazonaws.com/he-public-data/Rupeek%20Frontend%20Challangedc0560d.png