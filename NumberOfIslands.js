// Number of Islands
// Medium
// 21.3K
// 457
// Companies
// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water)

// Example 1:

// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1
// Example 2:

// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3

// [1,1]
// [0,1]

// dfs(0,0)
// dfs(row, col)

// dfs(0,0)

// dfs(0,1)  dfs(row, col + 1)
// dfs(1,0)  dfs(row + 1, col)

// dfs(row + 1, col)
// dfs(row - 1, col)
// dfs(row, col + 1)
// dfs(row, col - 1)

var numIslands = function (grid) {
  let height = grid.length;
  let width = grid[0].length;

  let count = 0;

  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      //  ["1","1","0","0","0"] // grid[row][col] grid[0][0]
      //  ["1","1","0","0","0"]
      if (grid[row][col] === '1') {
        count++;
        dfs(row, col);
      }
      // everytime we hit a '1' then increment count
      // dfs call
    }
  }

  // height = 3, row < height
  // width = 3, col < width

  // grid[2][2]

  // grid[row][col]

  function dfs(row, col) {
    // basecase: out of bounds, height/ width or below 0
    if (
      row >= height ||
      col >= width ||
      row < 0 ||
      col < 0 ||
      grid[row][col] === '0'
    ) {
      return;
    } else {
      grid[row][col] = '0';
    }

    // [0, 1, 1]
    // [0, 1, 1]
    // [0, 1, 1]

    // turn the current cell into '0'

    dfs(row + 1, col);
    dfs(row - 1, col);
    dfs(row, col + 1);
    dfs(row, col - 1);
  }

  return count;
};

const grid = [
  ['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '0'],
];

const grid2 = [
  ['1', '1', '0', '0', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '1'],
];

console.log(numIslands(grid2));
