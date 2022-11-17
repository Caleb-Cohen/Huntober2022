//https://www.codewars.com/kata/5a430359e1ce0e35540000b1/

// Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.

// A few examples:

// ['u', 'y'] =>  ['u', 'y'] // average length is 1
// ['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
// ['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3
// If the average length is not an integer, use Math.round().
// The input array's length > 1
// if strings are less than average increase element with the same letter


function averageLength(arr){
    //take in array
    //use reduce function to add up the length of each array
    //map through the array limiting or increasing the length of the array
    let averageLength = Math.round(arr.reduce((pV,cV) => pV + cV.length, 0)/arr.length)
    console.log(averageLength)
    return arr.map(ele => ele.length < averageLength ? ele.substring(0,1).repeat(averageLength) : ele.substring(0,averageLength))
  }
  
  
  console.log(averageLength(['u', 'y']), ['u', 'y'])
  console.log(averageLength(['aa', 'bbb', 'cccc']), ['aaa', 'bbb', 'ccc'])
  console.log(averageLength(['aa', 'bb', 'ddd', 'eee']), ['aaa', 'bbb', 'ddd', 'eee'])