// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];


/*
  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/


// function getLength(arr, cb) {
//   // getLength passes the length of the array into the callback.
// }

function getLength(array, callback) {
  return callback(array.length);
}

getLength(items, function(length) {
  console.log(length)
});

//------------------------------------------------


// function last(arr, cb) {
//   // last passes the last item of the array into the callback.
// }
function last(array, callback) {
  return callback(array[array.length - 1])
}

last(items, function(lastItem) {
  console.log(lastItem)
});

//----------------------------------------------------

// function sumNums(x, y, cb) {
//   // sumNums adds two numbers (x, y) and passes the result to the callback.
// }

function sumNums(num1, num2, callback) {
  return callback(num1 + num2)
}

sumNums(2, 5, function(sums) {
  console.log(sums)
});

//------------------------------------------------------

// function multiplyNums(x, y, cb) {
//   // multiplyNums multiplies two numbers and passes the result to the callback.
// }

function multiplyNums(num1, num2, callback) {
  return callback(num1 * num2)
}

multiplyNums(2, 5, function(multiply) {
  console.log(multiply)
});

//-------------------------------------------------------

// function contains(item, list, cb) {
//   // contains checks if an item is present inside of the given array/list.
//   // Pass true to the callback if it is, otherwise pass false.
// }



function contains(item, list, callback) {
  callback(console.log(list.includes(item)))
}

contains('Pencil', items, function(search) {
  return (search)
});

contains('Bread', items, function(search) {
  return (search)
});

//----------------------------------------------------------------

/* STRETCH PROBLEM */
const testNums = [1 , 2, 3, 18, 13, 2, 21, 1, 3];


function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}

