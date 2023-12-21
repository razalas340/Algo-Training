// 1984. Minimum Difference Between Highest and Lowest of K Scores
// Easy
// Topics
// Companies
// Hint
// You are given a 0-indexed integer array nums, where nums[i] represents the score of the ith student. You are also given an integer k.

// Pick the scores of any k students from the array so that the difference between the highest and the lowest of the k scores is minimized.

// Return the minimum possible difference.

// var minimumDifference = function (nums, k) {
//   nums.sort((a,b) => a - b)

//   let minDiff = Infinity;

//   // [ 1, 4, 7, 9 ]
//   //   0  1  2  3

//   // [ 1, 4, 7, 9 ]
//   // front 0 back 1
//   // front 1 back 2
//   // front 2 back 3

//   // front 0 back 2
//   // front 1 back 3

//   for (let i = 0; i < nums.length - k + 1; i++) {
//     console.log('front', i, 'back', i + k - 1)
//     minDiff = Math.min(minDiff, Math.abs(nums[i] - nums[i + k - 1]));
//   }
//   return minDiff;
// };

// const nums = [9, 4, 1, 7];
// // const nums1 = [87063, 61094, 44530, 21297, 95857, 93551, 9918];
// const k = 3;

// console.log(minimumDifference(nums, k)); // 2

// Example 1:

// Input: nums = [90], k = 1
// Output: 0
// Explanation: There is one way to pick score(s) of one student:
// - [90]. The difference between the highest and lowest score is 90 - 90 = 0.
// The minimum possible difference is 0.
// Example 2:

// Input: nums = [9,4,1,7], k = 2
// Output: 2
// Explanation: There are six ways to pick score(s) of two students:
// - [9,4,1,7]. The difference between the highest and lowest score is 9 - 4 = 5.
// - [9,4,1,7]. The difference between the highest and lowest score is 9 - 1 = 8.
// - [9,4,1,7]. The difference between the highest and lowest score is 9 - 7 = 2.
// - [9,4,1,7]. The difference between the highest and lowest score is 4 - 1 = 3.
// - [9,4,1,7]. The difference between the highest and lowest score is 7 - 4 = 3.
// - [9,4,1,7]. The difference between the highest and lowest score is 7 - 1 = 6.
// The minimum possible difference is 2.
