// 1299. Replace Elements with Greatest Element on Right Side
// Solved
// Easy
// Topics
// Companies
// Hint
// Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

// After doing so, return the array.

var replaceElements = function (arr) {
  //         [17,18,5,4,6,1]
  // Output: [18,6,6,6,1,-1]
  //

  let curHighest = arr[arr.length - 1];

  // [17,18,5,4,6,1]
  //            i
  // curHighest = 1
  // [17,18,5,4,1,-1]
  //

  for (let i = arr.length - 2; i >= 0; i--) {
    let curNum = arr[i];
    arr[i] = curHighest;
    curHighest = Math.max(curHighest, curNum);
  }

  arr[arr.length - 1] = -1;

  return arr;
};

const arr = [17, 18, 5, 4, 6, 1];
