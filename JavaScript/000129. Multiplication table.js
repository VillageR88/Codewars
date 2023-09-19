///Task
/*
Your task, is to create N×N multiplication table, of size provided in parameter.

For example, when given size is 3:

1 2 3
2 4 6
3 6 9

For the given example, the return value should be:

[[1,2,3],[2,4,6],[3,6,9]]
*/
///Solution
//My
multiplicationTable = function (s, c = []) {
  for (var i = 1; i <= s; i++) {
    c.push(new Array(s).fill(i).map((x, i) => x * (i + 1)));
  }
  return c;
}
//Codewars recommended
/*
*/
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
    Test.assertSimilar(multiplicationTable(3), [[1, 2, 3], [2, 4, 6], [3, 6, 9]]);
  });
});