'use strict';

const Stack = require('../lib/stack');

const testStack = new Stack();
describe('stack.js', () => {
  test('#constructor', () => {
    expect(testStack.storage.head).toBeNull();
  });

  test('#push', () => {
    testStack.push(5);
    testStack.push(8);
    testStack.push(9);
    expect(testStack.storage.head.value).toEqual(9);
  });
  test('#pop', () => {
    expect(testStack.storage.head.value).toEqual(9);
  });
});
