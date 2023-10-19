// 238. Product of Array Except Self
// Medium
// // 20.2K
// // 1.2K
// // Companies
// // Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// // The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// // You must write an algorithm that runs in O(n) time and without using the division operation.

// var productExceptSelf = function(nums) {
// let result = new Array(nums.length)

// result[0] = 1

// for (let i = 1; i < nums.length; i++){
//   result[i] = nums[i - 1] * result[i - 1]
// }
//   // 0  1  2  3
// // [ 1, 1, 2, 6 ] result

// // [ 24, 12, 8, 6 ] output

//   let product = 1
//  // [1,2,3,4] nums

// // result 6 *= product 1
// // product = product 1 * nums[i] 4

// // result 2 *= product 4
// // product = product 4 * nums[i] 3
// // result 1 *= product 12

//   for (let i = nums.length - 1; i >= 0; i--){
//     result[i] *= product
//     product *= nums[i]
//   }

// return result
//   let preFix = []
//   let postFix = []

//   let product = 1

//   for (let i = 0; i <= nums.length; i++) {
//     preFix.push(product)

//     product *= nums[i]

//   }

//   product = 1

//   for (let j = nums.length - 1; j >= -1; j--){
//     postFix.unshift(product)
//     product *= nums[j]
//   }

//   // { preFix: [ 1, 1, 2, 6, 24 ] }
//   // { postFix: [ 24, 24, 12, 4, 1 ] }
//   // [24,12,8,6]

//   let result = []

//   for (let i = 0; i < nums.length; i++) {
//     result.push(preFix[i] * postFix[i + 1])
//   }

//   return result

// }

// const nums = [1,2,3,4]
// console.log(productExceptSelf(nums))

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]
