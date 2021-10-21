//Exponent Operator

const firstNum = 8 ** 2;
console.log(firstNum);

//Exponent ES6 Updates
const secondNum = Math.pow(8, 2);
console.log(secondNum);

//Template Literals

let name = "John";

//Pre-template literal string
let message  = 'Hello ' + name + "! Welcome to programming!";
console.log("Message without template literals. " + message);

//Using Template Literal (Backticks - ``)
message = `Hello ${name}! Welcome to programming!`;
console.log(`Message with template literals: ${message}`);

const anotherMessage = `
${name} attended a match competition.
He won it by solving the problem 8**2 
with the solution of ${secondNum}
`;

console.log(anotherMessage);

const interestRate = 0.1;
const principal = 1000;

console.log(`The interest on your savings account is: ${principal * interestRate}`);

// Array and Object Destructuring

//Array destructuring - allows to unpack elements in arrays into distinct values

const fullName = ['Juan', 'Dela', 'Cruz'];

//Pre-array destructuring
console.log(fullName[0]);
console.log(fullName[1]);
console.log(fullName[2]);

console.log(`Hello ${fullName[0]} ${fullName[1]} ${fullName[2]}! It's nice to meet you.`);

//Array destructuring
const [firstName, middleName, lastName] = fullName;
console.log(`Hello ${firstName} ${middleName} ${lastName}! It's nice to meet you.`)

//Object Destructuring - allows us to unpack properties of objects into distinct variabels

const person = {
	givenName: "Jane",
	maidenName: "Smith",
	familyName: "Rogers"
}

//Pre-object destructuring
console.log(person.givenName);
console.log(person.maidenName);
console.log(person.familyName);

//Object Destructuring
const {givenName, maidenName, familyName} = person

console.log(givenName);
console.log(maidenName);
console.log(familyName);

function getFullName({givenName, maidenName, familyName}){
	console.log(`${givenName} ${maidenName} ${familyName}`);
}

getFullName(person);

/* Arrow functions
	-conventional function
	function nameFunction(){
		statements;
	}

	-arrow function Syntax:
	const variable = () => {
		console.log;
	}
*/

/*function printFullName(firstName, middleInitial, lastName){
	console.log(`${firstName} ${middleInitial} ${lastName}`);;
}

printFullName("John", "D.", "Smith");*/

const printFullName = (firstName, middleInitial, lastName) => {
	console.log(`${firstName} ${middleInitial} ${lastName}`);
}

printFullName("John", "D.", "Smith");

const students = ["John", "Jane", "Judy"];

console.log('Pre-Arrow function');
students.forEach(function(student){
	console.log(`${student} is a student.`);
})
console.log('Arrow function');
students.forEach((student) => {
	console.log(`${student} is a student.`);
});

/*
	const add = (x, y) => {
		return x + y;
	}
*/

const add = (x, y) => x + y;

console.log(add(5, 8));

let total = add(1, 6);
console.log(total);

//Default Function Argument Value
const greet = (name = 'User') => {
	return `Good morning, ${name}`;
}

console.log(greet());

//Create a default function argument value for setting a default pokemon
//I got you ${pokemon}

const pokes = (pokemon = 'Torchic') => {
	return `I got you ${pokemon}`;
}

console.log(pokes());
console.log(pokes('Pikachu'));

//Class-based object Blueprints - allows creation/instantiation of objects using classes as blueprints
/* Syntax:
	class className {
		constructor(objectPropertyA, objectPropertyB){
			this.objectPropertyA = objectPropertyA;
			this.objectPropertyB = objectPropertyB;
		}
	}
*/

class Car{
	constructor(brand, name, year){
		this.brand = brand;
		this.name = name;
		this.year = year;
	}
}

const myCar = new Car();
console.log(myCar);

myCar.brand = "Ford";
myCar.name = "Ranger Raptor";
myCar.yaer = 2021;

console.log(myCar);

const myNewCar = new Car("Toyota", "Vios", 2021);
console.log(myNewCar);