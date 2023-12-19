const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor() {
    this.array = [];
  }

  getUnderlyingList(object = {}, i = 0, arr = this.array) {
    object.value = arr[i];
    object.next = (i + 1 < arr.length) ? {} : null;
    if (object.next) {
      object.next = this.getUnderlyingList(object.next, i + 1);
    }
    return object;
  }

  enqueue(value) {
    this.array.push(value);
  }

  dequeue() {
    if (!this.array) {
      return undefined;
    }

    return this.array.shift();
  }
}

module.exports = {
  Queue
};
