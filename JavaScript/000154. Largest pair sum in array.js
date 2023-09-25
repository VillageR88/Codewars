///Task
/*
Given a sequence of numbers, find the largest pair sum in the sequence.

For example

[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)

Input sequence contains minimum two elements and every element is an integer.
*/
///Solution
//My
const largestPairSum = nb => (x = nb.sort((a, b) => b - a), x[0] + x[1]);
//Codewars recommended 
/**/
///Tester => JS 'Codewars' 'Sample Test' Tester
//Declarations and definitions - part adjusted to VSC
const Test = require('@codewars/test-compat');
const chai = require("chai");
const mocha = require('mocha');
const assert = chai.assert;
const { matchAll } = require('nunit-command/regex');
const deeepEqual = chai.assert.deepEqual;
const strictEqual = require('chai').assert.strictEqual;
chai.config.truncateThreshold = 0;
function describe(tag, func) {
  func();
};
function it(tag, func) {
  func();
};
//Describe - invariant part describe
function doTest(array, expected) {
  const actual = largestPairSum(array);
  strictEqual(actual, expected, `for array [${array.join(', ')}]:\n`);
}

it("Basic tests", () => {
  doTest([10, 14, 2, 23, 19], 42);
  doTest([-100, -29, -24, -19, 19], 0);
  doTest([1, 2, 3, 4, 6, -1, 2], 10);
  doTest([-10, -8, -16, -18, -19], -18);
});
