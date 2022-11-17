function decodeStringOne(string){
    function getObjKey(obj, value) {
        return Object.keys(obj).find(key => obj[key] === value);
    }
    const decodeObject = {
        "0":"O",
        "1":"I",
        "2":"Z",
        "3":"E",
        "4":"h",
        "5":"S",
        "6":"G",
        "7":"L",
        "8":"B",
        "9":"q",
    }
    return string.split("").map(ele => decodeObject[ele] ? decodeObject[ele] : 
                    getObjKey(decodeObject, ele) ? getObjKey(decodeObject, ele) : ele).join("")
}

function decodeString(string){
    const arr = ["S", "p", "a", "c", "e"]
    return string.split("").map(ele => arr.includes(ele) === true ? " " : ele).join("")
}

function reverseString(string){
    return string.split("").reverse().join("")
}

function decryptMsg(string, number){
    let decryptArr = []
    let stringArr = string.split("")
    for(let i = 0; i < stringArr.length; i++){
      //console.log(string[i], i+1, (i+1)%number != 0)
      if((i+1) % number != 0){
        decryptArr.push(stringArr[i])
      }
    }
    return decryptArr.join("")
  }

  function reverseAlphabet(string){
    let lowercaseArr = "abcdefghijklmnopqrstuvwxyz".split("")
    let lowercaseArrReverse = "zyxwvutsrqponmlkjihgfedcba"
    let stringArr = string.split("")
    let answerArr = []
    for(let e of stringArr){
      let upperOrLower = ""
      if(e === e.toLowerCase() && e.toLowerCase() != undefined){
        upperOrLower = "lower"
      } else {
        upperOrLower = "upper"
      }
        console.log(upperOrLower)
      let answerPush = lowercaseArrReverse[lowercaseArr.indexOf(e.toLowerCase())]
      if(upperOrLower === "lower" && e.match(/[a-z]/i)){
        answerPush = answerPush.toUpperCase()
      } else if(e.match(/[a-z]/i)){
        answerPush = answerPush.toLowerCase()
      } else {
        answerPush = e
      }
      answerArr.push(answerPush)
    }
    return answerArr.join('')
  }

reverseAlphabet(decryptMsg(reverseString(decodeString(decodeStringOne("e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs"))),3))