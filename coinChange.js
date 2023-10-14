// // 322. Coin Change
// // Medium
// // 17.8K
// // 403
// // Companies
// // You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

// // Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// // You may assume that you have an infinite number of each kind of coin.
//DYNAMIC PROGRAMMING
var coinChange = function (coins, amount) {
  let dp = new Array(amount + 1).fill(amount + 1);
  // let dp = new Array(amount + 1).fill(999)

  dp[0] = 0;
  console.log('DP INIT', dp);
  for (let coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
    console.log(dp);
  }

  if (dp[amount] === amount + 1) {
    return -1;
  } else {
    return dp[amount];
  }
};

const coins = [1, 2, 5];
const amount = 11;
// const coins = [2]
// const amount = 4

console.log(coinChange(coins, amount));
