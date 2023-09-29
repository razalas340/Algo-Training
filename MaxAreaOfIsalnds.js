// 695. Max Area of Island
// Medium
// 9.5K
// 197
// Companies
// You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

// The area of an island is the number of cells with a value 1 in the island.

// Return the maximum area of an island in grid. If there is no island, return 0.

function maxArea(grid) {
  let height = grid.length;
  let width = grid[0].length;

  let sum = 0;

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (grid[i][j] === 1) {
        sum = Math.max(dfs(i, j, 0), sum);
      }
    }
  }
  return sum;

  function dfs(i, j, sum) {
    if (i >= height || j >= width || i < 0 || j < 0 || grid[i][j] === 0) {
      return 0;
    }

    sum++;

    grid[i][j] = 0;

    sum +=
      dfs(i + 1, j, 0) + dfs(i - 1, j, 0) + dfs(i, j + 1, 0) + dfs(i, j - 1, 0);

    return sum;
  }
}

const grid = [
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
];

console.log(maxArea(grid));

// Example 1:

// [
//   [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
//   [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
//   [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
// ];

// Output: 6
// Explanation: The answer is not 11, because the island must be connected 4-directionally.
// Example 2:

// Input: grid = [[0,0,0,0,0,0,0,0]]
// Output: 0
