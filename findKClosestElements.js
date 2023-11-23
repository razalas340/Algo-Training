// 658. Find K Closest Elements
// Medium
// Topics
// Companies
// Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. The result should also be sorted in ascending order.

// An integer a is closer to x than an integer b if:

// |a - x| < |b - x|, or
// |a - x| == |b - x| and a < b

var findClosestElements = function (arr, k, x) {
  let indexOfX = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Math.abs(arr[i] - x) < Math.abs(arr[indexOfX] - x)) {
      indexOfX = i;
    }
  }

  // Initialize the window around the closest element
  let left = indexOfX,
    right = indexOfX;

  // [1,2,3,4,5], k = 4, x = 3
  //      L
  //      R

  // x - arr[left - 1]
  // 1 <= 1

  // Expand the window until it contains k elements
  while (right - left + 1 < k) {
    // Check if we can expand to the left
    if (
      left > 0 &&
      (right === arr.length - 1 || x - arr[left - 1] <= arr[right + 1] - x)
    ) {
      // if (left > 0 ) {
      left--;
    } else {
      right++; // Expand to the right
    }
  }

  // Return the subarray from left to right
  return arr.slice(left, right + 1);
};

// Example 1:

// Input: arr = [1,2,3,4,5], k = 4, x = 3
// Output: [1,2,3,4]

// const arr = [1,2,3,4,5]
// const k = 4
// const x = 3

// const arr = [1]
// const k = 1
// const x = 1

// arr =
// [1,2,2,2,5,5,5,8,9,9]
// k =
// 4
// x =
// 0

// Use Testcase
// Output
// [1,2]
// Expected
// [1,2,2,2]

// const arr = [1,1,1,10,10,10]
// const k = 1
// const x = 9

// const arr = [1,2,2,2,5,5,5,8,9,9]
// const k = 4
// const x = 0

console.log(findClosestElements(arr, k, x));

// Example 1:

// Input: arr = [1,2,3,4,5], k = 4, x = 3
// Output: [1,2,3,4]
// Example 2:

// Input: arr = [1,2,3,4,5], k = 4, x = -1
// Output: [1,2,3,4]
