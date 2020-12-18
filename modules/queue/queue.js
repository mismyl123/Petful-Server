/* eslint-disable strict */

const Node = require('./node.js');
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(item) {
    const newNode = new Node(item);
    if(!this.first) {
      this.first = newNode;
    }
    else if(this.last) {
      this.last.next = newNode;
    }
    this.last = newNode;
    this.length++;
  }

  dequeue() {
    if(this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;

    if(node === this.last) {
      this.last = null;
    }
    this.length--;
    return node.data;
  }

  peek() {
    if(!this.first) return null;
    return this.first;
  }

  isEmpty() {
    if(!this.first && !this.last) {
      return true;
    }
    return false;
  }


show() {
  // Return the next item in the queue.
  if (this.first.value !== null) return this.first.value;
  return null;
}

all() {
  // Return all items in the queue.
  if (this.first === null) return false;
  let current = this.first;
  const tempArray = [];
  while (current) {
    tempArray.push(current.value);
    current = current.next;
  }
  return tempArray;
}

}
module.exports = Queue;
