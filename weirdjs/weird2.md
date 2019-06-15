**Hoisting:**

- setting up memory space for variables and functions declarations  is called hoisting.
- only the variable declarations are hoisted (move to the top of the scope).
- The advantage is you are using the function before it is declared.
    var a;     // variable declaration
    var a=10;  // variable  initialization

=> function  expression is not hoisted.
=> variables with let and const wont be hoisted.
=> Arrow functions are not hoisted

**var**:

- undeclared variables are always global.
- function only create a new scopes
- let and const create a block scope
- variable declared with let cannot be in window or global object
- const => It does NOT define a constant value. It defines a constant reference to a value.


**Js basics**:

var x = 10;    //statement
x is identifier
var x;        //declaration
var x=10 ;   //initialisation
- Changes to arguments are not visible (reflected) outside the function.
- Changes to object properties are visible (reflected) outside the function.

**map:**

map calls a callback function once for each element in order and construct a new array.
[].map(fn);
const data= arr.map((e,i,arr)=>{

})


**polfill for map, filter:**

Array.prototype.mapp=function(fn){
	console.log(this,fn)
	var O = Object(this);
	var out=[];
	for(var i=0;i<O.length;i++){
        if(i in O){
		out.push(fn(this[i],i,this))
	}
    }
	return out;
}

<!-- https://codepen.io/ada-lovecraft/pen/EggGbY -->
Array.prototype.filterr=function(fn){
	console.log(this,fn)
	var O = Object(this);
	var out=[];
	for(var i=0;i<O.length;i++){
        if(i in O){
		if(fn.call(this,this[i],i,this)){
			out.push(this[i])
			}
		
	}
    }
	return out;
}

reduce also similiar to above methods.


**scope vs context (invocation):** 
- refer:http://ryanmorr.com/understanding-scope-and-context-in-javascript/
- Each function creates a new scope
- scope determines the visiblity of a variable
- `scope`(local,global and block) is function based where `context`(this) is object based
- `context` is always a `this` which is reference to the object which is currently executing.

**execution context:**
- when a function is invoked a new execution context is created.
- It have two phases
    - creation phase: 
        * set variable and function declaration , function arguments.From there the scope  chain  is initialized and finalyy value of this is determined last
    - exectuion phase:
        * code is intrepreted and executed.
**scope chain:**
    - when function or any code is running  invokes a new execution context is created.
    - Each execution context contains a scope chain.
    - scope chain contains a variable objects(variable access and identifiers) in the execution stack
    - the scope chain works from fourth > third >second and then > first
   `` `
        function first() {
            second();
            function second() {
                third();
                function third() {
                    fourth();
                    function fourth() {
                        // do something
                    }
                }
            }   
        }
        first();

    `` `

**this:**
- `this` refer to object which it belongs to.
- default(method1) , implicit(obj.method1()) , explicit binding(call and apply) and fixed binding

**closures:**
- Accessing variables outside of the immediate lexical scope creates a closure.
- A closure is formed when nested function is defined inside the another function.
- The inner function have access to all variable, arguments in the outer function and creates a encapsulation.

**call,bind and apply and arrow:**
- refer : https://medium.com/@fknussel/making-sense-out-of-context-in-javascript-66fffe4054c9
- call and apply=>Invocating or calling a object method with another object as an argument.
- bind 
    => It copy the whole new function(with the same function body) instead of invoking and context `this` permanently bind to the first argument of apply
    => we can use later at some point of time. 
- arrow 
    => shorter way of writing the functions.
    => They do not bind their own ‘this’ context. Instead, the ‘this’ value of the enclosing context is       used
    => `this` will always refer to same object using fat arrow method.
    => arrow functions do not bind their own ‘arguments’ either.
    => ... rest paramters
    => don’t use arrow functions for methods or constructors

- `exectuion context` refers to scope chain
- A scope chain is a list of memory locations that should be checked (in a particular order) for identifiers (variable, constant and function names) to be resolved to a value
- `invocation context` refer to `this`.



**callback functions:**

- In js,functions are first class objects
- They can be “stored in variables, passed as arguments to functions, created within functions, and          returned from functions”.
- Functions are objects in JavaScript. As objects, functions have methods like call, apply, bind that can    be used to set the this value or to do partial application (bind).
- functional programming specifies the use of functions as arguments
- A callback function is a function which is passed to the another function(say otherFunction) as a          parameter  and the callback function is called (or executed) inside the otherFunction. 
- $('#id').click(function(){})  or [1,2,3].forEach(function(v,i){})
   function exefun(callback){
       console.log("started");
       var data= callback();
       console.log("completed");
   }

   function callback(){
       console.log("Pending")
   }
   exefun(callback)

**function currying:**
- The arguments is passed to a function and return a function which we can pass further arguments 


**Transform-class-properties:**

- https://codeburst.io/use-class-properties-to-clean-up-your-classes-and-react-components-93185879f688

**Promises:**

- Promise is an object which represents the eventual completion of success or failure of an asynchronous operation.


**callback vs promises:**
- Callbacks will never be called before the `completion of the current run of the JavaScript event loop`.
- Promise is parallel execution and callback will wait for the first one to execute and then it will go for the second callback.
- code readablitiy will be good in promises
- erro handling and state(pending , fulfillment and reject) i promise

**Promise example:**

var array = ['sathish555','sathishkumar555',"sathish"];
var fetchData = function (url) {
 return new Promise(function (resolve, reject) {
    fetch(url)
  .then(response => resolve(response.json()))
  });
};

for (var i = 0; i < array.length; i++) {
  fetchData(`https://api.github.com/users/${array[i]}`).then(function (res) {
    console.log(res)
  });
}


**prototype Object**

The prototype object is an object adding the methods and properties to the prototype obje and thus enabling the objects created using constructor function to share the methods and properties to the instance object.

The object which inherits the properties and methods of the other objects is called prototype inheritance.