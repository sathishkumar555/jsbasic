const filterText ={
    searchTxt:"",
    hideCompleted:false
}

//json

const food =[{"name":"baked beans","price":0.4,"image":"beans.jpg","type":true},{"name":"hot dogs","price":1.99,"image":"hotdogs.jpg","type":false},{"name":"spam","price":2.85,"image":"spam.jpg","type":false},{"name":"refried beans","price":0.99,"image":"refried.jpg","type":true},{"name":"kidney beans","price":0.58,"image":"kidney.jpg","type":false}]

//renderMethod
const renderFood = function(srhtxt, food){
    let filterFood = food.filter(e=> e.name.toLowerCase().includes(srhtxt.searchTxt.toLowerCase()));
    filterFood = filterFood.filter(e=>{
        if(srhtxt.hideCompleted){
            return !e.type
        }else{
            return e
        }
        //return !srhtxt.hideCompleted || !e.type
    })
    const len = filterFood.filter(e=> !e.type);
    document.querySelector('#show-food').innerHTML="";
    document.querySelector('#show-food').innerHTML=`<p>you have ${len.length} food need to complete from the list</p>`;

    filterFood.forEach((e)=>{
    const newp = document.createElement('p');
    newp.textContent =e.name;
    document.querySelector('#show-food').appendChild(newp);
})
}
renderFood(filterText,food);
//search txt
const inp = document.querySelector('#srh-food');
inp.addEventListener('input',function(e){
    filterText.searchTxt = e.target.value;
    renderFood(filterText , food);
})



// -------Add data =>form task------
const tFormv = document.querySelector('#taskForm');
tFormv.addEventListener('submit',function(e){
    e.preventDefault();
    console.log(e)
    const foodObj={name:e.target.elements.addFood.value,type:false};
    food.push(foodObj);
    e.target.elements.addFood.value = '';
    renderFood(filterText,food)
});

//----------form -------------

//checkbox task

document.querySelector("#hide-comp").addEventListener('change',function(e){
filterText.hideCompleted = e.target.checked;
renderFood(filterText,food)
})

//filter by drop down

document.querySelector('#filter-by').addEventListener('change',function(e){
    console.log(e.target.value);
})


