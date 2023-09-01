///Task
/*
Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
*/
///Solution
//My
const removeExclamationMarks = s => s.replace(/!/g, "");
//Codewars recommended
/*
const stringClean = s => s.replace(/\d/g, "");
*/
///Tester => JS 'Codewars' 'Sample Test' Tester
//Declarations and definitions - part adjusted to VSC
const Test = require('@codewars/test-compat');
const chai = require("chai");
const deeepEqual = chai.assert.deepEqual;
const assert = chai.assert;
const strictEqual = require('chai').assert.strictEqual;
chai.config.truncateThreshold=0;
function describe (tag, func) {
  func();
};
function it (tag, func) {
  func();
};
//Describe - invariant part
describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(removeExclamationMarks("Hello World!"), "Hello World");
  });
});