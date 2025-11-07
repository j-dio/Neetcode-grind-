/* Given an int arr nums, return true if any value appears at least twice in the array, and
return false if every element is distinct
*/

// use Hashset: time O(n) space O(n)

class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums) {
    return new Set(nums).size !== nums.length
  }
}
