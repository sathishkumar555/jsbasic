**Weird Javascript:**
  
- syntax parsers -> it checks for code base is correct or not
- lexical environment -> where something sits phsically in the code you write
- execution contexts--to check which lexical env is currently running (creation phase)
- compliers->converting the code to machine understanding
- Name-value or key-value pair in objects

**execution context is created in Two Phase:**
- creation phase =>(this,globalObject(window),outer environment,hoisting(ourcode)) and it allocate memory
- execution phase=> use that memory,parse,compile

**Hoisting:**
- ***setup memory space for variables and functions is hoisting***

- when code start executing it runs in global execution context  consist of `global object(window)` and     `this` and When you  r inside the function the `outer environment` will be created.

- at global level, `GlobalObject(window) === 'this'`

- Javascript is  Single threaded and Sychronous in its execution
    - Single threaded:
        - one command at a time.
    - Sychronous:
        -  execeute one at a time in order
- In global execution context, when we invoke(call) the function it will create one more execution context.(stack event)
    refer:`function invoke execu context.png`

**Functions ,contextand variable enviromnent:**

- when global execution context get created , each function will create one execution context and variables called inside function dont have declartion then it will go for global exceution context variable.
- when execution context is created , the reference is created in  the  outer  environment and it check the stack to find the reference till it reaches the global execution environment.

**scope,let:**

- scope => where the variable is available in your code.

**Asynchronous callbacks:**(1)example of event queue in weird_js.js)

- Eventqueue:handles async callbacks, in browser it have( js engine,http,render engine)
- Refer js_engine.png in weirdjs/js_engine.png
- once event stack is empty then it will look fr event queue.


**Types and operators:**

- *Static typing* => bool isNew="sas"  //error(other programming language)
- *Dynamic typing* =>but in js , the js engine will take care of managing the data types.
- *Primitive types* => string,bool,number(floating point number),null, undefined ,symbol(es6) =>a single      value
- *operators* =>special functions that differently written 

    * +3 4 => prefix notation
    * 3 +4 => infix notation
    * 3 4+->postfix notation

- *Operator predcedence* => which operator called first  and its function ,so it called in and the higher                               precedence wins
                        =>  Associativity come in action if both operators are same

- *coercion* => converting a value from one type to another.(1 + "2")
- *comparison Operaators* => `null==0 =>false  null<1 =>true     + 0 === -0` and always use `===`(refer                                  Equality compareness and sameness)
        (refer)[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness]
- *Existence and booleans* =>  0,null,'', =>false
- *Default values* =>  name= name || "Enter your name"  (name may be undefined ,null,"")

**Objects and functions**:

- Objects: it consist of primitive property,Object property,Function methods (Name-value pairs),
- you can create Objects using
    - using new=> Var a= new Object();
    - using {} =>  object literal
- Faking NameSpaces: => a container for variables and functions `var obj={};` (here  obj is namespace)
- JSON
- Functions are special type of Objects.
        -primitie,object,other functions,code,anoynmous func.
- *By value and By  Referencce*
    - primitive pass by value =>points to different memory or address  
        - `var a=5; b=a;` refer image
    - objects pass by reference=>points to the same memory or address
         - `var a={}; b=a;` refer image

- *this*
    - when the `code` inside the function is executed in execution context, it have 
        - variable environmnent  <=> this <=> outer environment(which have refrence or looks for a variable).
        - if value is primitive then it is property
        - if value is function then it is method.

- *Arrays*
    - holds multiple data types.

- *Arguments and spread*

    - variable environmnent  <=> this <=> outer environment(which have refrence or looks for a variable)
        <=>arguments(contains all parameters passed into functions)

- *syntax parsers and automatic semicolon insertion:*

     - it will automatically return a break and it will cause an error

- *IIFE(Immediately Invoking function expressions)*

    - It will will be immediately invoked in a page.
    - while loading it will create a function object in the global execution context ,then it will           be invoked immediately in the new execution context,so it wont have reference to other objects.
    - if required to access global object,then pass window object as a parameter or ue this directly         inside a function.
- *closures and callbacks*:
    - A function inside an function, which will have a scope reference in the outer environment.
    - it keeps a scope in a memory.
    - it look for a variable  in outer variable environ by a scope chain and find the reference.
    - callback- i call the funtion, it callbacks the function you gave when it finishes.
- *call,bind and apply:*
    - all methods have to acces using `this` keyword
    - bind creates a copy of the function
    - call executes a  function as an invidual arguments.
    - apply executes a function as an array of arguments.
    - func currying =>creating a copy of functons but with some preset parameters.

- *Functional programming:*
    - first class functions  are that  behave as an object (function objects).
    - underscore.js and lodash

**Object Oriented javascript and prototypal inheritance:**

- *Inheritance*
    - one object get access to the properties and method of the another object.
    - *classical Inheritnace:* used in c# and java for sharing methods and properties.
    - *Prototypal Inheritance:* => simple,fexible,extensible and easy to understand.

- *understand of prototype:*
    -  A object (obj) have properties and methods.
    -  Js engine will have  hidden properties and methods
    -  A property which will have reference to other object is Proto{}.
    -  All objects have prototype property,and each prototype obj will have another proto object.
    -  if obj ref is not found it will check for proto object reference and it is called prototype chain. 
- *Reflection and extend:*
    - Reflection=> A JavaScript object has the ability to look at its own properties and methods.
    - Extend => 

- Building Objects:
    - *constructors and new:*
        - creating or construting  an object using an normal function is called constructor.
        - `new` keyword will create an empty object of Person{} and invoke Person function
        - `this`  in constructor function will point to a newly created object.
    - dont use array  for `for in` as it will get the name and value pair of  prototype object also.
    - *Object.create(pure prototypal inheritance):*
        - create a new Object that  will be a base for others.
        - use them with Object.create() to override the values whichever you want to be.
        - create an prototype object for other obj to use.

    - *Es6 and classes:*
        - class is an object.
        - extends will be use for prototype inheritance(sets __proto__)
        - super will call the constructor of parent.

**odds and ends:**  

 - *typeOf and instanceOf:*
 - *strict mode:* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode- 

 **Method chaining:**

- calling one method after another and each method affect the parent object 

**To create a library:**
*Requirements: GREETR*
- Reusable library.
- support english and spanish
- to give fname,lname,optional language => it generates formal and informal greetings.
- to support jquery
- G$() for method.

**transpile es6 typescript:**
- converting the syntax of one programming lang to other
- Traceur-->transpiler
- http://www.typescriptlang.org/Playground
- For more on Traceur head to: https://github.com/google/traceur-compiler
- and try out writing ES6 code in Traceur in your browser here:                                              https://google.github.io/traceur-compiler/demo/repl.html#
- es6  https://github.com/lukehoban/es6features
