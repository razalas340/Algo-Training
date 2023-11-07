// https://leetcode.com/problems/binary-tree-level-order-traversal/
// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

// https://leetcode.com/problems/symmetric-tree/
// 101. Symmetric Tree
// Solved
// Easy
// Topics
// Companies
// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

// [1,2,2,3,4,4,3]

var isSymmetric = function (root) {
  return dfs(root.left, root.right);

  function dfs(left, right) {
    // 2 2
    if (!left && !right) {
      return true;
    }

    if (!left || !right || left.val !== right.val) {
      return false;
    }

    return dfs(left.left, right.right) && dfs(left.right, right.left);
  }
};

// The tree is:
//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3
let root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.right = new TreeNode(2);
// root1.left.left = new TreeNode(3);
// root1.left.right = new TreeNode(4);
// root1.right.left = new TreeNode(4);
// root1.right.right = new TreeNode(3);
// Expected Output: true

console.log(isSymmetric(root1));

// Example 1:

// Input: root = [1,2,2,3,4,4,3]
// Output: true
// Example 2:

// Input: root = [1,2,2,null,3,null,3]
// Output: false
