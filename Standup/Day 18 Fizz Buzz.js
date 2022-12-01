// Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 2, print out “Fizz”; when it’s divisible by 3, print out “Buzz”; when it’s divisible by both 2 and 3, print out “Fizz Buzz”.

function fizzBuzz(number){
    let str = ""
    for(let i = 1; i <= number; i++){
      if(i % 3 === 0 && i % 2 === 0) { str += "Fizz Buzz, " }
      else if(i % 3 === 0) { str += "Buzz, " }
      else if (i % 2 === 0) { str += "Fizz, " }
      else { str += `${i}, `}
    }
    return str
  }
  
  console.log(fizzBuzz(200))