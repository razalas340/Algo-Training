var makeUnions = function (edges) {
  function find(parent, i) {
    if (parent[i] === -1) {
      return i;
    }
    return find(parent, parent[i]);
  }

  function union(parent, x, y) {
    const xSet = find(parent, x);
    const ySet = find(parent, y);
    if (xSet !== ySet) {
      parent[xSet] = ySet;
    }
  }

  const n = edges.length;

  const parent = new Array(n + 1).fill(-1);

  for (let i = 0; i < n; i++) {
    const [u, v] = edges[i];
    union(parent, u, v);
  }

  return parent;
};

const edges = [
  [1, 2],
  [1, 3],
  [2, 3],
  [3, 4],
  [4, 5],
  [1, 5],
];

console.log(makeUnions(edges));
