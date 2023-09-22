///Task
/*
Yreate a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.
*/
///Solution
//My
const sumTwoSmallestNumbers = (numbers, n_sorted = numbers.sort((a, b) => a - b)) => n_sorted[0] + n_sorted[1];
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
describe("Your function", function () {
  it("should work for basic tests", function () {
    assert.strictEqual(sumTwoSmallestNumbers([5, 8, 12, 19, 22]), 13, "Sum should be 13");
    assert.strictEqual(sumTwoSmallestNumbers([15, 28, 4, 2, 43]), 6, "Sum should be 6");
    assert.strictEqual(sumTwoSmallestNumbers([3, 87, 45, 12, 7]), 10, "Sum should be 10");
    assert.strictEqual(sumTwoSmallestNumbers([23, 71, 33, 82, 1]), 24, "Sum should be 24");
    assert.strictEqual(sumTwoSmallestNumbers([52, 76, 14, 12, 4]), 16, "Sum should be 16");
  });
});  