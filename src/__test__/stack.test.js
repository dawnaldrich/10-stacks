'use strict';

const Stack = require('../lib/stack');

const testStack = new Stack();

describe('stack.js', () => {
  test('#constructor', () => {
    expect(testStack._storage.head).toBeNull();
  });
  test('#isEmpty should return true because stack is empty', () => {
    expect(testStack.isEmpty()).toBeTruthy();
  });
  test('#push should return each value to be pushed into stack from last in to first in', () => {
    testStack.push(2);
    testStack.push(1);
    testStack.push(3);
    expect(testStack._storage.head.value).toEqual(3);
    expect(testStack._storage.head.next.value).toEqual(1);
    expect(testStack._storage.head.next.next.value).toEqual(2);
  });
  test('#pop should remove the head and return the value of the new head', () => {
    testStack.pop();
    expect(testStack._storage.head.value).toEqual(1);
    expect(testStack._storage.head.next.value).toEqual(2);
    expect(testStack.isEmpty()).toBeFalsy();
  });
  test('#peek', () => {
    testStack.peek();
    expect(testStack._storage.head.value).toEqual(1);
    expect(testStack._storage.head.next.value).toEqual(2);
    expect(testStack._storage.head.next.next).toBeNull();
  });
});

