// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"


// function removeDuplicates(string){
//   //split in array
//   //loop through array compare current element to previous element. Push to new array if they are not the same.
//   let answerArr = []
//   let arr = string.split(" ")
//   for(let i = 0; i < arr.length; i++){
//     arr[i] != arr[i-1] ? answerArr.push(arr[i]) : null
//   }
//   return answerArr.join(" ")
// }


function removeDuplicates(string){
    return string.split(" ").filter((ele, i, arr) => arr[i] != arr[i-1]).join(" ")
  }
  
  console.log(removeDuplicates("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"),"alpha beta gamma delta alpha beta gamma delta")