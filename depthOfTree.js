// https://leetcode.com/problems/maximum-depth-of-binary-tree/
// 104. Maximum Depth of Binary Tree
// Solved
// Easy
// Topics
// Companies
// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var maxDepth = function (root) {
  let depth = 0;
  dfs(root);
  return depth;

  function dfs(root) {
    if (root === null) return 0;

    let left = dfs(root.left);
    let right = dfs(root.right);

    return (depth = Math.max(right, left) + 1);
  }
};

//other way to do it...
function dfs(node, lvl) {
  if (node === null) return 0;

  max = Math.max(max, lvl);

  dfs(node.left, lvl + 1);
  dfs(node.right, lvl + 1);
}

// Create the tree for Example 1: [3,9,20,null,null,15,7]
const tree1 = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
);
console.log(maxDepth(tree1)); // Output: 3

// Create the tree for Example 2: [1,null,2]
const tree2 = new TreeNode(1, null, new TreeNode(2));
console.log(maxDepth(tree2)); // Output: 2

// Example 1:

// Input: root = [3,9,20,null,null,15,7]
// Output: 3
// Example 2:

// Input: root = [1,null,2]
// Output: 2
