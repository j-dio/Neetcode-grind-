/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.

Given a string s, return true if it is a palindrome, or false otherwise.

Examples:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome
*/
class Solution {
  /*
   @param {string} s
   @return {boolean}
  */

  // helper function for checking if character is alphanumeric
  isAlphaNumeric(char) {
    const code = char.charCodeAt(0)
    return (code >= 48 && code <= 57) || (code >= 65 && code <= 90) || (code >= 97 && code <= 122)
  }

  isPalindrome(s) {
    // create an empty string which we'll add the filtered string later on
    let filteredString = ''

    // loop through all chars for filtering
    for (const char of s) {
      // filter the string using helper function to only leave alphanumeric characters in our string
      if (this.isAlphaNumeric(char)) {
        filteredString += char
      }
    }

    // convert filtered string to lowercase
    filteredString = filteredString.toLowerCase()

    // assign two pointers
    let left = 0
    let right = filteredString.length - 1

    // while-loop for checking if characters match
    while (left < right) {
      if (filteredString[left] !== filteredString[right]) {
        return false
      }
      left++
      right--
    }
    return true
  }
}

let s = 'A man, a plan, a canal: Panama'

let test = new Solution()
let result = test.isPalindrome(s)
console.log(result)
