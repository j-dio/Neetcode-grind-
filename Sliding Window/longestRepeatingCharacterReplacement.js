/**
You are given a string s consisting of only uppercase english characters and an integer k. You can choose up to k characters of the string and replace them with any other uppercase English character.

After performing at most k replacements, return the length of the longest substring which contains only one distinct character.

Input: s = "XYYX", k = 2

Output: 4
since replacing either x with y's or y's with x, makes a substring with length 4

Most optimal solution flow:
  - Use sliding window approach to maintain a window of characters
  - Keep track of the count of the most frequent character in the current window using a frequency map
  - Expand the window by moving the right pointer and updating the frequency map
  - If the number of characters to be replaced (window size - max frequency) exceeds k, shrink the window from the left
  - Keep track of the maximum length of the valid window throughout the process
  - Return the maximum length found
*/

class Solution {
  /*
      @param {string} s
      @param {number} k
      @return {number}
     */
  characterReplacement(s, k) {
    let count = new Map();
    let result = 0;
    let maxFreq = 0;

    let left = 0;
    for (let right = 0; right < s.length; right++) {
      count[s[right]] = 1 + (count[s[right]] || 0);
      maxFreq = Math.max(maxFreq, count[s[right]]);

      while (right - left + 1 - maxFreq > k) {
        count[s[left]] -= 1;
        left += 1;
      }
      result = Math.max(result, right - left + 1);
    }

    return result;
  }
}
