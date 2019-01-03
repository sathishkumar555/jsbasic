OOJS:
    -It is an object Oriented javascript programs.Itfollws Inheritance,polymorphism andencapsulaion.

Abstraction:
    -Creating a simple model for the complex thing which representsmost important aspects of the user.
    A short storyabout the Teacher.

Object Instance:
    - creating an instance from an class  is called Object instance.

Polymorphism:
    - The ability of multiple object types to implement the same functionality is polymorphism. 

        Teacher -parent
        teacher1->child->

Constructor:
    -Creating a objects which required or used in many places.
    -Keeping prperties  and methods in a constructor.
    -It is not ideal to keep methods inside an constructor as it will define each time when new instance is created.to
        avoid we can use it prototype(for performance improvements)
    
Prototypes:
    -It inherits js objects from one another.
    -Js is a prototype based language to provide Inheritance.
    --everyobject will have the prototype object which acts as a template object to inherit properties and methods

refer:https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes
function Car(name,model){
	this.name=name;
	this.model=model;
}

function TaxiCar(){

}
TaxiCar.prototype=Car.prototype.constructor


Inheritance:

Inheriting with parameters:
    function Person(first, last, age, gender, interests) {
     this.name = {
    first,
    last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
};

Person.prototype.greeting = function() {
  alert('Hi! I\'m ' + this.name.first + '.');
};
ƒ () {
  alert('Hi! I\'m ' + this.name.first + '.');
}

function Teacher(first, last, age, gender, interests, subject) {
  Person.call(this, first, last, age, gender, interests);

  this.subject = subject;
}

Inheriting without parameters:
    function a(){ this.c=c; }
    function b(){ a.call(this); this.d=d;}

encapsulation and closures:


this:

it refers to an object and variable and we use it in context.

call,bind ,apply:

-bind invokes the method by using function arguments as an array,
-call accepts it as an individual arguments

apply-
After using bind, this is immutable, even by invoking call, apply or bind.

Symbols =>primary use case is for making private object properties, 
