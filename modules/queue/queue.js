const _Node = require('./node').default;
console.log(test)


class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) this.first = node;
    if (this.last) this.last.next = node;

    this.last = node;
  }

  dequeue() {
    if (this.first === null) return;

    let node = this.first;
    this.first = this.first.next;
    if (node === this.last) this.last = null;

    return node.value;
  }

  show() {
    if (this.first.value !== null) return this.first.value;
    return null;
  }

  all() {
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