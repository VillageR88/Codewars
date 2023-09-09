///Task
/*
Write a function named sumDigits which takes a number as input 
and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5

Let's assume that all numbers in the input will be integer values.
*/
///Solution
//My
const sumDigits = n => (""+Math.abs(n)).split("").reduce((p, v) => +p + +v);
//Codewars recommended
/*
*/
///Tester => JS 'Codewars' 'Sample Test' Tester
//Declarations and definitions - part adjusted to VSC
const Test = require('@codewars/test-compat');
const chai = require("chai");
const deeepEqual = chai.assert.deepEqual;
const strictEqual = require('chai').assert.strictEqual;
chai.config.truncateThreshold = 0;
function describe(tag, func) {
  func();
};
function it(tag, func) {
  func();
};
//Describe - invariant partdescribe("Fixed Tests", function () {
const { assert } = require("chai")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(sumDigits(10), 1);
    assert.strictEqual(sumDigits(99), 18);
    assert.strictEqual(sumDigits(-32), 5);
  })
})