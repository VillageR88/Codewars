/*Zadanie
Very simple, given an integer or a floating-point number, find its opposite.

Examples:

1: -1
14: -14
-34: 34

*/
///Solution
//My
function opposite(number) {
  return -number
}
//Codewars recommended
/*
*/
///Tester => JS 'Codewars' 'Sample Test' Tester
//Declarations and definitions - part adjusted to VSC
const Test = require('@codewars/test-compat');
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;
function describe (tag, func) {
  func();
};
function it (tag, func) {
  func();
};
//Describe - invariant part
describe('Fixed tests', () => {
  it('Is it a function?', () => {
    assert.strictEqual(typeof opposite, 'function', 'opposite should be a function');
  });
  it('should return -1', () => {
    assert.strictEqual(opposite(1), -1);
  });
  it('should return 0', () => {
    assert.strictEqual(opposite(0), 0);
  });
  it('should return -4.25', () => {
    assert.strictEqual(opposite(4.25), -4.25);
  });
  it('should return -3.3333333', () => {
    assert.strictEqual(opposite(3.3333333), -3.3333333);
  });
  it('should return 12525220.3325', () => {
    assert.strictEqual(opposite(-12525220.3325), 12525220.3325);
  });
  it('should return 5', () => {
    assert.strictEqual(opposite(-5), 5);
  });
});