///Task
/*
Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.
*/
///Solution
//My
const findLongest = (a, b = a.map(x => ("" + x).length)) => a[b.findIndex(x => x == (Math.max(...b)))];
//Codewars recommended
/**/
///Tester => JS 'Codewars' 'Sample Test' Tester
//Declarations and definitions - part adjusted to VSC
const Test = require('@codewars/test-compat');
const chai = require("chai");
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
    Test.assertEquals(findLongest([1, 10, 100]), 100)
    Test.assertEquals(findLongest([9000, 8, 800]), 9000)
    Test.assertEquals(findLongest([8, 900, 500]), 900)
    Test.assertEquals(findLongest([0, 37200, 18871, 53795, 76266]), 37200)
  });
});