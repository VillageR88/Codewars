///Task
/*
A student was working on a function and made some syntax mistakes while coding. Help them find their mistakes and fix them.
*/
///Solution
//My
const main = (v1, v2) => v1 + v2;
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
Test.expectNoError(main)
Test.assertEquals(main('take ', 'item'), 'take item')
Test.assertEquals(main('use ', 'sword'), 'use sword')
  });
});