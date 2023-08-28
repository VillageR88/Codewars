///Task
/*
GTask Overview

Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

to_binary(1)  should return 1
to_binary(5)  should return 101
to_binary(11) should return 1011

Example:

toBinary(1)  should return 1
toBinary(5)  should return 101
toBinary(11) should return 1011
*/
///Solution
//My
const toBinary = n => +n.toString(2);
//Codewars recommended
/*
*/
///Tester => JS 'Codewars' 'Sample Test' Tester
//Declarations and definitions - part adjusted to VSC
const Test = require('@codewars/test-compat');
const chai = require("chai");
const deeepEqual = chai.assert.deepEqual;
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
describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(toBinary(1), 1);
    assert.strictEqual(toBinary(2), 10);
    assert.strictEqual(toBinary(3), 11);
    assert.strictEqual(toBinary(5), 101);  
  });
})