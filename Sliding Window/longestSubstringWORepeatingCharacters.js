/*
Given a string s, find the length of the longest substring without duplicate characters.

A substring is a contiguous sequence of characters within a string.

Input: s = "zxyzxyz"

Output: 3
*/

class Solution {
  /*
     @param {string} s
     @return {number}
     */
  lengthOfLongestSubstring(s) {
    let longestStr = 0;
    let set = new Set();
    let left = 0,
      right = 0;

    // variable-size sliding window pattern
    // wl through the string with right ptr as condition to be lower than string length
    while (right < s.length) {
      // if letter is not in set => add letter to set, change longestStr to max set size, increment right ptr
      if (!set.has(s[right])) {
        set.add(s[right]);
        longestStr = Math.max(longestStr, set.size);
        right++;
      } else {
        // if letter is in set => delete that letter at left ptr, increment left ptr
        set.delete(s[left]);
        left++;
      }
    }
    return longestStr;
  }
}

let s = "zxyzxyz";
let test = new Solution();

let result = test.lengthOfLongestSubstring(s);
console.log(result);
