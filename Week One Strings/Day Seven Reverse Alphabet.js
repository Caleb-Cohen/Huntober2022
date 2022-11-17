function reverseAlphabet(string){
  let lowercaseArr = "abcdefghijklmnopqrstuvwxyz".split("")
  let lowercaseArrReverse = "abcdefghijklmnopqrstuvwxyz".split("").reverse()
  let stringArr = string.split("")
  let answerArr = []
  for(let e of stringArr){
    let upperOrLower = ""
    if(e === e.toLowerCase() && e.toLowerCase() != undefined){
      upperOrLower = "lower"
    } else {
      upperOrLower = "upper"
    }
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

reverseAlphabet('sfmglyvi 1 DVVP WLDM. #100wVEH dv tl tvg!!')