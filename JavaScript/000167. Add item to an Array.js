///Task
/*
Add the value "codewars" to the websites array.
After your code executes the websites array should == ["codewars"]

The websites array has already been defined for you using the following code:

var websites = [];
*/
///Solution
//My
websites.push("codewars");
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
describe("Checking Content", () => {
  it("Should not be empty", () => {
    assert.isNotEmpty(websites, 'The array is still empty')
  })
  it('Should contain "codewars"', () => {
    assert.include(websites, 'codewars', 'The array does not contain the correct value "codewars"')
  });
  it("Should only contain 1 item", () => {
    assert.lengthOf(websites, 1)
  })
});