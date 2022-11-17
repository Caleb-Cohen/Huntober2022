const arr1 = [['a','b','c'],['d','e','f'],['g','h','i']]

const arr2 = [['a','b','c'],['d','e','f'],['g','h','i']]
const arr3 = [['a','B','c'],['d','E','f'],['g','H','i']]
const arr4 = [['a','b','c'],['g','h','i'],['d','e','f']]

function checkEquality(arrOne, arrTwo){
    let stringOne = arrOne.flat().join("")
    let stringTwo = arrTwo.flat().join("")
    return stringOne === stringTwo
}

    // insert Day1 function 'checkWin' here
    function checkWin(arrOne, arrTwo){
        let stringOne = arrOne.flat().join("")
        let stringTwo = arrTwo.flat().join("")
        return stringOne === stringTwo ? setIsWin(true) : setIsWin(false)
    }
        
        // instead of return true or return false, use setIsWin(true) or setIsWin(false)
        