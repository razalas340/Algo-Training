// 287. Find the Duplicate Number
// Solved
// Medium
// Topics
// Companies
// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

// There is only one repeated number in nums, return this repeated number.

// You must solve the problem without modifying the array nums and uses only constant extra space.
// (linkedList)
var findDuplicate = function (nums) {
  let slow = nums[0];
  let fast = nums[0];
  let first = true;

  // 0 1 2 3 4 (indices)
  // 1 3 4 2 2 (values)

  // 1 -> 3 -> 2 -> 4 -> 2 (cycle on 2)
  //      S
  //           F

  // slow = nums[1] = 3

  // fast = nums[3]

  // 0 1 2 3 4 (indices)
  // 3 1 3 4 2 (values)

  // 3 -> 4 -> 2 -> 3 -> 4 -> 2 -> 3 -> 4

  // [2,5,9,6,9,3,8,9,7,1]

  // 1 - 3 - 4
  // |   |
  //  \ /
  //   2

  while (slow !== fast || first) {
    console.log({ slow, fast });

    first = false;
    slow = nums[slow];

    fast = nums[nums[fast]];
  }

  console.log({ slow, fast });

  slow = nums[0];

  // Indices: 0  1  2  3  4  5  6  7  8  9
  // Values:  2  5  9  6  9  3  8  9  7  1

  // 0 -> 2 -> 9 -> 1 -> 5 -> 3 -> 6 -> 8 -> 7 -> 9
  //                                        s
  //                                       v  F
  // 0 - 2 - 9
  // |       |
  // 9       1
  // |       |
  // 7 - 8   5
  //     |   |
  //     6   3
  //     |   |
  //     4   |
  //     |   |
  //     9 - 9

  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }

  return slow;
};

const test = (nums, expected) => {
  let result = findDuplicate(nums);
  console.log(result === expected ? 'PASSED' : 'FAILED', result);
};

test([1, 3, 4, 2, 2], 2); // Expected output: 2
// test([3,1,3,4,2], 3);
// test([2,5,9,6,9,3,8,9,7,1],9)// Expected output: 3
// test([2,2,2,2,2], 2);       // Expected output: 2
// test([1,2,3,4,5,6,7,8,9,10,5], 5); // Expected output: 5

// Example 1:

// Input: nums = [1,3,4,2,2]
// Output: 2
// Example 2:

// Input: nums = [3,1,3,4,2]
// Output: 3

// Constraints:

// 1 <= n <= 105
// nums.length == n + 1
// 1 <= nums[i] <= n
// All the integers in nums appear only once except for precisely one integer which appears two or more times.
