'use strict';

const LinkedList = require('./linked-list');

class Stack {
  constructor() {
    this._storage = new LinkedList();
  }
  push(value) {
    // Big O(1)
    this._storage.insertAtHead(value);
  }
  // Big O(1)
  pop() {
    this._storage.removeHead();
  }
  // Big O(1)
  peek() {
    this._storage.peekAt();
  }
  // Big O(1)
  isEmpty() {
    if (this._storage.head === null || !this._storage.head) {
      return true;
    }
    return false;
  }
}
module.exports = Stack;
