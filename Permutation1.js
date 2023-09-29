// 46. Permutations
// Medium
// 17.9K
// 290
// Companies
// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

// function permutations(nums){

//  let result = []
//   dfs(nums,[])
//   return result

//   function dfs( nums, curNums){

//     if (curNums.length === nums.length){
//       return result.push([...curNums])
//     }

//     for (let i = 0; i < nums.length; i++){
//       let num = nums[i]

//           if (curNums.includes(num)) {
//             continue
//           }

//       curNums.push(num)
//       dfs(nums, curNums)
//       curNums.pop()

//     }

//   }

// }

// const nums = [1,2,3]
// console.log(permutations(nums))

// function permutations(nums) {
//     let result = [];
//     dfs(0);
//     return result;

//     function dfs(start) {
//         if (start === nums.length - 1) {
//             result.push([...nums]);
//             return;
//         }

//         for (let i = start; i < nums.length; i++) {
//             [nums[start], nums[i]] = [nums[i], nums[start]];  // swap
//             dfs(start + 1);
//             [nums[start], nums[i]] = [nums[i], nums[start]];  // revert swap (backtrack)
//         }
//     }
// }

// const nums = [1, 2, 3];
// console.log(permutations(nums));

// Example 1:

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// Example 2:

// Input: nums = [0,1]
// Output: [[0,1],[1,0]]
// Example 3:

// Input: nums = [1]
// Output: [[1]]
