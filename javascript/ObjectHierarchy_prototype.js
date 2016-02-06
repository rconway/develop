
//==============================================================================
// Object: human
//==============================================================================

// Constructor
function human(age) {
	this.age = age;
	//console.log("human constructed with age: " + this.age);
}

// Method: sayAge()
human.prototype.sayAge = function() {
	console.log("Age of human is: " + this.age);
}

// Method: summarise()
human.prototype.summarise = function() {
	this.sayAge();
}

// Test human
console.log("---");
var h = new human(12);
h.summarise();

//==============================================================================
// Object: person
//==============================================================================

// Constructor
function person(age, name) {
	// Call the base-object constructor
	//human.prototype.constructor.call(this, age);
	human.call(this, age);
	this.name = name;
	//console.log("person constructed with name: " + this.name);
}

// Derive from human
person.prototype = Object.create(human.prototype);

// Method: sayName()
person.prototype.sayName = function() {
	console.log("Name of person is: " + this.name);
}

// Method: summarise()
person.prototype.summarise = function() {
	// First call the base-object version
	human.prototype.summarise.call(this);
	this.sayName();
}

// Test human again
console.log("---");
var h2 = new human(34);
h2.summarise();

// Test person
console.log("---");
var p = new person(56, "fredbob");
p.summarise();

//==============================================================================

console.time("Create Many Persons");
var count = 0;

var objects = [];
for (var i = 0; i < 100000; ++i) {
	objects.push( new person(i, "SomeOne" + i ) );
}

objects.forEach( function(item) {
	//item.summarise();
	count++;
} );

console.timeEnd("Create Many Persons");

console.log("Count => " + count);
