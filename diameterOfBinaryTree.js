// 543. Diameter of Binary Tree
// Solved
// Easy
// Topics
// Companies
// Given the root of a binary tree, return the length of the diameter of the tree.

// The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

// The length of a path between two nodes is represented by the number of edges between them.
// https://leetcode.com/problems/diameter-of-binary-tree/description/

var diameterOfBinaryTree = function (root) {
  let diameter = 0;
  dfs(root);
  return diameter;

  function dfs(root) {
    if (root === null) {
      return 0;
    }

    let left = dfs(root.left);
    let right = dfs(root.right);

    diameter = Math.max(diameter, left + right);
    return 1 + Math.max(left, right);
  }
};

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// Example usage:

// Create the tree for Example 1: [1,2,3,4,5]
const tree1 = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3)
);
console.log(diameterOfBinaryTree(tree1)); // Output: 3

// Create the tree for Example 2: [1,2]
// const tree2 = new TreeNode(1, new TreeNode(2));
// console.log(diameterOfBinaryTree(tree2)); // Output: 1

// Example 1:

// Input: root = [1,2,3,4,5]
// Output: 3
// Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].
// Example 2:

// Input: root = [1,2]
// Output: 1
