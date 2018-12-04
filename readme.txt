oops concept:
    abstraction:
        let know the person with having generic data.example(name,dna,shoesize,address,height)

        we have only interested in showing the few details which can able to write the short 
        story about the particular person(name,age ,gender and interests). 
        creating a simple model for more complex model is called abstraction

        function Abstr(name,age,gender){
	this.name=name;
	this.age=age;
	this.gender=gender;
}

        ----------------------------
    instaniation: ( var a=new Abstr("sathish","222","male");)

        the process of creating a object instance  from a class is instaniation

        -------------------------------

JSON:
    Javascript object Notation
        it is similiar to object 
        it should contain only properties,no methods
        it should always have strings

    parse
        convert json string to js object
    stringify
        convert js object to json string
    

APIS:

    browerApi and thirdparty APIS

        browserApis=> DOM,web storage,geo location,audio,video,canvas
        thirdpartyApis=> facebook,twitter,youtube APIS

    browserAPis
        navigator-> for desired geolocation,language and info about the broswer
        window->browser object
        document->display total html

    thirdparty APIS
        google APIS
        nytimes APIS
        passing parameter or accesing thirdparty  url are also called RESTFULL APIS


    webstorage:
        local and session storage for small amount of data to store in browser
        indexedDB will store large amount of data in a  structured way as keys and values


JS Grammar and Types:

        var,let,const
        null will treated as zero in number and false as boolean Eg:null+1 is 1
        undefined + 3 will be NAN
        var is a global variable and let is a blocked scope
        For functions, only the function declaration gets hoisted to the top and not the function expression.





