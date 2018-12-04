function createNewPerson(name){
    var obj={};
    obj.name=name;
    obj.greeting=function(){
        console.log("hi ,welcome "+name+"!")
    };
    return obj;
}


var sath=createNewPerson('sathish');
sath.name;
sath.greeting();

//constructor -shoul start with caps
    function Person(first,last,age,address,interests){
        this.name={first,last};
        this.greeting=function(){
        // alert("hi ,welcome "+name+"!")
        }
        this.age=age;
        this.address=address;
        this.interests=interests;
        this.bio = function() {
            // alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
        };
    }

    var person1= new Person("sathish","kumar","26","chennai",["cycling","programming"]);
    var person2= new Person("ram","doss","23","bangalore",["riding","music"]);
    person1.bio();
    person2.bio();
    
    
            var a = [{'name':'Apple', 'age':32},{'name':'cat', 'age':32},{'name':'ball', 'age':32}];
            var b = [{'name':'ball', 'age':32},{'name':'Apple', 'age':22}];
    
    function remove_duplicates(a, b) {
        for (var i = 0, len = a.length; i < len; i++) { 
            for (var j = 0, len2 = b.length; j < len2; j++) { 
                if (a[i].name === b[j].name) {
                   b.splice(j, 1);
                    len2=b.length;
                
            }
        }
        a.map((d)=>{ return d.operation="delete";})
        
        b.map((d)=>{ return d.operation="insert";})
        // console.log(a);
        console.log(b);
    
    }
}
    
    remove_duplicates(a,b);
    
     for (var i = 0, len = b.length; i < len; i++) {
         console.log(b[i].name);
     }
    
