/* 
Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.

You may assume that every input has exactly one pair of indices i and j that satisfy the condition.

Return the answer with the smaller index first
*/

class Solution {
  /*
    @param {number[]} nums
    @param {number} target
    @return {number[]}
  */
  twoSum(nums, target) {
    const map = new Map()

    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i]

      if (map.has(complement)) {
        return [map.get(complement), i]
      }

      map.set(nums[i], i)
    }

    return []
  }
}

// nums = [3, 4, 5, 6]    target = 7    would need to return index of 3 and 4 which is 0, 1

nums = [4, 5, 6]
target = 10

const test = new Solution()

console.log(test.twoSum(nums, target))
