'use strict';

const Node = require('./node');
const logger = require('./logger');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }

  peekAt() {
    return this.head;
  }

  insertAtHead(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    return this;
  }

  removeHead() {
    this.head = this.head.next;
    return this.head;
  }
};

