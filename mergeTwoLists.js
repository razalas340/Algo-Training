// 21. Merge Two Sorted Lists
// Solved
// Easy
// Topics
// Companies
// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.
// let list1 = arrayToList([1, 2, 4]);
// let list2 = arrayToList([1, 3, 4]);
var mergeTwoLists = function (list1, list2) {
  // list1 = 1 -> 2 -> 4
  // list2 = 1 -> 3 -> 4

  // first -> newNode -> 0 -> list1
  // list1 = list1.next
  let newNode = new ListNode(0);

  // newNode = 0 -> 1 -> 1 -> 2 -> 3 -> 4 -> 4
  // return newNode.next
  let curNode = newNode;

  while (list1 && list2) {
    console.log(curNode.val);

    if (list1.val < list2.val) {
      curNode.next = list1;

      list1 = list1.next;
    } else {
      curNode.next = list2;

      list2 = list2.next;
    }

    curNode = curNode.next;
  }

  curNode.next = list1 || list2;

  console.log(list1.val, list2);

  return newNode.next;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// Helper function to convert array to linked list
function arrayToList(arr) {
  let dummyHead = new ListNode(0);
  let current = dummyHead;

  for (let value of arr) {
    current.next = new ListNode(value);
    current = current.next;
  }

  return dummyHead.next;
}

// Helper function to convert linked list to array
function listToArray(node) {
  let result = [];

  while (node) {
    result.push(node.val);
    node = node.next;
  }

  return result;
}

// Test cases
let list1 = arrayToList([1, 2, 4]);
let list2 = arrayToList([1, 3, 4]);
console.log(listToArray(mergeTwoLists(list1, list2))); // [1, 1, 2, 3, 4, 4]

// list1 = arrayToList([]);
// list2 = arrayToList([]);
// console.log(listToArray(mergeTwoLists(list1, list2))); // []

// list1 = arrayToList([]);
// list2 = arrayToList([0]);
// console.log(listToArray(mergeTwoLists(list1, list2))); // [0]

// Example 1:

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]
