/*  Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

Example:
  Input: nums = [1,1,1,2,2,3], k = 2
  Output: [1,2]

*/

class Solution {
  /*
    @param {number[]} nums
    @param {number} k
    @return {number[]}
*/
  topKFrequent(nums, k) {
    const freq = new Map()

    for (const num of nums) {
      if (!freq.has(num)) {
        freq.set(num, (freq.get(num) || 0) + 1)
      } else {
        freq.set(num, freq.get(num) + 1)
      }
    }

    // creates an array form of our freq map in this format [[key1, val1], [key2, val2]]
    const entries = [...freq]

    // now, each element in array is [key, value]
    // so, element[0] = key && element[1] = value
    // sort the values in descending order:
    entries.sort((a, b) => b[1] - a[1])
    // [[keyN, highestValueN], [keyO, 2ndHighestValueO], [keyP, 3rdHighestValueP], ...]

    // we only need to return the keys
    // so, only extract the keys:
    const keys = entries.map((entry) => entry[0])

    // get first k elements by slicing array method
    // slice arguments would then be 0 and the user-defined k since we're returning topKfrequent elements
    const topK = keys.slice(0, k)

    return topK
  }
}

const nums = [1, 1, 1, 2, 2, 3]
const target = 2

let test = new Solution()
let result = test.topKFrequent(nums, target)

console.log(result)