Apis Reference:

        ->slice(start,end) =>
                shallow copy of an array(it will not include end position of an array)
        ->null,undefined,"",NaN,false,0 are "falsy values"
        ->try { monthName =somemethod()},  somemethod(){ if(true){}else{throw "invalid data"}}, catch(e){ geterrormethod(e)}
               finally 
        ->bitwise operator &,|,~  7&9, 7|9, ~7=-8, ~-6=5.(refer https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators)
        -> to check for duplicate : (refer array method.js)
        ->label,continue and break
        ->for in loop  return  string  vs  for of loop return number(refer array_method .js)
                for in ----> enumerable properties, not recommendable for strings and array ,use with objects 
                for of ---->iterable collections,recommended for array and strings,no objects(new )
                for each----> iterate through an array and cant break the loop
                arr.forEach(function(v,k){

                })


        ->passing function as an parameter (refer array method.js)
        -> functions:
                -The function declared in global scope can access global variables
                -The function inside the function can access the parent function within the parent scope and relation to all
                the scope in global scope.
            closure:
                -The inner function is private to the outer function.
                -the inner function can access the arguments and variables of the outer function,
                  while the outer function cannot access the arguments and variables of the  inside function
                 -add5 and add10 are both closures. They share the same function body definition, but store different lexical environments. 
                        In add5's lexical environment, x is 5, while in the lexical environment for add10, x is 10.
                -reference:array_method.js

        ->Rest Parameter:(...Array)
                -(refer array method.js)
                ->arguments vs rest Parameter:
                    //arguments cant use directly inside function and need to 
                    convert as an real array but ...(rest parameter) can be used directly 
        ->map,filter,reduce(fat arrows or arrow function)
                ->var chewToys = puppies.map(puppy => {});   // BUG!
                  var chewToys = puppies.map(puppy => ({})); // ok
        -> rest parameter vs spread operator
                spread expands an array in to elements whereas
                rest parameter collect multiple element and condenses into an array.

        ->to convert object literal
            var d=new String("sathish");
            {0: "s", 1: "a", 2: "t", 3: "h", 4: "i", 5: "s", 6: "h", length: 7, [[PrimitiveValue]]: "sathish"}
        ->decalring array in three ways
                var d= new Array(2,3,3,4);
                var d=  Array(2,3,3,4);
                var d= [2,3,3,4];
    Array methods
        fetch
        push,pop,shift,unshift,slice,splice,reverse,sort,join,split,indexOf,some,every,lastIndexOf,forEach,map,filter,reduce
        ->slice
            -extract a section of an array and return new array and it will not affect the orignal array
            -slice(start,uptoindex)
        ->splice 
            remove and replace an array
            splice(index,count_to_remove,ele1,ele2);
        ->indexOf
                var a = ['a', 'b', 'a', 'b', 'a'];
                console.log(a.indexOf('b', 2)); // logs 3
                "aa".indexOf("a",1)


        ->maps objects replacing objects  and sets replacing array
            Maps:
                var a=new Map();
                - Maps is a key value pair used for iteration
                -for of is used to iterate maps keys and values
                var sayings = new Map();
                sayings.set('dog', 'woof');
            sets:
                var d= new Set();
                    var mySet = new Set();
                    mySet.add(1);
                    mySet.add('some text');
                    mySet.add('foo');
                set can convert to array using Array.from(d) || [...new Set(d)]
                
            refer for map and sets: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Keyed_Collections
    Objects:
            -object consists of several variables and datatypes which are known as properties and methods.
            -a property name that has a space or a hyphen, or that starts with a number can 
                only be accessed using the square bracket notation.
            -you can declare using myobject['']="null keys with value"  || myobject[' ']=" empty key"
            -to check keys exist or not you can use 
                Object.Keys() or object.hasOwnProperty('ee');
            -to list or transverse the object use for in,  Object.Keys(),Object.getOwnPropertyNames(o)
        using constructor:
            -object can be created using 
                1)object literal
                2)using constructor
                3)Object.create();
             Note:refer array method.js
    oojs:
        Inheritance:
            prototype:
                -Each object has a private property which holds a link to another object called its prototype
                - By definition, null has no prototype, and acts as the final link in this prototype chain
                -refer: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
                        title:Using the Object.create method
                -primitives types are refered by values where array and object are refered by reference
                        var fruit = {name: 'apple'};
                        var fruitbear = fruit;
                        fruit == fruitbear; // return true
                        fruit === fruitbear;//true
                        fruit.name="orange;"
                        console.log(fruitbear)  //{name:'orange'}
                -generators

        ABSTRACTION:
                There are lots of things you could know about a person
                (their address, height, shoe size, DNA profile,
                passport number, significant personality traits ...) ,
                but in this case we are only interested in showing their name,
                age, gender, and interests, and we also want to be able to write 
                a short introduction about them based on this data, and get
                them to say hello. This is known as abstraction — creating a simple model of
                a more complex thing, which represents its most important aspects in a way that is easy to work with for our program's purposes.

        INSTANTIATION:
            creating instance from the class or a template.

        constructors and OBJECT  PROTOTYPE: 
            https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes
            -js is often described as an prototype based language.
            -each object has as prototype object.
            -JavaScript is often described as a prototype-based language — each object has a prototype
             object, which acts as a template object that it inherits methods and properties from.
              An object's prototype object may also have a prototype object, which it inherits methods
               and properties from, and so on. This is often referred to as a PROTOTYPE CHAIN, 
            -Well, to be exact, the properties and methods are defined on the prototype property on the Objects'
             constructor functions, not the object instances themselves.
             -The answer is that the inherited ones are the ones defined on the prototype property 
             (you could call it a sub-namespace) — that is, the ones that begin with Object.prototype.,
              and not the ones that begin with just Object. The prototype property's value is an object,
               which is basically a bucket for storing properties and methods that we want to be inherited by 
               objects further down the prototype chain.
            -the one which begins with Object.prototype is inherited
            - Object.prototype.watch(), Object.prototype.valueOf(),
            -Object.is(), Object.keys(), and other members not defined inside the prototype bucket are 
             not inherited by object instances or object types that inherit from Object.prototype.
            -function Emp(name,age,dep,other){
                    this.name=name;
                    this.age=age;
                    this.dep=dep;
                    this.other=other;
                    this.convertCase=function(name){
                        console.log(name.toUpperCase())
	                }
            }

            var emp1 = new Emp('Bob', 'Smith', 32, 'male', ['music', 'skiing']);
            var emp2 = new Emp('Bob', 'Smith', 32, 'male', ['music', 'skiing']);
            var emp3 = new Emp('Bob', 'Smith', 32, 'male', ['music', 'skiing']);

            emp1. {{check}}
            
            check refers to
            -check for valueOf() which is object instance prototype object
            -checks for Emp constructor prototype object
            -Object.prototype of Emp will be common to all object instance(emp1,emp2,emp3)

             var emp4 = new emp1.constructor('Karen', 'Stephenson', 26, 'female', ['playing drums', 'mountain climbing']);
            -t can be really useful when you want to create a new instance and don't have a reference
             to the original constructor easily available for some reason.


         INHERITANCE:
                -declare only  properties inside the method
            -how to inherit object from one to another.
            step1: -function Person(first, last, age, gender, interests) {
                        this.name = {
                            first,
                            last
                        };
                        this.age = age;
                        this.gender = gender;
                        this.interests = interests;
                };
            -keep only properties inside the contructor function.
            -declare all methods on contructors prototype property.
            step2: -function Teacher(first, last, age, gender, interests,subject){
                        Person.call(this,first,last,age,gender,interests);
                        this.subject=subject;
            }

            if there are no parameters from parent then,
                function Brick(){
                    this.width=10;
                    this.height=20;
                }
                function RedGlassBrick(){
                    Brick.call(this);
                    this.opacity=0.5;
                }

            step3: to inherit prototypes of parent-Person
                Teacher.prototype = Object.create(Person.prototype);

            step4: Teacher.prototype.constructor will display parent contructor,to show child instance do below code,
                Teacher.prototype.constructor = Teacher;

            you can overwrite the greeting method based on construtor usage,
                Teacher.prototype.greeting=function(){
		            alert('user welcoming you' + this.clientName + '.');
                }
            step5:
                  var teacher1 = new Teacher('Dave', 'Griffiths', 31, 'male', ['football', 'cookery'], 'mathematics');
        3 KEY NOTES:
            1)USING e.g. var myInstance = new myConstructor()). to access inside the constructor.
            2)hat are available only on the constructor. These are commonly only available on built-in browser objects,
                eg:Object.keys().
            3)cons.prototype.greeting()


        when to use Inheritance:

            In terms of using inheritance in your own code, you probably won't use it often, 
            especially to begin with, and in small projects. It is a waste of time to use objects and
            inheritance just for the sake of it when you don't need them. But as your code bases get larger,
            you are more likely to find a need for it. If you find yourself starting to create a number of
            objects that have similar features, then creating a generic object type to contain all the shared functionality 
            and inheriting those features in more specialized object types can be convenient and useful.
        JSON:
            -JSON is purely a data format — it contains only properties, no methods.
            JSON requires double quotes to be used around strings and property names. Single quotes are not valid.

    CLIENT SIDE WEB APIS:
         
        API->Application programming interfaces
             The key difference between a library and a framework is “Inversion of Control”.
             When calling a method from a library, the developer is in control.
             With a framework, the control is inverted: the framework calls the developer's code.
        browser Api:
            - DOM, ajax request(fetch,xmlhttprequest),graphics(canvas,webgl),audio and video Apis,storage apis
        third party apis:
            -twitter,google,facebook apis


        DOM manipulation:
            Document.querySelector:
                to select the class
                    -//document.querySelector('.main-header')
                to select the Id
                    -//document.querySelector('#main-header')
            Document.createTextNode("string"):
            document.createElement("p"); 
            sect.appendChild(para);
            sect.removeChild(linkPara); 
            para.style.color = 'white';->to write css
            setAttribute("class","classname")
            fetch:
                - .then() method chained onto the end of fetch() — this method is a part of Promises, 
              a modern JavaScript feature for performing asynchronous operations.

            Third party apis- google maps
            restfull apis->newyork times

        Storgae APIS:
        -web storage
        -indexedDB
        -Cache Api( Cache is usually used in combination with the Service Worker API)

            - +0 == -0 true(only for 0 in numbers)
            - +0 === -0 true(only for 0 in numbers)
        -ParseInt - will convert binary also ParseInt("101010","2");
        -null == undefined ->true
        -null === undefined ->false  ( null is object and undefined is undefined)
        -false, 0, empty strings (""), NaN, null, and undefined all become false.
                to check use boolean(i/p).
        Four Equality Algorithm:
            -(==)-> abstract equality comparison 
            -(===)->Strict Equality comparison( Array.prototype.indexOf, Array.prototype.lastIndexOf,casematching)
            -SameValueZero:->(string.prototype.includes)
            -SameValue->
        value-comparison operations:
            -strict equality  ===
            -loose equality ==
            -Object.is()

