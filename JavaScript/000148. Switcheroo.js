///Task
/*
Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). 
Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'
*/
///Solution
//My
const switcheroo = x => [...x].map((a) => a == "a" ? a = "b" : a == "b" ? a = "a" : a).join("");
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
describe("Switcheroo", () => {
  it("Fixed tests", () => {
    assert.strictEqual(switcheroo('abc'), 'bac');
    assert.strictEqual(switcheroo('aaabcccbaaa'), 'bbbacccabbb');
    assert.strictEqual(switcheroo('ccccc'), 'ccccc');
  })
});