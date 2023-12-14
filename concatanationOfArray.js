// 1929. Concatenation of Array
// Solved
// Easy
// Topics
// Companies
// Hint
// Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

// Specifically, ans is the concatenation of two nums arrays.

// Return the array ans.

// https://leetcode.com/problems/concatenation-of-array/submissions/1119586795/

var getConcatenation = function (nums) {
  let ans = [];
  ans.push(nums);
  // [[1,2,1]]
  return ans[0].concat(nums);

  // for (let i = 0; i < nums.length;i++) {
  //   ans.push(nums[i]);
  // }

  // return ans;
};
const nums = [1, 2, 1];
console.log(getConcatenation(nums));
// Output: [1,2,1,1,2,1]

// Example 1:

// Input: nums = [1,2,1]
// Output: [1,2,1,1,2,1]
// Explanation: The array ans is formed as follows:
// - ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
// - ans = [1,2,1,1,2,1]
// Example 2:

// Input: nums = [1,3,2,1]
// Output: [1,3,2,1,1,3,2,1]
// Explanation: The array ans is formed as follows:
// - ans = [nums[0],nums[1],nums[2],nums[3],nums[0],nums[1],nums[2],nums[3]]
// - ans = [1,3,2,1,1,3,2,1]
