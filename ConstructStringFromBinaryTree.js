// https://leetcode.com/problems/construct-string-from-binary-tree/description/
// 606. Construct String from Binary Tree
// Easy
// Topics
// Companies
// Given the root of a binary tree, construct a string consisting of parenthesis and integers from a binary tree with the preorder traversal way, and return it.

// Omit all the empty parenthesis pairs that do not affect the one-to-one mapping relationship between the string and the original binary tree.

// Use Testcase
// Output
// "1(2(4))(2(4))"
// Expected
// "1(2(4))(3)"

var tree2str = function (root) {
  //          1
  //        2   3
  //       4
  // "1(2(4))(3)"
  //          1
  //        2   3
  // "1(2)(3)"

  //    1
  //  2  3
  // N 4

  // Output
  // "1(2(4))(3)"

  // Expected
  // "1(2()(4))(3)"

  //  1
  // 2 3
  //4
  // "1(2(4))(3)"
  if (!root) {
    return '';
  }

  // 1 2 3 4
  let result = root.val.toString();
  // result = 1 += (f(2)) += (f(4)), result = (2(4))
  if (root.left || (!root.left && root.right)) {
    result += `(${tree2str(root.left)})`;
  }

  if (root.right) {
    result += `(${tree2str(root.right)})`;
  }

  return result;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);

let root2 = new TreeNode(1);
root2.left = new TreeNode(2);
root2.right = new TreeNode(3);
root2.left.right = new TreeNode(4);

console.log(tree2str(root)); // Output should be "1(2(4))(3)"
console.log(tree2str(root2)); // Output should be "1(2()(4))(3)"

// Example 1:

// Input: root = [1,2,3,4]
// Output: "1(2(4))(3)"
// Explanation: Originally, it needs to be "1(2(4)())(3()())", but you need to omit all the unnecessary empty parenthesis pairs. And it will be "1(2(4))(3)"
// Example 2:

// Input: root = [1,2,3,null,4]
// Output: "1(2()(4))(3)"
// Explanation: Almost the same as the first example, except we cannot omit the first parenthesis pair to break the one-to-one mapping relationship between the input and the output.
