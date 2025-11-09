/*
Given an array of integers numbers that is sorted in non-decreasing order.

Return the indices (1-indexed) of two numbers, [index1, index2], such that they add up to a given target number target and index1 < index2. Note that index1 and index2 cannot be equal, therefore you may not use the same element twice.

There will always be exactly one valid solution.

Your solution must use O(1)O(1) additional space.
*/

class Solution {
  /*
      @param {number[]} numbers
      @param {number} target
      @return {number[]}
     */
  twoSum(numbers, target) {
    let left = 0,
      right = numbers.length - 1;

    while (left < right) {
      const sum = numbers[left] + numbers[right];

      if (sum === target) {
        return [left + 1, right + 1];
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
    return [left + 1, right + 1];
  }
}

//  target = 9 => [1,2]

let nums = [2, 7, 11, 15];
let target = 9;

let test = new Solution();
let result = test.twoSum(nums, target);
console.log(result);
