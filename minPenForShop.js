// Code
// Testcase
// Test Result
// Test Result
// 2483. Minimum Penalty for a Shop
// Solved
// Medium
// Topics
// Companies
// Hint
// You are given the customer visit log of a shop represented by a 0-indexed string customers consisting only of characters 'N' and 'Y':

// if the ith character is 'Y', it means that customers come at the ith hour
// whereas 'N' indicates that no customers come at the ith hour.
// If the shop closes at the jth hour (0 <= j <= n), the penalty is calculated as follows:

// For every hour when the shop is open and no customers come, the penalty increases by 1.
// For every hour when the shop is closed and customers come, the penalty increases by 1.
// Return the earliest hour at which the shop must be closed to incur a minimum penalty.

// Note that if a shop closes at the jth hour, it means the shop is closed at the hour j.

// Example 1:

// Input: customers = "YYNY"
// Output: 2
// Explanation:
// - Closing the shop at the 0th hour incurs in 1+1+0+1 = 3 penalty.
// - Closing the shop at the 1st hour incurs in 0+1+0+1 = 2 penalty.
// - Closing the shop at the 2nd hour incurs in 0+0+0+1 = 1 penalty.
// - Closing the shop at the 3rd hour incurs in 0+0+1+1 = 2 penalty.
// - Closing the shop at the 4th hour incurs in 0+0+1+0 = 1 penalty.
// Closing the shop at 2nd or 4th hour gives a minimum penalty. Since 2 is earlier, the optimal closing time is 2.
// Example 2:

// Input: customers = "NNNNN"
// Output: 0
// Explanation: It is best to close the shop at the 0th hour as no customers arrive.

// Hint 1
// At any index, the penalty is the sum of prefix count of ‘N’ and suffix count of ‘Y’.
// Hint 2
// Enumerate all indices and find the minimum such value.

var bestClosingTime = function (customers) {
  let prefix = [0];

  let penalty = 0;

  for (let i = 0; i < customers.length; i++) {
    let num = customers[i];
    if (num === 'N') {
      penalty++;

      prefix.push(penalty);
    } else {
      prefix.push(penalty);
    }
  }
  penalty = 0;

  let min = Infinity;
  let result = -1;

  for (let i = customers.length; i >= 0; i--) {
    let num = customers[i];
    if (num === 'Y') {
      penalty++;
    }

    prefix[i] += penalty;

    if (prefix[i] <= min) {
      min = prefix[i];
      result = i;
    }
  }
  return result;
};

// const customers = "YYNY";
const customers = 'YYYY'; // 4

console.log(bestClosingTime(customers));
