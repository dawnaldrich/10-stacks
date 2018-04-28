'use strict';

const Node = require('./node');
const logger = require('./logger');

logger.log(logger.INFO, 'Im testing linked list');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }

  peekAt() {
    return this.head;
  }

  empty() {
    if (this.head === null || !this.head) {
      return true;
    }
    return false;
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

