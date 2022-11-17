//round down an array
//no empty array
//the array will be full of numbers?
//yes
//will the numbers ever be negative?
//whole/fractions?
//no
//will there be numbers as strings?
//no
//will there be numbers writting like "one"

let arrayOne = [2,2,2,2]
let arrayTwo = [1,2,3,4,5]
let arrayThree = [1,1,1,1,1,1,1,2]

function averageArray(array){
  return Math.floor(array.reduce((a,c) => a+c,0)/array.length)
}

console.log(averageArray(arrayOne), 2)
console.log(averageArray(arrayTwo), 3)
console.log(averageArray(arrayThree),1)