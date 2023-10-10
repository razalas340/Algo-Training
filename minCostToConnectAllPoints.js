// 1584. Min Cost to Connect All Points
// Medium
// 4.7K
// 111
// Companies
// You are given an array points representing integer coordinates of some points on a 2D-plane, where points[i] = [xi, yi].

// The cost of connecting two points [xi, yi] and [xj, yj] is the manhattan distance between them: |xi - xj| + |yi - yj|, where |val| denotes the absolute value of val.

// Return the minimum cost to make all points connected. All points are connected if there is exactly one simple path between any two points.

// Example 1:

// Input: points = [[0,0],[2,2],[3,10],[5,2],[7,0]]
// Output: 20
// Explanation:

var minCostConnectPoints = function (points) {
  const manhattan = (p1, p2) => {
    // |xi - xj| + |yi - yj| manhattan
    return Math.abs(p1[0] - p2[0]) + Math.abs(p1[1] - p2[1]);
  };

  // Helper function: find with path compression
  const find = (x, parent) => {
    if (parent[x] !== x) {
      parent[x] = find(parent[x], parent);
    }
    return parent[x];
  };

  // Number of points
  const n = points.length;

  // Generate all possible edges with weights

  let edges = [];
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      // i = 0, j = 1
      // [0,0] - [2,2], 4, edges  [ 0, 1, 4 ]
      edges.push([i, j, manhattan(points[i], points[j])]);
    }
  }

  // points
  //   0     1      2     3     4     node
  // [[0,0],[2,2],[3,10],[5,2],[7,0]]

  // 0,0 2,2

  //   [
  //   [ 0, 1, 4 ],  [ 0, 2, 13 ],
  //   [ 0, 3, 7 ],  [ 0, 4, 7 ],
  //   [ 1, 2, 9 ],  [ 1, 3, 3 ],
  //   [ 1, 4, 7 ],  [ 2, 3, 10 ],
  //   [ 2, 4, 14 ], [ 3, 4, 4 ]
  // ]

  //   [
  //   [ 1, 3, 3 ],  [ 0, 1, 4 ],
  //   [ 3, 4, 4 ],  [ 0, 3, 7 ],
  //   [ 0, 4, 7 ],  [ 1, 4, 7 ],
  //   [ 1, 2, 9 ],  [ 2, 3, 10 ],
  //   [ 0, 2, 13 ], [ 2, 4, 14 ]
  // ]

  // Sort edges based on weights
  edges.sort((a, b) => a[2] - b[2]);

  let parent = Array.from({ length: n }, (_, idx) => idx);

  // [ 0, 1, 2, 3, 4 ] parent

  let cost = 0;
  let count = 1; // We start with a single node, so the count is initialized to 1

  //   [ edges
  //   [ 1, 3, 3 ],  [ 0, 1, 4 ],
  //   [ 3, 4, 4 ],  [ 0, 3, 7 ],
  //   [ 0, 4, 7 ],  [ 1, 4, 7 ],
  //   [ 1, 2, 9 ],  [ 2, 3, 10 ],
  //   [ 0, 2, 13 ], [ 2, 4, 14 ]
  // ]

  // [ 0, 3, 2, 3, 4 ] parent

  // points

  //   0     1     2      3      4
  // [[0,0],[2,2],[3,10],[5,2],[7,0]]

  for (let [i, j, w] of edges) {
    // 1 3 3
    let rootI = find(i, parent);
    let rootJ = find(j, parent);

    // If the two nodes belong to different trees, union them
    if (rootI !== rootJ) {
      cost += w;
      parent[rootI] = rootJ;
      count++;

      // If all nodes are in the same tree, break
      if (count === n) {
        break;
      }
    }
  }

  return cost;
};
const points = [
  [0, 0],
  [2, 2],
  [3, 10],
  [5, 2],
  [7, 0],
];

console.log(minCostConnectPoints(points));
// output: 20
