// 238. Product of Array Except Self
// Medium
// 20.2K
// 1.2K
// Companies
// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.
// var productExceptSelf = function(nums) {

//   let preFix = new Array(nums.length).fill(1)
//   let postFix = new Array(nums.length).fill(1)

// // [ 1, 2, 6, 24 ]
//   let result = new Array(nums.length).fill(1)

//   for (let i = 1; i <= nums.length; i++){
//     preFix[i] = preFix[i - 1] * nums[i - 1]
//   }

//   // console.log(preFix)
//   // console.log(postFix)

// // [ 1,  1,  2, 6, 24 ]
// // [ 24, 12, 4, 1 ]
// //  [24,12,8,   6]
//   // let result = []

//   for (let i = 0; i < preFix.length - 1; i++){

//     result.push(preFix[i] * postFix[i])

//   }
//   return result
