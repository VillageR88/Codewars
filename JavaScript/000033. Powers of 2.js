///Task
/*
Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).
Examples

n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

*/
///Solution
//My
const powersOfTwo = (n) => [...Array(n + 1)].map((_, i) => 2 ** i);
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
describe("Basic Tests", function(){
  it("Testing for fixed tests", () => {
    //assert.deepEqual(powersOfTwo(0), [1])
    assert.deepEqual(powersOfTwo(1), [1, 2])
    assert.deepEqual(powersOfTwo(4), [1, 2, 4, 8, 16])
  })
});