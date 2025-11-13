/**
You are given a string s consisting of only uppercase english characters and an integer k. You can choose up to k characters of the string and replace them with any other uppercase English character.

After performing at most k replacements, return the length of the longest substring which contains only one distinct character.

Input: s = "XYYX", k = 2

Output: 4
since replacing either x with y's or y's with x, makes a substring with length 4
*/

class Solution {
  /*
   * SOLUTION FLOW:
   * 1. Use sliding window technique with two pointers (left and right)
   * 2. Maintain a frequency map to count characters in current window
   * 3. Track the maximum frequency of any character in the current window
   * 4. Expand window by moving right pointer, shrink when invalid
   * 5. Window is invalid when: (window_size - max_frequency) > k
   *    - This means we need more than k replacements to make all chars the same
   * 6. Keep track of the maximum valid window size encountered
   * 
   * TIME COMPLEXITY: O(n) - each character is visited at most twice
   * SPACE COMPLEXITY: O(1) - frequency map stores at most 26 characters
   * 
   * @param {string} s - input string of uppercase English letters
   * @param {number} k - maximum number of character replacements allowed
   * @return {number} - length of longest substring with same character after replacements
   */
  characterReplacement(s, k) {
    // Frequency map to track character counts in current window
    let count = new Map();
    // Result stores the maximum valid window size found
    let result = 0;
    // Track the highest frequency of any single character in current window
    let maxFreq = 0;

    // Left pointer of sliding window
    let left = 0;
    // Expand window using right pointer
    for (let right = 0; right < s.length; right++) {
      // Add current character to frequency map
      count[s[right]] = 1 + (count[s[right]] || 0);
      
      // Update max frequency with the newly added character's count
      maxFreq = Math.max(maxFreq, count[s[right]]);

      // Check if current window is invalid
      // (window_size - max_frequency) represents chars that need to be replaced
      // If this exceeds k, we need to shrink the window
      while (right - left + 1 - maxFreq > k) {
        // Remove leftmost character from frequency map
        count[s[left]] -= 1;
        // Shrink window by moving left pointer
        left += 1;
      }
      
      // Update result with current valid window size
      result = Math.max(result, right - left + 1);
    }

    return result;
  }
}
