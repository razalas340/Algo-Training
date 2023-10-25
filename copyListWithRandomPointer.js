// 138. Copy List with Random Pointer
// Medium
// 13.1K
// 1.3K
// Companies
// A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null.

// Construct a deep copy of the list. The deep copy should consist of exactly n brand new nodes, where each new node has its value set to the value of its corresponding original node. Both the next and random pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list.

// For example, if there are two nodes X and Y in the original list, where X.random --> Y, then for the corresponding two nodes x and y in the copied list, x.random --> y.

// Return the head of the copied linked list.

// The linked list is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:

// val: an integer representing Node.val
// random_index: the index of the node (range from 0 to n-1) that the random pointer points to, or null if it does not point to any node.
// Your code will only be given the head of the original linked list.

//  * function Node(val, next, random) {
//  *    this.val = val;
//  *    this.next = next;
//  *    this.random = random;
//  * };

// https://leetcode.com/problems/copy-list-with-random-pointer/
var copyRandomList = function (head) {
  // 7 -> 13 -> 11 -> 10
  // v     v
  // null  7

  // Input
  // [[7,null],[13,0],[11,4],[10,2],[1,0]]

  // Use Testcase
  // Output
  // [[7,null]]
  // Expected
  // [[7,null],[13,0],[11,4],[10,2],[1,0]]

  let map = new Map();

  let current = head;
  //making clones
  while (current) {
    map.set(current, new Node(current.val));
    current = current.next;
  }

  current = head;

  while (current) {
    let newNode = map.get(current);

    //grab new clone from current and attach it to next and random
    if (current.next) {
      newNode.next = map.get(current.next);
      console.log(newNode);
    } else {
      newNode.next = null;
    }

    if (current.random) {
      newNode.random = map.get(current.random);
    } else {
      newNode.random = null;
    }

    current = current.next;
  }

  return map.get(head);

  // head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
};

function Node(val, next, random) {
  this.val = val;
  this.next = next;
  this.random = random;
}

// Helper function to convert arrays to linked lists with random pointers
function arrayToRandomLinkedList(arr) {
  if (!arr.length) return null;

  let nodes = arr.map((item) => new Node(item[0], null, null));
  for (let i = 0; i < arr.length; i++) {
    if (i < arr.length - 1) nodes[i].next = nodes[i + 1];
    if (arr[i][1] !== null) nodes[i].random = nodes[arr[i][1]];
  }
  return nodes[0];
}

// Helper function to convert linked lists with random pointers to arrays (for easier testing and verification)
function randomLinkedListToArray(node) {
  let arr = [];
  let map = new Map(); // to keep track of node to index mapping
  let index = 0;
  let temp = node;

  // First, map nodes to their indices
  while (temp) {
    map.set(temp, index++);
    temp = temp.next;
  }

  temp = node;
  while (temp) {
    arr.push([temp.val, temp.random ? map.get(temp.random) : null]);
    temp = temp.next;
  }

  return arr;
}

// Test cases
let test1 = arrayToRandomLinkedList([
  [7, null],
  [13, 0],
  [11, 4],
  [10, 2],
  [1, 0],
]);
let copy1 = copyRandomList(test1);
console.log(randomLinkedListToArray(copy1));

// let test2 = arrayToRandomLinkedList([[1, 1], [2, 1]]);
// let copy2 = copyRandomList(test2);
// console.log(randomLinkedListToArray(copy2));

// let test3 = arrayToRandomLinkedList([[3, null], [3, 0], [3, null]]);
// let copy3 = copyRandomList(test3);
// console.log(randomLinkedListToArray(copy3));

// let test4 = arrayToRandomLinkedList([]);  // edge case: empty list
// let copy4 = copyRandomList(test4);
// console.log(randomLinkedListToArray(copy4));
