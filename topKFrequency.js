// 347. Top K Frequent Elements
// Medium
// 16.1K
// 584
// Companies
// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

var topKFrequent = function (nums, k) {
  let map = {};
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (map[num]) {
      map[num]++;
    } else {
      map[num] = 1;
    }
  }

  let array = new Array(nums.length + 1).fill().map(() => []);
  // { '1': 3, '2': 2, '3': 1 }

  //  0   1    2    3    4   5   6  frequency/indexes
  // [], [3], [2], [1], [], [], []

  for (let [key, val] of Object.entries(map)) {
    array[val].push(key);
  }

  // Going backwards on array, add any val to result
  // as long as you have less than k elements in result

  for (let i = array.length - 1; i >= 0; i--) {
    for (let num of array[i]) {
      if (k > 0) {
        result.push(num);
        k--;
      }
    }
  }

  return result;
};

const nums = [1, 1, 1, 2, 2, 3];
const k = 2;

const nums1 = [1, 2];
// console.log(topKFrequent(nums, k))
console.log(topKFrequent(nums1, 2));

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]

// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.

// Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
