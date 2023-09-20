///Task
/*
There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!
Note:

Your points are not included in the array of your class's points. 
For calculating the average point you may add your point to the given array!
*/
///Solution
//My
const betterThanAverage = (c, y) => y > [...c].reduce((a, b) => a + b) / c.length;
//Codewars recommended 
/*
const encryptThis = text =>
  text.replace(/\b\w(\w?)(\w*?)(\w?)\b/g, (word, a, mid, b) => 
    word.charCodeAt(0) + b + mid + a);
*/
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
describe("Example Tests", function () {
  it("betterThanAverage([2, 3], 5) should return True", function () {
    assert.strictEqual(betterThanAverage([2, 3], 5), true);
  });

  it("betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75) should return True", function () {
    assert.strictEqual(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75), true);
  });

  it("betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9) should return False", function () {
    assert.strictEqual(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9), false);
  });

  it("betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50) should return False", function () {
    assert.strictEqual(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50), false);
  });

  it("betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21) should return False", function () {
    assert.strictEqual(betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21), false);
  });
});