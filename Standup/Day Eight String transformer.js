// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.

//only english alphabet and spaces. So no symbols or numbers?
//will have to handle multiple spaces

function reverseString(string){
    //use .split(" ") to split the string into an array of words
    //use .reverse() to rever array
    //use .map to reverse casing
    //use .join(" ") to re-merge array
    return string.split(" ").reverse().map(ele => ele === ele.toLowerCase() ? ele.toUpperCase() : ele.toLowerCase()).join(" ")
  }
  
  console.log(reverseString("aBc"), "AbC")
  console.log(reverseString("aBc XYZ"), "xyz AbC")
  console.log(reverseString("cat  DOG"), "CAT  dog")
  console.log(reverseString("  cat  DOG "), " dog  CAT  ")