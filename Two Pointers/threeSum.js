/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] 
such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

Example 1:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]

Example 2:
Input: nums = [0,1,1]
Output: []

Example 3:
Input: nums = [0,0,0]
Output: [[0,0,0]]
*/

class Solution {
  /*
      @param {number[]} nums
      @return {number[][]}
     */
  threeSum(nums) {
    let result = [];
    // sort the array first in increasing order
    nums.sort((a, b) => a - b);

    // fix one element with the outer loop
    for (let i = 0; i < nums.length - 2; i++) {
      // nums.length -2 and not -1 since we fix one element
      let fixed = nums[i];

      // skip duplicate fixed elements
      if (i > 0 && nums[i] === nums[i - 1]) continue;

      let left = i + 1; // start after fixed element
      let right = nums.length - 1; // end of array

      // look for sum = -fixed
      while (left < right) {
        const sum = nums[i] + nums[left] + nums[right];

        if (sum === 0) {
          result.push([nums[i], nums[left], nums[right]]);

          // skip duplicates for left and right ptr
          while (left < right && nums[left] === nums[left + 1]) left++;
          while (left < right && nums[right] === nums[right - 1]) right--;

          // move both pointers after skipping dups
          left++;
          right--;
        } else if (sum < 0) {
          left++;
        } else {
          right--;
        }
      }
    }
    return result;
  }
}

// Test cases
let test = new Solution();

console.log(test.threeSum([-1, 0, 1, 2, -1, -4])); // Expected: [[-1,-1,2],[-1,0,1]]
console.log(test.threeSum([0, 1, 1])); // Expected: []
console.log(test.threeSum([0, 0, 0])); // Expected: [[0,0,0]]
