console.log("test js");

//####
//1)querySelector ,querySelectorAll , remove(), textContent,innerHtml, addevenlistner(input || click || submit)
    // createElement,,appendchild
//

const p = document.querySelector('p');
// p.remove();
const allPs = document.querySelectorAll('p');
console.log(p);
console.log(allPs);
allPs.forEach((element,i) => {
    console.log(element);
    console.log(element.textContent);
    console.log(element.innerText);
    // element.textContent=`paragraph${i}`;
});

//  Taskl
// ******

const Ps = document.querySelectorAll('p');
console.log(Ps)
Ps.forEach((e)=>{
    e.textContent.includes("the") && e.remove()
})

//Add a new element
// var newP = document.createElement('p') ;
// newP.textContent="new para added from script";
// document.querySelector('div').appendChild(newP);

//task2
//*******

let food =[{"name":"baked beans","price":0.4,"image":"beans.jpg","type":true},{"name":"hot dogs","price":1.99,"image":"hotdogs.jpg","type":false},{"name":"spam","price":2.85,"image":"spam.jpg","type":false},{"name":"refried beans","price":0.99,"image":"refried.jpg","type":true},{"name":"kidney beans","price":0.58,"image":"kidney.jpg","type":false}]
var pen=food.filter(e=> !e.type);

//event handlers

const btn = document.querySelector('#show');
btn.addEventListener('click',function(e){
    console.log(e);
    console.log(e.target);
    e.target.textContent="button clicked";
})


document.querySelector('#remove').addEventListener('click',()=>{
    console.log("remove  node btn clicked")
})
// ------------task---------

const renderNotes = function(food,filterText){
    const foo = food.filter(e=> e.name.toLowerCase().includes(filterText.searchTxt.toLowerCase()));
    const d = document.querySelector('#show-todo');
    d.innerHTML='';
    foo.map(e=>{
        const createSugg = document.createElement('div');
        createSugg.textContent = e.name;
        document.querySelector('#show-todo').appendChild(createSugg);
    })  
}

document.querySelector('#search-text').addEventListener('input',function(e){
    filterText.searchTxt = e.target.value;
    renderNotes(food,filterText);
})

renderNotes(food,filterText);

// -------------------------------------------------

document.querySelector('#add-todo').addEventListener("input",(e)=>{
    var showP = document.createElement('p');
    showP.textContent=e.target.value;
    document.querySelector('#show-todo').appendChild(showP); 
})







//--------------task3---------------
//require library
    // const uuidv4 = require('uuid/v4');

    food = getSavedFood();
    renderFood(filterText,food);
    const inp = document.querySelector('#srh-food');
    inp.addEventListener('input',function(e){
        filterText.searchTxt = e.target.value;
        renderFood(filterText,food);
    })


// -------form task------
    const tFormv = document.querySelector('#taskForm');
    tFormv.addEventListener('submit',function(e){
        e.preventDefault();
        if(e.target.elements.addFood.value !== ""){
            const uId = uuidv4();
                food.push({
                    id:uId,
                    name:e.target.elements.addFood.value,
                    type:false
                });
                saveNotes(food);
                e.target.elements.addFood.value = '';
                // renderFood(filterText,food)
                location.assign(`./edit-dom.html#${uId}`);
        }
    });

//----------form -------------

//checkbox task

document.querySelector("#hide-comp").addEventListener('change',function(e){
    filterText.hideCompleted = e.target.checked;
    renderFood(filterText , food)
})

//dropdown
document.querySelector('#filter-by').addEventListener('change',function(e){
    console.log(e.target.value)
})

//--------------end task3---------------

