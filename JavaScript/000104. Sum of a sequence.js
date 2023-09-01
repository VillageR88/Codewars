///Task
/*
Your task is to write a function which returns the sum of a sequence of integers.

The sequence is defined by 3 non-negative values: begin, end, step.

If begin value is greater than the end, your function should return 0. 
If end is not the result of an integer number of steps, then don't add it to the sum. See the 4th example below.

Examples

2,2,2 --> 2
2,6,2 --> 12 (2 + 4 + 6)
1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
1,5,3  --> 5 (1 + 4)
*/
///Solution
//My
const sequenceSum = (b, e, s, arr = []) => b <= e ? arr.push(b) && sequenceSum(b += s, e, s, arr) : arr.reduce((p, c) => p + c, 0);
//Codewars recommended
/*
const stringClean = s => s.replace(/\d/g, "");
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
    assert.strictEqual(sequenceSum(2, 6, 2), 12)
    assert.strictEqual(sequenceSum(1, 5, 1), 15)
    assert.strictEqual(sequenceSum(1, 5, 3), 5)  
  })
})