// Es6 features:

// 4)Array.flat

let multi = [1,2,3,[4,5,6,[7,8,9,[10,11,12]]]];
multi.flat();               // [1,2,3,4,5,6,Array(4)]
multi.flat().flat();        // [1,2,3,4,5,6,7,8,9,Array(3)]
multi.flat().flat().flat(); // [1,2,3,4,5,6,7,8,9,10,11,12]
multi.flat(Infinity);       // [1,2,3,4,5,6,7,8,9,10,11,12]


// 5)Array.flatMap
const array=[1,2,3,4,5];
array.flatMap(v => [v, v * 2]);
[1, 2, 2, 4, 3, 6, 4, 8, 5, 10]

// 6)Obj fromentries

let obj = { apple : 10, orange : 20, banana : 30 };
let entries=Object.entries(obj);  // [["apple",10],["orange",20],["banana",30]]
console.log(entries);
console.log(Object.fromEntries(entries));

// 7)space

let greeting = "     Space around     ";
greeting.trimEnd();   // "     Space around";
greeting.trimStart(); // "Space around     ";

//8)prototype

const anObject = { y: 'y' };
const x = {  __proto__: anObject};
console.log(x)  // to create an proto object similiar like Object.create();


// 9)dynamic properties

const xx = {  ['a' + '_' + 'b']: 'z'};
xx.a_b //z
console.log(xx);
const dy ="a";
const fruits={[dy]:"apple"};
console.log(fruits);

// 10)for of loop

console.log("for of loop");
for(const v of ['a', 'b', 'c']) {  console.log(v);}

for(const [i,v] of ['a', 'b', 'c'].entries()) {  console.log(i,v);}



// for...of iterates over the property values
// for...in iterates the property names


console.log('Ho'.repeat(3)) //'HoHoHo


// New object Methods

// 14)set and map
    //  Set 
        const s = new Set();
        s.add('1');
        s.add('2');


        console.log(s);
        console.log(s.has('1'));
        console.log(s.size);
        // s.clear() // to delete all items in an set
        // to iterate set

        console.log([...s]);
        // 0r 
        // use for of
    // Map
        var m= new Map();
        m.set("a","aple");
        m.set("b","ball")
        console.log(m.get("b"));  // to get map value
        console.log([...m]);  // to iterate an map


// 15)Array includes

        if (![1,2].indexOf(3)) {  console.log('Not found')}  // return -1 
        if (![1,2].includes(3)) {  console.log('Not found')}  // return true or false

// 16)pad start and end

        console.log("sathish".padEnd(12,"kumar"));
        console.log("doss".padStart(7,"ram"));

// regex

const a = /abc/;


// 3 ways to remove duplicates in an array

const DupArray = [1,2,3,3,177,1,34,55,62,23,11];
console.log(DupArray);
console.log([... new Set(DupArray)]);
// using filter

const unqiueA = DupArray.filter((e,i)=> DupArray.indexOf(e) === i);
console.log(unqiueA);

// using reducer

const redu = DupArray.reduce((initial,currenva)=>{
	return initial.includes(currenva) ? initial :[...initial,currenva]
},[])



//////////DOm Task//////////////

const food =[{"name":"baked beans","price":0.4,"image":"beans.jpg","type":true},{"name":"hot dogs","price":1.99,"image":"hotdogs.jpg","type":false},{"name":"spam","price":2.85,"image":"spam.jpg","type":false},{"name":"refried beans","price":0.99,"image":"refried.jpg","type":true},{"name":"kidney beans","price":0.58,"image":"kidney.jpg","type":false}]
const attr ={
                searchValue:"",
                hide:false
        }
  

        var renderFood = function(attr,food){
                let filterValue = food.filter(e=> e.name.toLowerCase().includes(attr.searchValue.toLowerCase()));
                filterValue = filterValue.filter(e=>{
                        if(attr.hide){
                             return !e.type   
                        }else{
                             return e;
                        }
                });
                const uncomp = filterValue.filter(e=> !e.type);
                document.querySelector('#show-list').innerHTML = "";

                const incomple = document.createElement('p');
                incomple.textContent=`you have ${uncomp.length} food incomplete`;
                document.querySelector('#show-list').appendChild(incomple);


                filterValue.forEach(function(el){
                        const filtered = document.createElement('p');
                        filtered.textContent = el.name;
                        document.querySelector('#show-list').appendChild(filtered);
                })
        }
        // food.forEach(function(e){
        //         const p = document.createElement('p');
        //         p.textContent = e.name;
        //         document.querySelector('#show-list').appendChild(p);
        // })

        document.querySelector('#search').addEventListener('input',function(e){
                attr.searchValue =e.target.value;
                console.log(e.target.value);
                renderFood(attr,food);
        })
        renderFood(attr,food);


        document.querySelector("#add-food-form").addEventListener('submit',function(e){
                e.preventDefault();
                console.log(e.target.elements.addFood.value)
                food.push({"name":e.target.elements.addFood.value,"price":0.4,"image":"beans.jpg","type":false})
                renderFood(attr,food);
                e.target.elements.addFood.value="";
        })

        document.querySelector('#hide-comp').addEventListener('change',function(e){
                console.log(e.target.checked);
                attr.hide=e.target.checked;
                renderFood(attr,food);
        })