--------------------------------------------------References:-------------------------------------------------------------------

------Built in Objects--------
    Array:
        var fruits=["Apple", "Banana", "orange", "fig", "mango", "grapes"]
            -fruits.length
            -fruits.forEach  -to iterate an array
            -fruits.pop,push,shift,unshift,splice,slice
            -Array.from()
                ex:Array.from(obj).map(mapFn, thisArg),
                (refer: reference.js)

            -Array.isArray(fruits)- to find the input is an array or not
            -Array.of(7)  => [7] Array.of(1, 2, 3); // [1, 2, 3]
            -array1.concat(array2); =>it will change original array if update
                ( refer: reference.js)
            -fruits.copyWithin(target,start,end)=> The copyWithin() method shallow copies part of an array to another location
             in the same array and returns it, without modifying its size. ( refer: reference.js)
            -entries => ( refer: reference.js)
            -for in (vs) for of (vs) for each ((refer: reference.js))
                for In:
                    -It not used to iterate elements of an collection rather used to 
                     iterate properties of objects. 

                for Of:
                    -for of is a new way for iterating collections

                for each:
                    -foreach is available only for looping arrays
                    -The callback can access both index and value of the array elements.
            -array1.every(isBelowThreshold) =>to check all array elemnts statisfies the condition( refer: reference.js)
            - array1.fill(value,startposi,endposition);
                    (6) [1, 2, 333, "sathish", "kumar", 12]
                    arr.fill(11,3)
                    (6) [1, 2, 333, 11, 11, 11]
            -array1.filter((v,i,ara)=>e)
              https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
            -


