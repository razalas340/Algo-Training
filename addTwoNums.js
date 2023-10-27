// 2. Add Two Numbers
// Solved
// Medium
// Topics
// Companies
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
// https://leetcode.com/problems/add-two-numbers/
var addTwoNumbers = function (l1, l2) {
  // l1 = [2,4,3],
  // l2 = [5,6,4]

  let result = new ListNode(0);
  let current = result;

  let curSum = 0;

  while (l1 || l2) {
    if (l1) {
      curSum += l1.val;
      l1 = l1.next;
    }

    if (l2) {
      curSum += l2.val;
      l2 = l2.next;
    }
    // 1
    // 3 4 2
    // 4 6 5
    // 8 0 7

    // l1 = [2,4,3],
    // l2 = [5,6,4]
    // R ->  7 0 8

    if (curSum > 9) {
      let newNode = new ListNode(curSum - 10);
      curSum = 1;
      current.next = newNode;
    } else {
      let newNode = new ListNode(curSum);
      current.next = newNode;
      curSum = 0;
    }
    current = current.next;
  }

  if (curSum > 0) {
    let newNode = new ListNode(1);
    current.next = newNode;
  }

  return result.next;

  // 2
  // 5
};

// Example 1:

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

// function ListNode(val, next) {
//     this.val = (val === undefined ? 0 : val);
//     this.next = (next === undefined ? null : next);
// }

// // Test cases
// const test = (l1, l2, expected) => {
//     let result = addTwoNumbers(l1, l2);
//     let output = [];
//     while (result !== null) {
//         output.push(result.val);
//         result = result.next;
//     }
//     console.log(JSON.stringify(output) === JSON.stringify(expected) ? "PASSED" : "FAILED", output);
// };

// Test case 1
// test(
//     new ListNode(2, new ListNode(4, new ListNode(3))),
//     new ListNode(5, new ListNode(6, new ListNode(4))),
//     [7, 0, 8]
// );

// test(
//     new ListNode(0),
//     new ListNode(0),
//     [0]
// );

// Test case 3
// test(
//     new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))))),
//     new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))),
//     [8, 9, 9, 9, 0, 0, 0, 1]
// );
