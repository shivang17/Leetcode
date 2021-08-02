/* 
    Description:

->Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

-> You may assume that each input would have exactly one solution, and you may not use the same element twice.

-> You can return the answer in any order.

*/


/* 
    Approach: 

    1) Brute Force Solution (O(n2))
    Run a foor loop and another nested for loop starts with the second element in the array and keep checking till the sum equals the target and push the indices of the input array to a new array.


    let result = [];
    for(let i = 0 ; i< nums.length; i++) {
        for(let j = i+ 1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                result.push(i);
                result.push(j);
            }
        }
    }

    2) HashMap(Object approach)

    Build a hashmap using the input array(For loop). Run another loop to check if the difference between target and the value of element at a particular instant in iteration is not equal to the iterator.

*/


var twoSum = function(nums, target) {
    /* 
        Using HashMap(Object).
    */
    
    let numObj = {};
    for(let i = 0; i< nums.length; i++) {
        let thisNum = nums[i];
        numObj[thisNum] = i;
    }
    
    for(let i = 0; i< nums.length;i++) {
        let difference = target - nums[i];
        if(numObj.hasOwnProperty(difference) && numObj[difference] !== i) {
            return [i, numObj[difference]];
        }
    }
};

console.log(twoSum([2,7,5,11,8],9));