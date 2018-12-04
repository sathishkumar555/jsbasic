var arr = [1, 2, 3, 4, 5];

//to find a number in arr based on k
function findNumber(arr, k) {
    console.log(arr);
    console.log(k);
    var a = arr.indexOf(k);
    if (a >= 0) { return 'YES' } else { return 'NO' }

}
findNumber(arr, 4);


//to find min and max in an array
function miniMaxSum(arr) {

    var da = [];
    for (var i = 0; i < arr.length; i++) {
        da.push(arr.reduce((accumulator, currentValue) => (accumulator + currentValue)) - arr[i])
    }
    var min = da.reduce(function (a, b) {
        return Math.min(a, b);
    });
    var max = da.reduce(function (a, b) {
        return Math.max(a, b);
    });

    var out = min + " " + max;
    console.log(out);

}

miniMaxSum(arr)

//to find the largest candles count in an array

function birthdayCakeCandles(n, ar) {

    var d = Math.max(...ar);

    var out = 0;
    for (var i = 0; i < n; i++) {

        if (ar[i] == d) {
            out = out + 1;
        }
    }
    return out;

}

//to print nearest multiple of 5


function solve(grades) {
    // Complete this function
    var a = [];
    for (var i = 0; i < grades.length; i++) {
        if (grades[i] % 5 != 0 && grades[i] >= 38) {
            var d = -(((grades[i] % 5) - 5) - (grades[i]));
            d = (d - grades[i] < 3) ? d : grades[i];
            a.push(d)

        } else {
            a.push(grades[i])
        }
    }
    return a

}



//binary gap between numbers

function solution(N) {
    var d = N.toString(2);
    var arr = d.split('1');
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].length;
    }
    var out = Math.max(...arr);
}
var aa = 20;
solution(aa);


//to find unique in an array


function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

// usage example:
var a = ['a', 1, 'a', 2, '1'];
var unique = a.filter(onlyUnique); // returns ['a', 1, 2, '1']




//passing function as an parameter

function map(f, numbers) {
    var result = [];
    for (var i = 0; i < numbers.length; i++) {
        result[i] = f(numbers[i])
    } return result
};
var f = function (x) { return x * x * x };
 var numbers = [1, 2, 3, 4, 5]; 
 var cube = map(f, numbers); console.log(cube);


// to find duplicate in an array

var aa=[2,3,5,6,7,8,9,2,1,2];
[...new Set(aa)]


//to do a factorial

function factorial(n){
    if(n==0 || n==1){ return 1 }else{  return n*factorial(n-1)}
}

factorial(4);


////////////////////// functions ///////////////////////////////////////
var foo = function bar(n) {
    // you can do recursive method using below types
    // bar();
    // foo();
    // arguments.callee;
   if(n >=10) return ;

   console.log(n);
   arguments.callee(n+1)
 };
 foo(0);


 //--------------rest Parameter(...theargs)-------------

 function multiply(multiplier, ...theArgs) {
    return theArgs.map(x => multiplier * x);
  }
  
  var arr = multiply(2, 1, 2, 3);
  console.log(arr); // [2, 4, 6]


  //----------destructing function--------

  var [l,m,n,o,p,q]=[111,222,333,444,555,666,777];
  console.log( l+""+""+m+""+n+""+o+""+p+""+q);

  //-------in operator------------
  var mycar = { make: 'Honda', model: 'Accord', year: 1998 };
  var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
  
  console.log('make' in mycar );
  console.log('2' in trees );
  

//slicing array on based on length
var cats = ['Dusty', 'Misty', 'Twiggy'];
console.log(cats.length); // 3

cats.length = 2;
console.log(cats); // logs "Dusty, Misty" - Twiggy has been removed

// creating objects using object literal, constructor function,object create,new Object({})
function Person(name,age,dep,other){
    this.name=name;
    this.age=age;
    this.dep=dep;
    this.other=other;
}

function Otherfun(city,country){
    this.city=city;
    this.country=country;
}


var user1=new Person('sathish',26,'ece');
var user2=new Person('sridhar',23,'ece');
var user3=new Person('testuser',24,'eee');
var extraInfo= new Otherfun('chennai','india');
var user4=new Person('testuser',24,'eee',extraInfo);



console.log(user1);



var person1 = new Object({
    name: 'Chris',
    age: 38,
    greeting: function() {
      alert('Hi! I\'m ' + this.name + '.');
    }
  });  
  //or
  var person2={
    name: 'Chrssis',
    age: 38,
    greeting: function() {
      alert('Hi! I\'m ' + this.name + '.');
    }
  }

  var newPerson1=Object.create(person1);
  var newPerson2=Object.create(person2);
  debugger
  

//   Closure:
        //example 1
        function funA(a){
            console.log(a)
            function funB(b){
            console.log(b)
            }
            return funB;
        }
        var funOut=funA(5);
        funOut(10); 
        //or  
        var funOut=funA(5)(10);
            

        // example2

        function funAA(a){
                var name="sathish";
                console.log(a);
            return function(b){
                console.log(name);
                console.log(a+b);
                
            }
        }

        var add5=funAA(5);
        var add10=funAA(10);

        console.log(add5(11));
        console.log(add10(12));

        

// for in
var object1 = {a: 1, b: 2, c: 3};


for (var d in object1){
	console.log(object1[d])
}

//for of
var iterablee="saskkkkksdfsdf"; //or 
let iterable = [10, 20, 30];

for(let eee of iterablee){
	console.log(eee)
}



// forEach

arr.forEach(function(v,i,arr){
	console.log(i)
})