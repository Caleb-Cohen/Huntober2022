// The starting array sequence is [1,2,3,4,5,6,7,8,9]
// The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
// Your function should return the int 5.
// If no number was deleted from the array and no difference with it, your function should return the int 0.

// Note: N may be 1 or less (in the latter case, the first array will be []).

// findDeletedNumber([1,2,3,4,5], [3,4,1,5]), 2, 'Deletion')
// findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]), 5, 'Deletion')
// findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]), 0, 'No deletion')

function findDeletedNumber(arrOne, arrTwo){
    if(arrOne.length === 0) { return [] }
    if(arrOne.length === arrTwo.length) { return 0 }
    for(let i = 0; i < arrOne.length; i++){
      if(arrTwo.indexOf(arrOne[i]) === -1){
        return arrOne[i]
      }
    }
  }
  
  console.log(findDeletedNumber([1,2,3,4,5], [3,4,1,5]), 2, 'Deletion')
  console.log(findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]), 5, 'Deletion')
  console.log(findDeletedNumber([], []), [], `no deletion`)