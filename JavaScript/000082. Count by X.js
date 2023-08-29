///Task
/*
Create a function with two arguments that will return an array of the first n multiples of x.

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array or list ( depending on language ).
Examples

countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]
*/
///Solution
//My
const countBy = (x, n) => Array(n).fill(x).map((x, i) => x += i * x);
//Codewars recommended
/*
const countBy = (x, n) => Array.from({length: n}, (v, k) => (k + 1) * x)
OR
const countBy = (x, n) => [...Array(n)].map((_, idx) => ++idx * x);
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
describe("Basic Tests",function(){
  it("Testing for fixed tests", () => {
    assert.deepEqual(countBy(1,10), [1,2,3,4,5,6,7,8,9,10], "Array does not match")
    assert.deepEqual(countBy(2,5), [2,4,6,8,10], "Array does not match")
  });
});