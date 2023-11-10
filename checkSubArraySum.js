// 523. Continuous Subarray Sum
// Medium
// Topics
// Companies
// Given an integer array nums and an integer k, return true if nums has a good subarray or false otherwise.

// A good subarray is a subarray where:

// its length is at least two, and
// the sum of the elements of the subarray is a multiple of k.
// Note that:

// A subarray is a contiguous part of the array.

// An integer x is a multiple of k if there exists an integer n such that x = n * k. 0 is always a multiple of k.

// https://leetcode.com/problems/continuous-subarray-sum/

let nums = [5, 0, 0, 0];
// [23,2,4,6,7]
let k = 6;
console.log(checkSubarraySum(nums, k));

var checkSubarraySum = function (nums, k) {
  let sum = 0;
  let sumMap = { 0: -1 }; // Map to store cumulative sums and their corresponding indices

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (k !== 0) {
      sum = sum % k; // If k is not 0, take the modulo to handle negative numbers
    }

    if (sumMap.hasOwnProperty(sum)) {
      if (i - sumMap[sum] > 1) {
        return true; // Found a subarray with length at least two
      }
    } else {
      sumMap[sum] = i;
    }
  }

  return false;
};

// Example 1:

// Input: nums = [23,2,4,6,7], k = 6
// Output: true
// Explanation: [2, 4] is a continuous subarray of size 2 whose elements sum up to 6.
// Example 2:

// Input: nums = [23,2,6,4,7], k = 6
// Output: true
// Explanation: [23, 2, 6, 4, 7] is an continuous subarray of size 5 whose elements sum up to 42.
// 42 is a multiple of 6 because 42 = 7 * 6 and 7 is an integer.
// Example 3:

// Input: nums = [23,2,6,4,7], k = 13
// Output: false
