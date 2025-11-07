class Solution {
  /*
    Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.

    An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

    @param {string[]} strs
    @return {string[][]}

    solution: O(n*k) for both time and space where n = number of strings, k = ave string length
  */
  groupAnagrams(strs) {
    const group = new Map() // creating a map to group anagrams

    // parent for loop to loop through each string in the array of strings
    for (const str of strs) {
      const count = new Array(26).fill(0) // create an array for the alphabet

      // child for of loop to count characters for str key
      for (const char of str) {
        // deduct 'a'.charCodeAt(0) from char.charCodeAt(0) to have index-based value inside [] to increment count[difference] properly
        const index = char.charCodeAt(0) - 'a'.charCodeAt(0)
        count[index]++
      }

      const key = count.join(',')

      if (!group.has(key)) {
        group.set(key, [])
      }

      group.get(key).push(str)
    }

    return Array.from(group.values())
  }
}

const strs = ['x']
// [["hat"],["act", "cat"],["stop", "pots", "tops"]]

const test = new Solution()

console.log(test.groupAnagrams(strs))
