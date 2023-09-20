function Node(value) {
  this.value = value;
  this.next = null;
}

/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 * If the input is null, your function should return null
 *
 * Example:
 * If the linked list is:
 *
 *      1 -> 2 -> 3 -> 4 -> 5
 *
 * The result should like like:
 *
 *      5 -> 4 -> 3 -> 2 -> 1
 *
 * Extension:
 * Do it in place
 *
 */

var reverseList = function (head) {
  // console.log(head)

  // prev, head, next
  // 1 -> 2 -> 3
  // H

  // next, save head.next
  // head.next -> prev

  let prev = null;

  // null <- 1   2 -> 3
  //        P     H    N

  while (head !== null) {
    let next = head.next;
    head.next = prev;

    prev = head;
    head = next;
  }

  return prev;
};

module.exports = { Node, reverseLinkedList };
