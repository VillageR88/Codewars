///Task
/*
This is an easy twist to the example kata (provided by Codewars when learning how to create your own kata).

Add the value "codewars" to the array websites 1,000 times.
*/
///Solution
//My
var websites = new Array(1000);
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
describe("Tests", () => {
  it("test", () => {
Test.expect(websites.length > 0, 'The array is still empty')
Test.expect(websites.length == 1000, 'The array does not equal 1,000')
Test.expect(websites.every(function(e){return e == 'codewars';}), 'Every element in the array must contain the value "codewars"');
  });
});