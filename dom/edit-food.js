
 const hashId = location.hash.slice(1);
 const editEleFood =document.querySelector('#edit-food');

 food = getSavedFood();
 const validId = food.find(e => e.id === hashId);

 if(validId === undefined){
     location.assign('./dom.html');
 }
 editEleFood.value = validId.name;

 editEleFood.addEventListener('input',function(e){
     console.log(e.target.value);
    //  food.find((obj,i)=>{
    //      if(hashId === obj.id){
    //          food[i].name = e.target.value
    //      }
    //  })
    validId.name =e.target.value;
    console.log(food);
     saveNotes(food);
 })

 document.querySelector('#remove-food').addEventListener('click',function(){
    removeFood(hashId);
    saveNotes(food);
    location.assign('./dom.html');
 })


 