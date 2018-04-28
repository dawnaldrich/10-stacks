'use strict';

const Stack = require('../lib/stack');

const testStack = new Stack();
describe('stack.js', () => {
  test('#constructor', () => {
    expect(testStack._storage.head).toBeNull();
  });
  test('#push', () => {
    testStack.push(2);
    testStack.push(1);
    testStack.push(3);
    expect(testStack._storage.head.value).toEqual(3);
    expect(testStack._storage.head.next.value).toEqual(1);
    expect(testStack._storage.head.next.next.value).toEqual(2);
  });
  test('#pop', () => {
    testStack.pop();
    expect(testStack._storage.head.value).toEqual(1);
    expect(testStack._storage.head.next.value).toEqual(2);
    expect(testStack.isEmpty()).toBeFalsy();
  });
  test('#peek', () => {
    testStack.peek();
    expect(testStack._storage.head.value).toEqual(1);
  });
  test('#isEmpty', () => {
    expect(testStack.isEmpty()).toBeFalsy();
    testStack.pop();
    expect(testStack.isEmpty()).toBeFalsy();
  });
});
