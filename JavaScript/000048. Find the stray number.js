///Task
/*
You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)
Examples

[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3
*/
///Solution
//My
const stray = (numbers) => numbers.reduce((x,y) => x^y);
//Codewars recommended
/* 
*/
///Tester => JS 'Codewars' 'Sample Test' Tester
//Declarations and definitions - part adjusted to VSC
const Test = require('@codewars/test-compat');
const chai = require("chai");
const assert = chai.assert;
const strictEqual = require('chai').assert.strictEqual;
chai.config.truncateThreshold=0;
function describe (tag, func) {
  func();
};
function it (tag, func) {
  func();
};
//Describe - invariant part
describe("Sample Tests", () => {
  it("Should pass Sample Tests", () => {
    assert.strictEqual(stray([1, 1, 2]), 2);
    assert.strictEqual(stray([1, 2, 1]), 2);
    assert.strictEqual(stray([2, 1, 1]), 2);
  });
});