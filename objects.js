var person = {
    name: ['Bob', 'Smith'],
    age: 32,
    gender: 'male',
    interests: ['music', 'skiing'],
    bio: function() {
      alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
    },
    greeting: function() {
      alert('Hi! I\'m ' + this.name[0] + '.');
    },
    allinfo:this.name
  };


  var products=[
      "pants:10",
      "shirt:30",
      "tie:20"
  ];
  var data=[];
  var mate=[];
  for(var i=0;i < products.length;i++){
    console.log(i);
    var materials=products[i].split(':');
    data.push(materials[0]);
    mate.push(materials[1]);
    
 }

 
 console.log(data);
 console.log(mate);
 
  console.log(person);