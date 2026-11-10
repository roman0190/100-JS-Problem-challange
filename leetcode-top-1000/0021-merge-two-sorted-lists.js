// LeetCode 21: Merge Two Sorted Lists
// Difficulty: Easy | Topic: Linked List
// https://leetcode.com/problems/merge-two-sorted-lists/

function mergeTwoLists(list1, list2) {
  const dummy = new ListNode(0);
  let tail = dummy;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      tail.next = list1;
      list1 = list1.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
    }
    tail = tail.next;
  }

  tail.next = list1 || list2;
  return dummy.next;
}

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function fromArray(values) {
  const dummy = new ListNode();
  let tail = dummy;
  for (const value of values) {
    tail.next = new ListNode(value);
    tail = tail.next;
  }
  return dummy.next;
}

function toArray(head) {
  const values = [];
  while (head) {
    values.push(head.val);
    head = head.next;
  }
  return values;
}

const assert = require("node:assert/strict");
assert.deepEqual(toArray(mergeTwoLists(fromArray([1, 2, 4]), fromArray([1, 3, 4]))), [1, 1, 2, 3, 4, 4]);
assert.deepEqual(toArray(mergeTwoLists(null, fromArray([0]))), [0]);
assert.deepEqual(toArray(mergeTwoLists(null, null)), []);

console.log("LeetCode 21 passed");
module.exports = { ListNode, mergeTwoLists };
