// 572. Subtree of Another Tree
// Solved
// Easy
// Topics
// Companies
// Hint
// https://leetcode.com/problems/subtree-of-another-tree/description/
// Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

// A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.

// https://excalidraw.com/%23room=90a427dcb47b23110529,NLWurNyBLAOxAXq5IG6iWg#room=ad7855e0f57494c57a43,y9-RMSe9g3dT7YDfAbMRLA

var isSubtree = function (root, subRoot) {
  return dfs(root, subRoot);

  function dfs(r1) {
    if (!r1) return false;

    if (r1.val === subRoot.val) {
      if (dfs2(r1, subRoot)) {
        return true;
      }
    }

    return dfs(r1.left) || dfs(r1.right);
  }
  //3
  //4   5                   //4
  //  1   2                 //  1   2
  //
  function dfs2(r1, r2) {
    if (!r1 && !r2) return true;
    if (!r1 || !r2) return false;

    if (r1.val !== r2.val) return false;

    return dfs2(r1.left, r2.left) && dfs2(r1.right, r2.right);
  }
};

// Example 1:

// Input: root = [3,4,5,1,2], subRoot = [4,1,2]
// Output: true
// Example 2:

// Input: root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]
// Output: false
