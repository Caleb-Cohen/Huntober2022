//Given an array of digital numbers, return a new array of length number containing the last even numbers from the original 
//array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

// For example:

// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

function filterEven (array, number){
    return array.filter(e => e % 2 === 0).slice(-number)
  }
  
  let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  let array2 = [-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26]
  let array3 = [6, -25, 3, 7, 5, 5, 7, -3, 23]
  
  console.log(filterEven(array1,3),[4, 6, 8])
  console.log(filterEven(array2,2), [-8,26])
  console.log(filterEven(array3,1), [6])