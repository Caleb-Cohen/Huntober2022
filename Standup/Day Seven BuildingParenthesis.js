// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

function buildParen(string){
    //take string input and store values in array
    //create copy of array to reference
    //map array under the conditional of other occurences within the array
    let array = string.toLowerCase().split("")
    return array.map(element => array.indexOf(element) === array.lastIndexOf(element) ? "(" : ")").join("")
    
  }
  
  console.log(buildParen("din")==="(((")
  console.log(buildParen("recede")==="()()()")
  console.log(buildParen("Success")===")())())")
  console.log(buildParen("(( @")==="))((")