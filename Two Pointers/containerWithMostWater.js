/*
Problem:
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container that can hold the most water.

Return the maximum amount of water a container can store.

Note: You may not slant the container.

Example 1:
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. 
In this case, the max area of water (blue section) that the container can store is 49.

Example 2:
Input: height = [1,1]
Output: 1

Constraints:
- n == height.length
- 2 <= n <= 3 * 10^4
- 0 <= height[i] <= 3 * 10^4

JavaScript Toolkit:
- Two pointers: left = 0, right = height.length - 1
- Area calculation: Math.min(height[left], height[right]) * (right - left)
- Math.max() to track maximum area
- Move pointer with smaller height (key optimization insight!)

Think about:
- Why do we move the pointer with the smaller height?
- What would happen if we moved the pointer with the larger height instead?
- How does the width decrease as pointers converge?
*/

function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let max = 0;

  while (left < right) {
    // initialize the area by finding smaller height and multiplying this to width
    let area = Math.min(height[left], height[right]) * (right - left);

    if (area > max) {
      max = area;
    }

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return max;
}

// Test cases
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // Expected: 49
console.log(maxArea([1, 1])); // Expected: 1
console.log(maxArea([1, 2, 1])); // Expected: 2
