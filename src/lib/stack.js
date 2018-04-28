// const Node = require('./node');
const LinkedList = require('./linked-list');

class Stack {
  constructor() {
    this._storage = new LinkedList();
  }
  push(value) { // no return value
    // add node to end
    this._storage.insertAtHead(value);
  }
  pop() {
    this._storage.removeHead();
  }
  peek() {
    this._storage.peekAt();
  }
  isEmpty() {
    this._storage.empty();
  }
}
module.exports = Stack;
