
// Utility function
function inheritMethods(sourceObj, targetObj) {
	for (var prop in sourceObj) {
		if ( typeof(sourceObj[prop]) === "function" ) {
			targetObj[prop] = sourceObj[prop];
		}
	}
}

//==============================================================================
// Object: human
//==============================================================================

function createHuman(age) {
	var _age = age;

	//console.log("human created with age: " + _age);

	function getAge() {
		return _age;
	}

	function setAge(age) {
		_age = age;
	}

	function sayAge() {
		console.log("Age of human is: " + _age);
	}

	function summarise() {
		sayAge();
	}

	return {
		getAge: getAge,
		setAge: setAge,
		sayAge: sayAge,
		summarise: summarise
	}
}

// Test human
console.log("---");
var h = createHuman(12);
h.summarise();

//==============================================================================
// Object: person
//==============================================================================

function createPerson(age, name) {
	var _human = createHuman(age);
	var _name = name;

	//console.log("person created with name: " + name);

	var retObj = {};
	inheritMethods(_human, retObj);

	function getName() {
		return _name;
	}

	function setName(name) {
		_name = name;
	}

	function sayName() {
		console.log("Name of person is: " + _name);
	}

	function summarise() {
		// First call the base-object version
		_human.summarise();
		sayName();
	}

	var thisObj = {
		getName: getName,
		setName: setName,
		sayName: sayName,
		summarise: summarise
	}
	inheritMethods(thisObj, retObj);

	return retObj;
}

// Test human again
console.log("---");
var h2 = createHuman(34);
h2.summarise();

// Test person
console.log("---");
var p = createPerson(56, "fredbob");
p.summarise();

// Test setters
console.log("---");
p.setAge(123);
p.setName("BurtLarry");
p.summarise();

//==============================================================================

console.time("Create Many Persons");
var count = 0;

var objects = [];
for (var i = 0; i < 100000; ++i) {
	objects.push( createPerson(i, "SomeOne" + i ) );
}

objects.forEach( function(item) {
	//item.summarise();
	count++;
} );

console.timeEnd("Create Many Persons");

console.log("Count => " + count);
