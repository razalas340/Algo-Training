// 55. Jump Game
// Medium
// 18K
// 1K
// Companies
// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.

var canJump = function (nums) {
  let maxReachable = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i > maxReachable) return false;
    maxReachable = Math.max(maxReachable, i + nums[i]);
  }

  return true;
};

const nums = [2, 3, 1, 1, 4];
const nums1 = [3, 2, 1, 0, 4];
console.log(canJump(nums)); // true
console.log(canJump(nums1)); // false

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
