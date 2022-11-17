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
  
  decryptMsg("Thies its H alltowe!en!? Th#is Tis GHalolowmeen$!", 4)
  decryptMsg("The LBachyelor^ is ma tehrrib le tpelev!isioOn sh8ow.",5)