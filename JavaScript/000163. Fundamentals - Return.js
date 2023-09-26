///Task
/*
Make multiple functions that will return the sum, difference, modulus, product, quotient, and the exponent respectively.

Please use the following function names:

addition = add

multiply = multiply

division = divide (both integer and float divisions are accepted)

modulus = mod

exponential = exponent

subtraction = subt

Note: All math operations will be: a (operation) b
*/
///Solution
//My
const add = (a, b) => a + b;
const subt = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const mod = (a, b) => a % b;
const exponent = (a, b) => Math.pow(a, b);
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
describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(add(1, 2), 3)
    assert.strictEqual(multiply(1, 2), 2)
    assert.strictEqual(divide(2, 1), 2)
    assert.strictEqual(mod(1, 2), 1)
    assert.strictEqual(exponent(1, 2), 1)
    assert.strictEqual(subt(1, 2), -1)
  })
})