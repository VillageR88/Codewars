///Task
/*
Find Mean

Find the mean (average) of a list of numbers in an array.
Information

To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.

For an example list of 1, 3, 5, 7

1. Add all of the numbers

1+3+5+7 = 16

2. Divide by the number of values in the list. In this example there are 4 numbers in the list.

16/4 = 4

3. The mean (or average) of this list is 4
*/
///Solution
//My
const findAverage = n => n.reduce((a, b) => a + b) / n.length;
//Codewars recommended
/*
*/
///Tester => JS 'Codewars' 'Sample Test' Tester
//Declarations and definitions - part adjusted to VSC
const Test = require('@codewars/test-compat');
const chai = require("chai");
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
describe('get average', function () {
  it('should return the average', function () {
    Test.assertEquals(findAverage([1]), 1)
    Test.assertEquals(findAverage([1, 3, 5, 7]), 4)
  })
})