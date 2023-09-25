///Task
/*
Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two. 
From the corresponding Wikipedia entry:

    a power of two is a number of the form 2n where n is an integer, i.e. 
    the result of exponentiation with number two as the base and integer n as the exponent.

You may assume the input is always valid.
Examples

isPowerOfTwo(1024) // -> true
isPowerOfTwo(4096) // -> true
isPowerOfTwo(333)  // -> false

Beware of certain edge cases - for example, 1 is a power of 2 since 2^0 = 1 and 0 is not a power of 2.
*/
///Solution
//My
const isPowerOfTwo = n => n == 0 ? false : !(Math.log2(n) % 1);
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
describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(isPowerOfTwo(2), true)
    Test.assertEquals(isPowerOfTwo(4096), true)
    Test.assertEquals(isPowerOfTwo(5), false)
  });
});