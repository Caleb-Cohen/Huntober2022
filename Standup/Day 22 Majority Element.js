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