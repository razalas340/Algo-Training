// 203. Remove Linked List Elements
// Solved
// Easy
// Topics
// Companies
// Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var removeElements = function (head, val) {
  // [1,2,6,3,4,5,6]

  let newList = new ListNode();
  newList.next = head;

  let prev = newList;

  while (head) {
    // 1 -> 2 -> 6 -> 3
    //      P         H

    // 1 -> 2 -> 3
    //      P    H

    // NL -> 6 -> Null
    // P     H

    // NL -> Null

    if (head.val === val) {
      prev.next = head.next;
      head = head.next;
      continue;
    }

    // 1 -> 2 -> 6 ->
    //      P    H
    prev = head;
    head = head.next;
  }
  return newList.next;
};

function printList(node) {
  let result = [];
  while (node !== null) {
    result.push(node.val);
    node = node.next;
  }
  return result;
}
