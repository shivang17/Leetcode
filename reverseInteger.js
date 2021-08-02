/* 
    Description: Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).scription: 

*/

/* 
    Approach: Run a while loop until the number is zero.

    Remove the last digit through reminder and make the new number by removing the last digit.

    Add the last digit as the first one and multiply the other one by 10.
*/

var reverse = function(x) {
    let lastNum = 0;
    let reverseNum = 0;

    while(x!==0) {
        lastNum = x % 10;
        x = parseInt(x/10);
        reverseNum = reverseNum * 10 + lastNum;

        if(reverseNum < Math.pow(-2,31) || reverseNum > Math.pow(2,31)) {
            return 0;
        }
    }
    return reverseNum;
}

console.log(reverse(123));