///Task
/*
Your Job

Find the sum of all multiples of n below m
Keep in Mind

    n and m are natural numbers (positive integers)
    m is excluded from the multiples

Examples

sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
sumMul(4, -7)  ==> "INVALID"
*/
///Solution
//My
function sumMul(n, m) {
  try {
    return Array(Math.floor(m / n)).fill(n).map((x, i) => x * (i + 1)).filter((x) => x != m).reduce((a, b) => a + b);
  }
  catch (error) {
    return "INVALID"
  }
}
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
  it("should test", () => {
    assert.strictEqual(sumMul(81, 10449), 668736);
    assert.strictEqual(sumMul(0, 0), "INVALID");
    assert.strictEqual(sumMul(2, 9), 20);
    assert.strictEqual(sumMul(4, -7), "INVALID");
  });
});
