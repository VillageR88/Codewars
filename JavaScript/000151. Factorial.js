///Task
/*
Your task is to write function factorial.
*/
///Solution
//My
const factorial = n => n == 0 ? 1 : new Array(n).fill(1).map((x, i) => x = i + 1).reduce((a, b) => a * b);
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
  Test.assertEquals(factorial(0), 1);
  Test.assertEquals(factorial(1), 1);
  Test.assertEquals(factorial(4), 24);
  Test.assertEquals(factorial(7), 5040);
  Test.assertEquals(factorial(17), 355687428096000);
})