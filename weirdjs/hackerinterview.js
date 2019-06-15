console.log("Hacker questions")

// 1)~~~

var x= 500;

let y,z,p,q;
q=200;
if(true){
    x=y=z=p=q;
    console.log(q,x,y,z,p)
}

// 2)~~~
console.log("one");
setTimeout(function(){
 console.log("two");
},0)
Promise.resolve().then(function(){
console.log("three");

})
console.log("four");


// 3)~~~

// 4)~~~
console.log( typeof("" ||  null || undefined) , undefined == null, 0 =="");

// 5)

(function foo(){
    bar();
    function bar() {
        abc();
        console.log(typeof abc);
    }
    function abc() {
        console.log(typeof bar);
    }   
    }());

    //6)

    const obj={a:"apple"};
    console.log(obj.a);  // apple
    obj.a="app";
    console.log(obj.a);  // app
    // obj={a:"again apple"}
    console.log(obj.a); // Type error

    //7)
    var objj ={
        key1:1,
        key2:2,
        key3:3
    };

    delete objj.key1;
    objj.key2= undefined;
    objj.key3= null;

    for(var i in objj){
        console.log(`${i} is ${objj[i]}`)
        if(objj.hasOwnProperty(i)){
            console.log(`${i} is ${objj[i]}`)
        }
    }
    // hasOwnProperty  will check only the own objects 
    //this method does not check for a property in the object's prototype chain.
    console.log(objj)

// 8)
var o={
    prop1:"DAH2"
};
var myFunc = function(){
    console.log("Hi there", this);
}

myFunc();

o.myMeth=myFunc;
o.myMeth();

// 9)

// for(let i=1;i<=5 ;i++)
// {
//     setTimeout(()=>{
//         console.log(i)
//     },i * 500);
// }

// [1,2,3,4,5].forEach(i=>{
//     setTimeout(()=>{
//         console.log(i)
//     },i*500);
// }
// )


//10)
var dumobj={
    pri:199,
    get_pri:function(){
        return this.pri;
    }
}

var oriObj= Object.create(dumobj);
oriObj.pri=299;
console.log(oriObj);
delete oriObj.pri;
console.log(dumobj.get_pri());

// 11)

function Test1(cname){
    let b = cname;
    Test2();
    let c;
    function Test2(){
        let c= "singapore";
        console.log("continent",cname);
    }
    console.log("country:",b,c);
}

Test1('Asia');

// 12)
var dumobj={
    pri:199,
    get_pri:()=>{
        return this.pri;
    }
}
console.log(dumobj.get_pri());

var oriObj= Object.create(dumobj);
oriObj.pri=299;
delete oriObj.pri;

console.log(oriObj.get_pri());
// this will be global object in fat arrow method 

// 13)
(function(){
    var greet = "Hello world";
    var toGreet = [].filter.call(greet , function(e,i,arr){
        return i > 5;
    })
    console.log(toGreet);
})()


//14)
function aa(){
    return
    "Hello aa"
}

console.log(aa());

// 15)

// var func = function func(params) {
//     console.log(foo === foo)
// };

// foo();

// 16)

