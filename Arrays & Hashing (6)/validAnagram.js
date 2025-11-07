// Given two strings s and t, return true if t is an anagram of s, and false otherwise

// anagram is where each char of two strings have the same frequency e.g somes & moses

// by default, if string length is not equal for s and t, then return false
// we can use an array to count the frequency of the character of s
// loop through cars of t
// if a char is not found, then return false
// if found, deduct count[char]
// return true

function validAnagram(s, t) {
  if (s.length !== t.length) return false

  const count = {}

  for (const char of s) {
    count[char] = (count[char] || 0) + 1 // consider 0 since for first encounter, count[char] doesn't exist yet
  }

  for (const char of t) {
    if (!count[char]) return false
    count[char]--
  }

  return true
}
