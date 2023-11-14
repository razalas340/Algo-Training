// 283. Move Zeroes
// Solved
// Easy
// Topics
// Companies
// Hint
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

var moveZeroes = function (nums) {
  //create two pointers
  let left = 0;
  let p = 0;
  //iterate through arr

  // check if nums[i] !== 0
  // nums[p] = nums[i]
  // p++

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[p] = nums[i];
      p++;
    }
    // console.log(nums)

    // 0,1,0,3,1

    // p = 0 + 1, + 1, + 1
    // nums[p] = num[i]
    // p++
    // 3

    //if you find a 0 then
  }

  // 1, 3, 12, 0, 12
  // 0  1   2  3  4  index
  for (let i = p; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums;
};

const nums = [0, 1, 0, 3, 12];
console.log(moveZeroes(nums));
