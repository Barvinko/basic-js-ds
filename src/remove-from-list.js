const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  const arr = [];
  let element = l;
  while (element !== null) {
    arr.push(element.value);
    element = element.next;
  }

  l = null;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === k) {
      continue;
    }
    const node = new ListNode(arr[i]);
    node.next = l;
    l = node;
  }

  return l;
}

module.exports = {
  removeKFromList
};
