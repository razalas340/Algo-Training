// 684. Redundant Connection
// Medium
// // 5.8K
// // 367
// // Companies
// // In this problem, a tree is an undirected graph that is connected and has no cycles.
// // https://leetcode.com/problems/redundant-connection/
// // You are given a graph that started as a tree with n nodes labeled from 1 to n, with one additional edge added. The added edge has two different vertices chosen from 1 to n, and was not an edge that already existed. The graph is represented as an array edges of length n where edges[i] = [ai, bi] indicates that there is an edge between nodes ai and bi in the graph.
// // Return an edge that can be removed so that the resulting graph is a tree of n nodes. If there are multiple answers, return the answer that occurs last in the input.

var findRedundantConnection = function (edges) {
  function find(parent, i) {
    //       // 1, 2
    if (parent[i] === -1) {
      //         return i;
    }
    return find(parent, parent[i]);
  }

  function union(parent, x, y) {
    //    // parent: [ -1, -1, -1, -1 ]
    //    // parent: [ -1, 2, -1, -1 ]  1,2
    //    // parent: [ -1, 2, 3, -1 ]  1,3

    //    // parent: [ -1, 2, 3, -1 ]  2,3

    //   // 1 2
    const xSet = find(parent, x);
    //   // { xSet: 1 }
    //   // { xSet: 2 }
    //   console.log({xSet})
    const ySet = find(parent, y);
    // //  { ySet: 2 }

    if (xSet !== ySet) {
      parent[xSet] = ySet;
    }
  }
  const n = edges.length;
  const parent = new Array(n + 1).fill(-1);
  //   // { parent: [ -1, -1, -1, -1 ] }
  let redundantEdge = [];
  for (let i = 0; i < n; i++) {
    //       // 1, 2
    const [u, v] = edges[i];
    if (find(parent, u) === find(parent, v)) {
      //           // 2,3
      //           // find 2 -> 3
      //           // find 3 -> 3
      redundantEdge = [u, v];
    } else {
      //           // parent: [ -1, -1, -1, -1 ]
      union(parent, u, v);
      // parent: [ -1, 2, -1, -1 ]
      // console.log(parent)
    }
  }
  // //              0  1  2  3
  // // { parent: [ -1, 2, 3, -1 ] }]
  console.log(find(parent, 1)); // 3
};
const edges = [
  [1, 2],
  [1, 3],
  [2, 3],
];

console.log(findRedundantConnection(edges));
