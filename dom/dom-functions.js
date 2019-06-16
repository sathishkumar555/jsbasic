
const filterText ={
    searchTxt:"",
    hideCompleted:false
}
// /fetch exisitng data from storage

const getSavedFood = function(){
    let data = window && window.localStorage && window.localStorage.getItem('food');
    if(data){
     return food = JSON.parse(data);
    }else{
        return [];
    }

}

//remove ID

const removeFood = function(nodeId){
    const filteredDatas = food.findIndex(e => e.id === nodeId);
    if(filteredDatas > -1){
        food.splice(filteredDatas,1);
    }
    
}

// toggle Food

const toggleFood = function(){
    saveNotes(food);
    renderFood(filterText,food)
}

const generateNodes = function(node){

    let elDiv = document.createElement('div');
    let checkSpan = document.createElement('input');
    const textEle =document.createElement('a');
    const removeBtn = document.createElement('button');

    //setup checkbox
    checkSpan.setAttribute('type',"checkbox");
    checkSpan.checked = node.type;
    elDiv.appendChild(checkSpan);
    checkSpan.addEventListener('change',function(e){
        node.type=e.target.checked;
        toggleFood();
    })

    //setup text node
    textEle.textContent = node.name;
    textEle.setAttribute('href',`./edit-dom.html#${node.id}`);
    elDiv.appendChild(textEle);

    //setup remove btn
    removeBtn.textContent = 'x';
    elDiv.appendChild(removeBtn);
    removeBtn.addEventListener('click',function(){
        removeFood(node.id);
        saveNotes(food);
        renderFood(filterText,food)
    });
    return elDiv;
}

//save Notes

const saveNotes = function(food){
    window.localStorage.setItem('food',JSON.stringify(food));
}


//render Food

const renderFood = function(srhtxt,food){
    const srh =srhtxt.searchTxt.toLowerCase();
    let filterFood = food.filter(e=> e.name.toLowerCase().includes(srh));
    filterFood = filterFood.filter(e=>{
        if(srhtxt.hideCompleted){
            return !e.type
        }else{
            return e
        }
        //return !srhtxt.hideCompleted || !e.type
    })
    const len = filterFood.filter(e=> !e.type);
    document.querySelector('#show-food').innerHTML = '';
    document.querySelector('#show-food').appendChild(generateSummary(len));


    filterFood.forEach((nodes)=>{
    const nodeEl = generateNodes(nodes);
    document.querySelector('#show-food').appendChild(nodeEl);
})
}

//generate Summary Food
const generateSummary = function(len){
    const Summary = document.createElement('h2');
    Summary.textContent = `you have ${len.length} food need to complete from the list`;
    return Summary;
}