// 100. Same Tree
// Solved
// Easy
// Topics
// Companies
// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

// https://leetcode.com/problems/same-tree/description/
// https://excalidraw.com/%23room=90a427dcb47b23110529,NLWurNyBLAOxAXq5IG6iWg
var isSameTree = function (p, q) {
  return dfs(p, q);

  function dfs(p, q) {
    //   1
    // 2   1

    //   1
    // 1   2

    if (!p && !q) {
      return true;
    }

    if ((!p && q) || (p && !q)) {
      return false;
    }

    if (p.val !== q.val) {
      return false;
    }

    return dfs(p.left, q.left) && dfs(p.right, q.right);
  }
};
