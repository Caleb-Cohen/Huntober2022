myArr = ['hi', 'hello', 'howdy', 'hola', 'hej', 'hallo', 'heyyy']

function arrSort(array){
  let newArray = []
  let includesA = array.filter(ele => ele.includes("a"))
  let greaterThanThree = array.filter(ele => ele.length > 3 && !ele.includes("a"))
  let elseArray = array.filter(ele => ele.length <= 3 && !ele.includes("a"))
  return newArray.concat(includesA).concat(elseArray).concat(greaterThanThree)
}

arrSort(myArr)