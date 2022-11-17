
myGrid = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9']]

//Please create a function that will take in an array like we've been working with all week (X-inner arrays of X-primitive values each) and shuffle it up in place. Do your best to have a thorough, random shuffle in a single call of your function.
function randomizeArray(array){
  for(let i = 0; i < array.length; i++){
    let nestedArrayLength = array[i].length
    for(let j = 0; j < nestedArrayLength; j++){
      let indexRandom = Math.floor(Math.random() * array.length)
      let nestedRandom = Math.floor(Math.random() * array.length)
      let replaceSave = array[i][j]
      array[i][j] = array[indexRandom][nestedRandom]
      array[indexRandom][nestedRandom] = replaceSave
    }
  }
  return array
}



console.log(randomizeArray(myGrid))