GIT:
steps to create new branch
    edit in .git config file
    git checkout -b dev-ssr
    git push --set-upstream origin dev-ssr
    login and push


Interview Questions:

1)const a=10;
    a=11; // reassign wont work,will throw an error// Uncaught TypeError: Assignment to constant variable.
        d={a: "doccc", b: "ballll"} => it wont work
    
2)let c=10;
    below all will work
        c=11; 
        let d={a: "doc", b: "ball"};
        d.a="doccc";
        d={a: "doccc", b: "ballll"}
    reassign for primitive and reference it will work.

3)Object.freeze(objname)
4) to make a object Copy:(Object.assign)
    method1:
        var obj1=Object.assign({},obj1,obj2);  //deep clone
    method2:
        var obj={name: "sathish", age: "222", gender: "male"};
        var obj2={...obj};
5)pure and impure functions/Component
    refer(https://medium.com/@jamesjefferyuk/javascript-what-are-pure-functions-4d4d5392d49c)
    pure function:
        -it will not depend on ouside variables
        -immutable,no sideeffects(network call,input and ouput,changing the orignal value)
        -  The function always returns the same result if the same arguments are passed in.
        -It does not depend on any state, or data, change during a program’s execution.
        -It must only depend on its input arguments.
        -One of the major benefits of using pure functions is they are immediately testable.
         They will always produce the same result if you pass in the same arguments.

    impure function:
        -mutable,network call,input and output occurs
        -depends on external variable
    pure Component:
        -component will render the same children with the same props.stateless
    impure Component:
        -statefull
  

6)unit testing/scss
7)how many ways to create Object.
    -object literal
    -var d=Object.create(obj);
        -to fetch d.__proto__.objkey
        -Object.create(null) --- to end up the prototype chain
    -var d= new(name,age,dep);
            the newly created object inherits from constructor prototype
8)new in constructor
          -var d= new(name,age,dep);
            -the newly created object inherits from constructor prototype
            -create instance and assign to the particular variable
9)let and var and const
    var-function scoping
    const and let- block level scoping
10)flux vs reduxx
    -single store redux  --  multi store flux
11)store
        const store=creteStore();
        store.getState();
        store.subscribe();
        store.dispatch();

        store.dispatch(incrementCount({incrementBy:5}))
 three principles that Redux:
 1)single source of truth-e state of the entire application is stored in an object/ state tree within a single store. 
 2)pure component- Changes are made with pure functions: 
 3)state is read only - it can be only updated with the help of actions
 
12) connect in redux =>HOC
        -A higher-order component in React is a pattern used to share common functionality 
         between components without repeating code.
         - It transforms a component into another component and adds additional data or functionality.

13)stateless and state components
          state and stateless:
        stateless:
            -props are received from a parent component and it is read only.
            -immutable
        state:
            -state is mutable and it will a props to the children

14)singleton and multiple
15) arrow method and why
            Two factors influenced the introduction of arrow functions: shorter functions and non-binding of this.
Lifecycles:::----------
    refer(http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
    Mounting: constructor ->componentWillMount-> render -> componentDidMount->render
            i)render:
                -It is only the mandatory component inside the react  sub class component.
                -make component pure so it doesnt pollute the component
            ii)Constructor:
                -If dont initailize state or binding the  methods dont use constructor.
                -If you are using construtor,super is mandatory super()
                -if you r using props in constructor then use super(props)
                -Constructor is the only place where you should assign this.state directly.
                     In all other methods, you need to use this.setState() instead.
            iii)componentDidMount:
                -it will call immediately after the  render.propbably used for remote endpoint
                -This method is a good place to set up any subscriptions
            iv)componentDidUpdate(prevProps, prevState, snapshot):
                    -if we use getSnapshotBeforeUpdate(),then it will passed as a third parameter to the snapshot
                    -componentDidUpdate() is invoked immediately after updating occurs.
                     This method is not called for the initial render.
                    -
            

V)shouldComponentUpdate(nextProps, nextState): ---> by default it will return true
                    -componentDidUpdate() will not be invoked if shouldComponentUpdate() returns false.
                    -render will not be invoked if shouldComponentUpdate() returns false.
                    -componentWillUpdate will not be invoked if shouldComponentUpdate() returns false.
