// https://leetcode.com/problems/network-delay-time/

// 743. Network Delay Time
// Medium
// 7K
// 346
// Companies
// You are given a network of n nodes, labeled from 1 to n. You are also given times, a list of travel times as directed edges times[i] = (ui, vi, wi), where ui is the source node, vi is the target node, and wi is the time it takes for a signal to travel from source to target.

// We will send a signal from a given node k. Return the minimum time it takes for all the n nodes to receive the signal. If it is impossible for all the n nodes to receive the signal, return -1.

// Example 1:

// Input: times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2
// Output: 2
// Example 2:

// Input: times = [[1,2,1]], n = 2, k = 1
// Output: 1
// Example 3:

// Input: times = [[1,2,1]], n = 2, k = 2
//THIS IS USING BELLMAN-FORD ALGO.
const networkDelayTime = (times, N, K) => {
  const time = new Array(N + 1).fill(Infinity);
  time[K] = 0;

  // console.log('hit')

  for (let i = k; i < N; i++) {
    for (let [u, v, w] of times) {
      if (time[u] === Infinity) continue;

      // [2,1,1]
      // u = 2, v = 1, w = 1
      if (time[v] > time[u] + w) {
        time[v] = time[u] + w;
      }
    }
  }

  let result = 0;

  for (let i = 1; i < time.length; i++) {
    let curNum = time[i];
    if (curNum > result) {
      result = curNum;
    }
  }

  return result === Infinity ? -1 : result;
};

const times = [
  [2, 1, 1],
  [2, 3, 1],
  [3, 4, 1],
];
const n = 4;
const k = 2;

console.log('answer', networkDelayTime(times, n, k));
