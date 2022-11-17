function moveLeft(element, array){
    let index = array.indexOf(element)
    if(index > 0){
      array.splice(index, 1)
      array.splice(index-1, 0, element)
    } else {
      console.log(`${element} is as far left as possible`)
    }
  }
  
  function moveRight(element, array){
    let index = array.indexOf(element)
    if(index < array.length-1){
      array.splice(index, 1)
      array.splice(index+1, 0, element)
    } else {
      console.log(`${element} is as far right as possible`)
    }
  }

      // insert Day2 move left function 'moveBlankLeft(curGrid, blankChar)' here
      function moveBlankLeft(curGrid, blankChar){
        let index = curGrid.indexOf(blankChar)
        if(index > 0){
          curGrid.splice(index, 1)
          curGrid.splice(index-1, 0, blankChar)
        } else {
          console.log(`${blankChar} is as far left as possible`)
        }
        checkWin(gridWithBlank, curGrid)
        return curGrid
      }
        // just before return, add this 'checkWin(gridWithBlank, curGrid)'
        // should return mutated array that was passed in (curGrid)
    
        
        // insert Day2 move right function 'moveBlankRight(curGrid, blankChar)' here
        // just before return, add this 'checkWin(gridWithBlank, curGrid)'
        // should return mutated array that was passed in (curGrid)
          function moveBlankRight(curGrid, blankChar){
        let index = curGrid.indexOf(blankChar)
        if(index < curGrid.length-1){
          curGrid.splice(index, 1)
          curGrid.splice(index+1, 0, blankChar)
        } else {
          console.log(`${blankChar} is as far right as possible`)
        }
            checkWin(gridWithBlank, curGrid)
            return curGrid
      }