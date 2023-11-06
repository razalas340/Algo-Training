// https://leetcode.com/problems/minimum-distance-between-bst-nodes/
// 783. Minimum Distance Between BST Nodes
// Easy
// Topics
// Companies
// Given the root of a Binary Search Tree (BST), return the minimum difference between the values of any two different nodes in the tree.

// Input: root = [4,2,6,1,3]
// Output: 1

//      7
//    5
//  2  6
// 1

//    4
//  2  6
//1  3

// left = less
// right = greater

//  5
// 0  48
//   8   52
//  7

var minDiffInBST = function (root) {
  //prev can be assigned to keep track of nodes traveresed
  let prev = null;
  //minDiff  assign it  infinity to assure that any of the value of any two nodes encountered is less than it
  let minDiff = Infinity;

  //declare helper function to traverse in order the tree
  const helper = (root) => {
    if (!root) return;

    //invoke helper function passing it the root.left to begin the in order traversal
    helper(root.left);

    //if prev is not null, then we have traversed through the tree and we have found the first node

    if (prev !== null) {
      minDiff = Math.min(minDiff, root.val - prev.val);
    }

    //keep track of the node passed by updating the previous ndoe

    prev = root;

    //recursively invoke helper function passing it the root.right to traverse the tree in order
    helper(root.right);
  };
  //start the in order traversal by passing the root to the helper function

  helper(root);

  //return the minDiff
  return minDiff;
};
// Example 1:

// Input: root = [4,2,6,1,3]
// Output: 1
// Example 2:

// Input: root = [1,0,48,null,null,12,49]
// Output: 1

// Constraints:

// The number of nodes in the tree is in the range [2, 100].
// 0 <= Node.val <= 105

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

let root1 = new TreeNode(4);
root1.left = new TreeNode(2);
root1.left.left = new TreeNode(1);
root1.left.right = new TreeNode(3);
root1.right = new TreeNode(6);

let root2 = new TreeNode(1);
root2.left = new TreeNode(0);
root2.right = new TreeNode(48);
root2.right.left = new TreeNode(12);
root2.right.right = new TreeNode(49);

console.log(minDiffInBST(root1)); // Output should be 1 for the first example
console.log(minDiffInBST(root2)); // Output should be 1 for the second example
