// https://leetcode.com/problems/path-with-maximum-probability/

// 1514. Path with Maximum Probability
// Medium
// 3K
// 66
// Companies
// You are given an undirected weighted graph of n nodes (0-indexed), represented by an edge list where edges[i] = [a, b] is an undirected edge connecting the nodes a and b with a probability of success of traversing that edge succProb[i].

// Given two nodes start and end, find the path with the maximum probability of success to go from start to end and return its success probability.

// If there is no path from start to end, return 0. Your answer will be accepted if it differs from the correct answer by at most 1e-5.

// Example 1:

// Input: n = 3, edges = [[0,1],[1,2],[0,2]], succProb = [0.5,0.5,0.2], start = 0, end = 2
// Output: 0.25000
// Explanation: There are two paths from start to end, one having a probability of success = 0.2 and the other has 0.5 * 0.5 = 0.25.
//Using dijkstras algo
var maxProbability = function (n, edges, succProb, start, end) {
  const MIN = Number.MIN_SAFE_INTEGER;
  const m = edges.length;

  const adjList = {};
  const dists = new Array(n).fill(MIN);

  for (let i = 0; i < n; i++) {
    adjList[i] = [];
  }

  for (let i = 0; i < m; i++) {
    const [u, v] = edges[i];
    const weight = succProb[i];

    adjList[u].push([v, weight]);
    adjList[v].push([u, weight]);
  }

  const maxHeap = new MaxPriorityQueue({ priority: (x) => x[1] });

  maxHeap.enqueue([start, 1]);

  while (!maxHeap.isEmpty()) {
    const [node, prob] = maxHeap.dequeue().element;

    if (node === end) return prob;
    if (dists[node] > prob) continue;

    for (const [nei, weight] of adjList[node]) {
      if (prob * weight > dists[nei]) {
        dists[nei] = prob * weight;
        maxHeap.enqueue([nei, dists[nei]]);
      }
    }
  }

  return 0;
};
