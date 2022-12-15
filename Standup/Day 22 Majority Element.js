// https://leetcode.com/problems/majority-element/description/

// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.


/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const obj = {}
    for(const num of nums){
        console.log(num)
        obj[num] = obj[num]+1 || 1
    }
    let answer = 0
    let sum = 0
    for(const num in obj){
        if(obj[num] > sum){
            answer = num
            sum = obj[num]
        }
    }
    return answer
};