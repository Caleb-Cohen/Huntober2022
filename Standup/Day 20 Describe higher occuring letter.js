
function describe(string){
    let obj = {}
    let max = [0]
    for(let i = 0; i < string.length; i++){
      obj[string[i]] = obj[string[i]]+1 || 1
    }
    for(let letter in obj){
      if(obj[letter] > max[0]){
        max = [obj[letter], letter]
      }
    }
    return max[1]
  }
  
  
  
  console.log(describe("Helloooooo World!"))
  
  
  describe("Max Character", () => {
   it("Should return max character", () => {
    assert.equal(max("Hello World!"), "l");
   });
  });
  