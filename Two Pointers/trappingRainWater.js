/*
Problem:
Given n non-negative integers representing an elevation map where the width of each bar 
is 1, compute how much water it can trap after raining.

Example 1:
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. 
In this case, 6 units of rain water (blue section) are being trapped.

Example 2:
Input: height = [4,2,0,3,2,5]
Output: 9

Constraints:
- n == height.length
- 1 <= n <= 2 * 10^4
- 0 <= height[i] <= 3 * 10^4

Key Insights:
- Water at any position is trapped based on the minimum of:
  - Maximum height to its LEFT
  - Maximum height to its RIGHT
- Water level = min(leftMax, rightMax) - currentHeight
- Two pointers approach: track leftMax and rightMax as you go

JavaScript Toolkit:
- Two pointers: left = 0, right = height.length - 1
- Track leftMax and rightMax values
- Move pointer with smaller max height
- Accumulate trapped water

Think about:
- Why do we move the pointer with the smaller "max" value?
- How does this ensure we always have the correct water level?
- What happens when leftMax < rightMax vs rightMax < leftMax?
*/

function trap(height) {
  // init 2 ptrs, left & right max, total water
  let left = 0;
  let right = height.length - 1;
  let leftMax = 0,
    rightMax = 0;
  let totalWater = 0;

  // wl 2 ptrs
  while (left < right) {
    // init left water and right water
    let waterLeft = 0,
      waterRight = 0;

    // check if which pointer has a lesser value and prioritize that one since the greater value is guaranteed to be tall enough to hold water
    // process the shorter side:
    // init sideMax to latest max height
    // init waterSide to sideMax - height[side]
    // add waterSide to totalWater
    // move side pointer inward
    if (height[left] < height[right]) {
      leftMax = Math.max(leftMax, height[left]);
      waterLeft = leftMax - height[left];
      totalWater += waterLeft;
      left++;
    } else {
      rightMax = Math.max(rightMax, height[right]);
      waterRight = rightMax - height[right];
      totalWater += waterRight;
      right--;
    }
  }
  return totalWater;
}

// Test cases
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // Expected: 6
console.log(trap([4, 2, 0, 3, 2, 5])); // Expected: 9
console.log(trap([3, 0, 2, 0, 4])); // Expected: 7
