myGrid = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']]

function moveUp(target,array){
  let nestedArrayLocation = 0
  for(let i = 0; i < array.length; i++){
    if(array[i].includes(target)){
      nestedArrayLocation = i
    }
  }
  if(nestedArrayLocation === 0) {
    console.log(`Cannot move ${target} any more`)
    return array
  } 
  let indexOfTarget = array[nestedArrayLocation].indexOf(target)
  let replacedLetter = array[nestedArrayLocation-1][indexOfTarget]
  console.log('replacedLetter', replacedLetter)
  array[nestedArrayLocation-1][indexOfTarget] = target
  array[nestedArrayLocation][indexOfTarget] = replacedLetter
  return array
}

function moveDown(target,array){
  let nestedArrayLocation = 0
  for(let i = 0; i < array.length; i++){
    if(array[i].includes(target)){
      nestedArrayLocation = i
    }
  }
  if(nestedArrayLocation === array.length-1) {
    console.log(`Cannot move ${target} any more`)
    return array
  } 
  let indexOfTarget = array[nestedArrayLocation].indexOf(target)
  let replacedLetter = array[nestedArrayLocation+1][indexOfTarget]
  console.log('replacedLetter', replacedLetter)
  array[nestedArrayLocation+1][indexOfTarget] = target
  array[nestedArrayLocation][indexOfTarget] = replacedLetter
  return array
}

    // insert Day4 move up function 'moveBlankUp(curGrid, blankGrid) here'

    function moveBlankUp(curGrid,blankGrid){
      let nestedcurGridLocation = 0
      for(let i = 0; i < curGrid.length; i++){
        if(curGrid[i].includes(blankGrid)){
          nestedcurGridLocation = i
        }
      }
      if(nestedcurGridLocation === 0) {
        console.log(`Cannot move ${blankGrid} any more`)
        checkWin(gridWithBlank, curGrid)
        return curGrid
      } 
      let indexOfblankGrid = curGrid[nestedcurGridLocation].indexOf(blankGrid)
      let replacedLetter = curGrid[nestedcurGridLocation-1][indexOfblankGrid]
      console.log('replacedLetter', replacedLetter)
      curGrid[nestedcurGridLocation-1][indexOfblankGrid] = blankGrid
      curGrid[nestedcurGridLocation][indexOfblankGrid] = replacedLetter
      checkWin(gridWithBlank, curGrid)
      return curGrid
    }

        // just before return, add this 'checkWin(gridWithBlank, curGrid)'
    // should return mutated array that was passed in (curGrid)

  

       // insert Day4 move down function 'moveBlankDown(curGrid, blankGrid) here'
    // just before return, add this 'checkWin(gridWithBlank, curGrid)'
    // should return mutated array that was passed in (curGrid)

    function moveBlankDown(curGrid,blankGrid){
      let nestedcurGridLocation = 0
      for(let i = 0; i < curGrid.length; i++){
        if(curGrid[i].includes(blankGrid)){
          nestedcurGridLocation = i
        }
      }
      if(nestedcurGridLocation === curGrid.length-1) {
        console.log(`Cannot move ${blankGrid} any more`)
        checkWin(gridWithBlank, curGrid)
        return curGrid
      } 
      let indexOfblankGrid = curGrid[nestedcurGridLocation].indexOf(blankGrid)
      let replacedLetter = curGrid[nestedcurGridLocation+1][indexOfblankGrid]
      console.log('replacedLetter', replacedLetter)
      curGrid[nestedcurGridLocation+1][indexOfblankGrid] = blankGrid
      curGrid[nestedcurGridLocation][indexOfblankGrid] = replacedLetter
      checkWin(gridWithBlank, curGrid)
      return curGrid
    }