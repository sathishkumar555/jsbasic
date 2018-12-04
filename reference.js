//Array.from(i/p)

        var c=Array.from('foo'); 
        console.log(c);
        var num=Array.from([1,2,3,4],x=>x*5);

        //IN set

        var s = new Set(['foo', window]); 
        Array.from(s);  //or // [...new Set(['foo', window])]; 

        //IN Map
                        //[k,v] 
        var m = new Map([[1, 2], [2, 4], [4, 8]]);
        Array.from(m); 

        console.log(num);

        //using function 

        function f(...a){ 
            return Array.from(a)    //  a or arguments
        }
        f(1,2,3)
        
        Array.from({length: 5}, (v, i) => i);

//Array concat

        var num1 = [1, 2, 3],
        num2 = [4, 5, 6],
        num3 = [7, 8, 9];

        var nums = num1.concat(num2, num3);

        console.log(nums);
        
//array.copyWithin
        var fruits=["Apple", "Banana", "orange", "fig", "mango", "grapes"]
        var fr=fruits.copyWithin(2,1)
       // o/p ["Apple", "Banana", "Banana", "orange", "fig", "mango"]

//-for in (vs) for of (vs) for each

         let list = [4, 5, 6];
         for(var i in list){ console.log(i)} // will display or inspect object properties 0,1,2

         for(var i of list){ console.log(i)}  //will display collections 4,5,6

         list.forEach((v,i)=>{ console.log(v);console.log(i) }) // can iterate keys and values
         

//entries
        var a = ['a', 'b', 'c'];
        var iterator = a.entries();

        for (let e of iterator) {
        console.log(e);
        }

//every

        var array1 = [1, 30, 39, 29, 10, 13];
        array1.every((currval,index,array)=>{  console.log(currval); console.log(index);  console.log(array); return currval <=39})
//rev the string


function reverse(str){
  var rtnStr = '';
  for(var i = str.length-1; i>=0;i--){
    rtnStr +=str[i];
  }
  return rtnStr;
}

console.log(reverse('you are a nice dude'));


//sapient

//1)
function test1(){

        console.log(a);  // undefined
        var a =20;
    }
    
    test1();   
    
    test2();
    
    var test2 = function(){
    
        var b = 20;
        console.log(b);   //Uncaught TypeError: test2 is not a function
    }

    //2)

    var obj1 = {   // parent

	name: 'hello',
	get_name(){
		return this.name;
        }
};

var obj2 = Object.create(obj1); //child

obj2.name = 'newHello';

delete obj2.name;
console.log(obj2.name);  //hello
console.log(obj2.get_name());  //hello

//if you update  obj2 instance name with __proto__ eg: obj2.__proto__.name="change in name",
// then ,it will update the obj1 name value with "change in value"

//if you update obj2.__proto__.e="ele" here e is new variable,
// it will update in Obj1 also because it will make a reference

//obj2 is the proto object of object1
//if u create obj1 with new property, it will update in obj2

// pure function
function changeAgePure(person) {
        var newPersonObj = JSON.parse(JSON.stringify(person));  // or
        // var newPersonObj = Object.assign({},person);

        newPersonObj.age = 25;
        return newPersonObj;
    }
    var alex = {
        name: 'Alex',
        age: 30
    };
    var alexChanged = changeAgePure(alex);
    console.log(alex); // -> { name: 'Alex', age: 30 }
    console.log(alexChanged); // -> { name: 'Alex', age: 25 } 


 
// Impure function
    function changeAgeImpure(person) {
        person.age = 25;
        return person;
    }
    var alex = {
        name: 'Alex',
        age: 30
    };
    var changedAlex = changeAgeImpure(alex);
    console.log(alex); // -> { name: 'Alex', age: 25 }
    console.log(changedAlex); // -> { name: 'Alex', age: 25 }



//     Once we reassign person to a new object, it stops affecting the original.
// person has a new reference because it was reassigned but this reassignment doesn’t change personObj1.


function changeAgeAndReference(person) {
        person.age = 25;
        person = {
            name: 'John',
            age: 50
        };
        
        return person;
    }
    var personObj1 = {
        name: 'Alex',
        age: 30
    };
    var personObj2 = changeAgeAndReference(personObj1);   
    console.log(personObj1); // {name: "Alex", age: 25}
    console.log(personObj2); // {name: "John", age: 50}


//     Object Equality

// it compares whether two objects are referring to the same location in memory.
// take the keys by 
   var cheObj= Object.getOwnPropertyNames(alex) === Object.getOwnPropertyNames(changedAlex);
   console.log(cheObj)



//    this


function getMenu(){
	return this;
}

var devMenu={menu:"briyani"};

getMenu.call(devMenu)

var forDev=getMenu.bind(devMenu);
forDev(); //