Vi)static getDerivedStateFromProps(props, state): ===> replacement for componentwillreceiveprops
        -It derives as, update in state when there is change in props
        -to avoid using this
            1)use componentDidUpdate lifecycle instead.
            2) use a memoization helper instead.(pure component)
                https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#what-about-memoization
            3)use fully controlled(email input in stateless function as child) or uncontrolled component
vii)getSnapshotBeforeUpdate(prevProps, prevState):
           - getSnapshotBeforeUpdate() is invoked right before the most recently rendered 
                output is committed to e.g. the DOM. 
            -scroll position and take

controlled vs uncontrolled: =>it referms to form inputs
        controlled:
            -It is controlled by parent and data passed in props always controlled.
        uncontrolled:
            -Data that exists only in internal state can be thought of as uncontrolled (because the parent can’t directly change it).
Error boundaries:
            componentDidCatch(error, info): for error handling
            -these are react components  that catch js errors in child components,
            eg:https://codepen.io/gaearon/pen/wqvxGa?editors=0010

--------------------------------------
18)opt group
        <select>
            <optgroup label="Swedish Cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
            </optgroup>
            <optgroup label="German Cars">
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </optgroup>
        </select>

19)prototype
20)position and relative
21)this.setState((prevState,2nd argument)=> ({ }))

//or
        // Correct
        this.setState((prevState, props) => ({
        counter: prevState.counter + props.increment
        }));

//or    // Correct
        this.setState((prevState,props)=>{
            return{
                counter: prevState.counter + props.increment
            }
        },()=>{ this.methodName();})   // callback

//or   // Correct  =>short method
    this.setState((prevState,props)=>({
            counter:prevState.counter +1

        }),()=>{this.getData()})      

//or not prefered method

handleMonthChange_next = () => {
    this.setState({
        currentMonth: +this.state.currentMonth + 1
    }, () => {
     this.props.getCalendarData(this.state.currentMonth)
    })
}

22)parseInt("0xFFFFF").toString(10)  =>hexa to octa

23)a=(new Array("test",1,2,3,-1,-2,-3,0xFFFFF)).sort()
(8) [-1, -2, -3, 1, 1048575, 2, 3, "test"]


scope and context in js

        -Scope pertains to the visibility of variables,
            var color=red;    function test(){ return color;}  //red
        -context refers to the object to which a function belongs.
            Context is most often determined by how a function is invoked.
            var obj1 = { name:"sathish",  foo: function() {   return this.name; }};
            var obj2 = { name:"kumar", doo: function() {   return this.name; }};
            obj1.foo();    //sathish 
            obj1.foo.apply(obj2) ;   //kumar 
             

fragment:
        -Fragments let you group a list of children without adding extra nodes to the DOM.
            to avoid adding div to td , we can use fragments.
            -<React.Fragment></React.Fragment>  or  <></>
        eg:https://codepen.io/reactjs/pen/VrEbjE?editors=1000

promises: Refer(playground/basic.js):
        -The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.
        -This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value,
        the asynchronous method returns a promise to supply the value at some point in the future.

        It have three states:
            -pending
            -fullfilled
            -rejected
        Methods:
            Promise.resolve() and Promise.reject()
            Promise.all() and Promise.race()
        Properties:
            Promise.prototype.catch(onRejected)
            Promise.prototype.then(onFulfilled, onRejected)
            Promise.prototype.finally(onFinally)

        -A pending promise can either be fulfilled with a value, or rejected with a reason (error). 

        -Promise.resolve() and Promise.reject() are shortcuts to manually create an already resolved or rejected promise respectively. This can be useful at times.
        Promise.all() and Promise.race() are two composition tools for running asynchronous operations in parallel.
            Syantax:
                new Promise( /* executor */ function(resolve, reject) { ... } );
                    var promi1= new Promise((resolve,reject)=>{
                    return resolve("someValue")
                })

React 16:

context APi:

It consist of 

const {Provider,Consumer}=React.createContext();

<Provider value={this.state}>
</Provider>

<Consumer>
    {(user)=>(
        <p>{user.name}</p>
    )}
</Consumer>

React render props:

The term “render prop” refers to a simple technique for sharing code between React components using a prop whose value is a function.

A component with a render prop takes a function that returns a React element and calls it instead of implementing its own render logic.






ES6:

babel transpiler -take some code and convert to other code like es6 to es5 using babel

store and router revise before interview.

let,const
rest
spread
find
findindex
destructing
arrow
string literals
includes
import,export,
class


//header,footer,nav,main,aside,content,article
