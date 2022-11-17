function repeats(array){
    let sum = 0
    for(let i = 0; i < array.length; i++){
      if(array.indexOf(array[i]) === array.lastIndexOf(array[i])){
        sum += array[i]
      }
    }
    return sum
  }