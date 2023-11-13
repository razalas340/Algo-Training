// 2348. Number of Zero-Filled Subarrays
// Medium
// Topics
// Companies
// Hint
// Given an integer array nums, return the number of subarrays filled with 0.

// A subarray is a contiguous non-empty sequence of elements within an array.

var zeroFilledSubarray = function (nums) {
  let result = 0;

  // [0,0,0,2,0,0]

  let current = 0;
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];

    if (num === 0) {
      current++;
    } else if (current > 0) {
      result += factorial(current);
      current = 0;
    }
  }
  return (result += factorial(current));

  function factorial(num) {
    let final = 0;

    while (num > 0) {
      final += num;
      num--;
    }
    return final;
  }

  // [0,0,0,2,0,0]
  //  0 0 0
  //  00  00
  //  000

  // 000

  // 3
  // 2
  // 1

  // 0000

  // 4
  // 3
  // 2
  // 1

  // 1 = 1
  // 2 = 3
  // 3 = 6
  // 4 = 10
};

// const nums = [1,3,0,0,2,0,0,4]
const nums1 = [0, 0, 0, 2, 0, 0];
console.log(zeroFilledSubarray(nums1));

// Example 1:

// Input: nums = [1,3,0,0,2,0,0,4]
// Output: 6
// Explanation:
// There are 4 occurrences of [0] as a subarray.
// There are 2 occurrences of [0,0] as a subarray.
// There is no occurrence of a subarray with a size more than 2 filled with 0. Therefore, we return 6.
// Example 2:

// Input: nums = [0,0,0,2,0,0]
// Output: 9
// Explanation:
// There are 5 occurrences of [0] as a subarray.
// There are 3 occurrences of [0,0] as a subarray.
// There is 1 occurrence of [0,0,0] as a subarray.
// There is no occurrence of a subarray with a size more than 3 filled with 0. Therefore, we return 9.
