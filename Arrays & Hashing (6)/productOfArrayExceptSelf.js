/*
Problem:
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operator.

Example 1:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Explanation: 
- answer[0] = 2*3*4 = 24
- answer[1] = 1*3*4 = 12
- answer[2] = 1*2*4 = 8
- answer[3] = 1*2*3 = 6

Example 2:
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

Constraints:
- 2 <= nums.length <= 10^5
- -30 <= nums[i] <= 30
- The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

Key Insights:
- For each index i, result[i] = (product of all elements to the left) * (product of all elements to the right)
- Two-pass approach: first collect left products, then right products
- Can optimize space by using the result array to store left products first

JavaScript Toolkit:
- Array iteration: for loops, array indexing
- Product accumulation: multiply running product
- Two-pass technique: left-to-right, then right-to-left
- Space optimization: reuse result array

Think about:
- How do you handle the "except self" part without division?
- What's the pattern for prefix products? Suffix products?
- How can you do this in O(1) extra space (besides the result array)?

Example walkthrough for [1,2,3,4]:
Left products:  [1, 1, 2, 6]   (product of elements to the left)
Right products: [24,12,4, 1]   (product of elements to the right)
Result:         [24,12,8, 6]   (left * right)
*/

function productExceptSelf(nums) {
  // init new array to store results & set first index to 1 by default
  let result = new Array(nums.length);
  result[0] = 1;

  // for loop the array and populate left products
  for (let i = 1; i < nums.length; i++) {
    result[i] = result[i - 1] * nums[i - 1];
  }

  // init right product variable
  let rightProduct = 1;
  // for loop the array backwards and populate right products
  for (let j = nums.length - 1; j > -1; j--) {
    result[j] *= rightProduct;
    rightProduct *= nums[j];
  }

  return result;
}

// Test cases
console.log(productExceptSelf([1, 2, 3, 4])); // Expected: [24,12,8,6]
console.log(productExceptSelf([-1, 1, 0, -3, 3])); // Expected: [0,0,9,0,0]
console.log(productExceptSelf([2, 3, 4, 5])); // Expected: [60,40,30,24]
