// 283. Move Zeroes
// Solved
// Easy
// Topics
// Companies
// Hint
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// var moveZeroes = function(nums) {
// //create two pointers
//   let left = 0
//   let p = 0
//   //iterate through arr

//   // check if nums[i] !== 0
//   // nums[p] = nums[i]
//   // p++

//  for (let i = 0 ; i < nums.length ; i++){
//   if(nums[i] !== 0) {
//     nums[p] = nums[i]
//       p++
//   }
//    // console.log(nums)

//   // 0,1,0,3,1

//   // p = 0 + 1, + 1, + 1
//   // nums[p] = num[i]
//   // p++
//   // 3

//   //if you find a 0 then
// }

//   // 1, 3, 12, 0, 12
//   // 0  1   2  3  4  index
//   for (let i = p ; i < nums.length ; i++) {
//       nums[i] = 0;

//     }
//   return nums
//   }

// const nums = [0,1,0,3,12]
// console.log(moveZeroes(nums))

// 18. 4Sum
// Medium
// Topics
// Companies
// Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

// 0 <= a, b, c, d < n
// a, b, c, and d are distinct.
// nums[a] + nums[b] + nums[c] + nums[d] == target
// You may return the answer in any order.

var fourSum = function (nums, target) {
  let result = [];

  nums.sort((a, b) => a - b);

  // [-2,-1,-1,1,1,2,2]
  //      i      j
  // -2 + -1 + -1 + 2

  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;

      let left = j + 1;
      let right = nums.length - 1;

      while (left < right) {
        let sum = nums[i] + nums[j] + nums[left] + nums[right];
        if (sum === target) {
          result.push([nums[i], nums[j], nums[left], nums[right]]);

          while (left < right && nums[left] === nums[left + 1]) {
            left++;
          }
          while (left < right && nums[right] === nums[right - 1]) {
            right--;
          }
          left++;
          right--;
        } else if (sum < target) {
          while (left < right && nums[left] === nums[left + 1]) {
            left++;
          }
          left++;
        } else {
          while (left < right && nums[right] === nums[right - 1]) {
            right--;
          }
          right--;
        }
      }
    }
  }

  return result;
};

const nums = [-2, -1, -1, 1, 1, 2, 2];
const target = 0;
console.log(fourSum(nums, target));

// Example 1:

// Input: nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
// Example 2:

// Input: nums = [2,2,2,2,2], target = 8
// Output: [[2,2,2,2]]
