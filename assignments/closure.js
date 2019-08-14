// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

console.log("---------------CLOSURES---------------");

function sweetSixteen(name){
  const greeting = `Happy 16th ${name}!!`;
  console.log( greeting);
}

sweetSixteen("Amber"); //directly references the "greeting" variable inside of sweetSixteen.
//console.log(greeting); returns undefined.

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let count = 0;
  return () => {
    ++count;
    console.log(count);
    return count;
  }
};
const newCount = counter();

newCount();
newCount();
newCount();
newCount();


// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
console.log(`-------challenge 3-----`);
// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
// Return an object that has two methods called `increment` and `decrement`.
// `increment` should increment a counter variable in closure scope and return it.
// `decrement` should decrement the counter variable and return it.

const counterFactory = () => {
  let counter = 0;
  let increment = () => counter += 1;
  let decrement = () => counter -= 1;
  let myObj = {increment, decrement}
  return myObj;
};

let upAndDown = counterFactory();

console.log(upAndDown.increment());
console.log(upAndDown.increment());
console.log(upAndDown.increment());
console.log(upAndDown.increment());
console.log(upAndDown.decrement());

