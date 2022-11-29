// https://www.codewars.com/kata/59f08f89a5e129c543000069/train/javascript

// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

function dup(s) {
    return s.map(ele => ele.split("").filter((e,i,a) => e != a[i-1]).join(""))
  };