//https://www.codewars.com/kata/52efefcbcdf57161d4000091/solutions/javascript

// Count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.


function countChars(string){
    const obj = {}
    for(let i = 0; i < string.length; i++){
      obj[string[i]] = obj[string[i]]+1 || 1
    }
    return obj
  }
  
  console.log(countChars("abc"))