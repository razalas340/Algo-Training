// 19. Remove Nth Node From End of List
// Medium
// 17.4K
// 719
// Companies
// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// https://leetcode.com/problems/remove-nth-node-from-end-of-list/

// * function ListNode(val, next) {
// *     this.val = (val===undefined ? 0 : val)
// *     this.next = (next===undefined ? null : next)
// * }

var removeNthFromEnd = function (head, n) {
  // 2 pointers, make the spacing size n

  let prev = new ListNode(0);
  prev.next = head;

  let first = prev;
  let second = prev;

  for (let i = 0; i <= n; i++) {
    first = first.next;
  }

  // n = 5, remove 1
  // n = 2, remove 4
  // [ 1, 2, 3, 4, 5 ]
  // [ 1, 2, 3, 5 ]
  // f = 3

  console.log(first.val);

  while (first) {
    // [ 1, 2, 3, 4, 5 ]
    // first 3 second prev
    // first 4 second 1
    // first 5 second 2

    first = first.next;
    second = second.next;
  }
  // first = null, second = 3

  // second = 3 -> 5

  second.next = second.next.next;

  return prev.next;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

// Helper function to convert arrays to linked lists
function arrayToLinkedList(arr) {
  if (arr.length === 0) return null;
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

// Helper function to convert linked lists to arrays (for easier testing and verification)
function linkedListToArray(node) {
  let arr = [];
  while (node) {
    arr.push(node.val);
    node = node.next;
  }
  return arr;
}

// Example 2:

// Input: head = [1], n = 1
// Output: []
// Test case
let list = arrayToLinkedList([1, 2, 3, 4, 5]);
// let list = arrayToLinkedList([1]);

let removed = removeNthFromEnd(list, 2); // remove the 2nd node from the end, which is '4'
// let removed = removeNthFromEnd(list, 1); // remove the 2nd node from the end, which is '4'

console.log(linkedListToArray(removed)); // Expected output: [1, 2, 3, 5]
