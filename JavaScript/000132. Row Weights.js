///Task
/*
Scenario

Several people are standing in a row divided into two teams.
The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.
Task

Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, 
where the first one is the total weight of team 1, and the second one is the total weight of team 2.
Notes

    Array size is at least 1.
    All numbers will be positive.
    Input >> Output Examples

rowWeights([13, 27, 49])  ==>  return (62, 27)

Explanation:

The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.

rowWeights([50, 60, 70, 80])  ==>  return (120, 140)

Explanation:

The first element 120 is the total weight of team 1, and the second element 140 is the total weight of team 2.

rowWeights([80])  ==>  return (80, 0)

Explanation:

The first element 80 is the total weight of team 1, and the second element 0 is the total weight of team 2.
*/
///Solution
//My
const rowWeights = (arr, a = [], b = [], c = 0, r = v => v.reduce((x, y) => x + y, 0)) => arr.length <= c ? [r(a), r(b)] :
  !(c % 2) ? (a.push(arr[c]), c++, rowWeights(arr, a, b, c, r)) : (b.push(arr[c]), c++, rowWeights(arr, a, b, c, r))
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
describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    //assert.deepEqual(rowWeights([80]), [80, 0]);
    assert.deepEqual(rowWeights([100, 50]), [100, 50]);
    assert.deepEqual(rowWeights([50, 60, 70, 80]), [120, 140]);
    assert.deepEqual(rowWeights([13, 27, 49]), [62, 27]);
    assert.deepEqual(rowWeights([70, 58, 75, 34, 91]), [236, 92]);
    assert.deepEqual(rowWeights([29, 83, 67, 53, 19, 28, 96]), [211, 164]);
    assert.deepEqual(rowWeights([0]), [0, 0]);
    assert.deepEqual(rowWeights([100, 51, 50, 100]), [150, 151]);
    assert.deepEqual(rowWeights([39, 84, 74, 18, 59, 72, 35, 61]), [207, 235]);
    assert.deepEqual(rowWeights([0, 1, 0]), [0, 1]);
  })
})