import multiply from './calc.js'
import { add } from './calc.js'
import Entity from './entity.js'

console.log('Hello World! (from webpack)');

let a = 2;

{
	let a = 3;
	console.log("a :", 3);
}

const arr = [1, 2, 3];
arr.push(4);

//arr = [1, 2];			error


var h = "harinder";
var s = "singh";
var c = h + " " + s;
console.log(c);
 
let d = `hello ${h}`;
console.log(d);

//spread operator
var x = [1, 2, 3];
let y = [7, 8, ...x, 10];
console.log(y);
//or
function print(...z) {
	console.log(z);
}

print(1, 2, 3, 4, 5, 6);

//destructuring assignment arrays
let m = [100, 2, 3, 4, 5];
let [n, ...o] = m;
console.log(n, o);

//destructuring assignment objects
let magical = false;
let power = 1;
let wizard = {magical: true, power: 10};
({power, magical} = wizard);
console.log(magical, power);

//let {i, j} = wizard;
//console.log(i, j);   undefined undefined

//arrow functions ---- anonymous functions
setTimeout(() => {
	console.log("Arrow New Season Out");
}, 1000);

//using map method
let points = [10, 20, 30];

points = points.map(element => element + 1);

console.log(points);

//filtering in ES6
let isPassing = (grade) => {
	return grade >= 70;
}

let scores = [90, 85, 12, 79, 81, 45];

let passing = scores.filter(isPassing);
// or
// let passing = scores..filter(element => element >= 70); 
console.log(passing);

//export and import fucntions by default
console.log(multiply(3, 5));
console.log(add(3, 5));

//real world objects

let Merry = new Entity("Merry", 4.6);
Merry.greet();