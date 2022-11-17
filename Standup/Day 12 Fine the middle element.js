//https://www.codewars.com/kata/545a4c5a61aa4c6916000755

// You need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers.

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

//will always be numbers
//will they be in any order? Yes.



function gimme(array) {
    //return the index of the middle number
    //return the indexOf the middle element of a sorted array
    return array.indexOf(array.slice(0).sort((a, b) => a - b)[1])
  }
  
  console.log(gimme([2, 3, 1]), 0)
  console.log(gimme([5, 10, 14]), 1)