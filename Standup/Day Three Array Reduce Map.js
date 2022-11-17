//take in an arry and return the sum
//within there will be numbers
//strings? Yes.


let arrayOne = [1, "2", 3] //6
let arrayTwo = [10, 1000, "10000"] //11010

function sumArray(array){
    return array.reduce((pV, cV) => Number(cV) + pV, 0)
}