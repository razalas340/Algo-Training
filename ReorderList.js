//this is using three different algos

var reorderList = function (head) {
  //1. turtle and hare
  let slow = head;
  let fast = head;

  // 1,2,3,4,5

  // 1 3 5
  // 1 2 3

  // find the middle
  while (fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  //2.reverse linked list
  let middle = slow;

  // 1,2,3,4,5

  let prev = null;

  // N <- 1  2 -> 3

  while (middle) {
    let next = middle.next;
    middle.next = prev;
    prev = middle;
    middle = next;
  }

  let first = head;
  let second = prev;

  // 1 2 3
  // 4 5

  //
  // 1 -> 4 ->  2   5
  // F              S
  //      F     F

  // merge linked list
  while (first) {
    let temp = first.next;
    first.next = second;
    first = second;
    second = temp;
  }

  return slow;
};
