var longestConsecutive = function (nums) {
  let numSet = new Set(nums);

  let max = 0;

  for (let num of numSet) {
    if (!numSet.has(num - 1)) {
      let count = 0;
      while (numSet.has(num)) {
        count++;
        num++;
        max = Math.max(max, count);
      }
    }
  }

  return max;
};

// const nums = [100,4,200,1,3,2]
const nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
// const nums = [0,0]

console.log(longestConsecutive(nums));
