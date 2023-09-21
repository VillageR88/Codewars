///Task
/*
If　a = 1, b = 2, c = 3 ... z = 26

Then l + o + v + e = 54

and f + r + i + e + n + d + s + h + i + p = 108

So friendship is twice as strong as love :-)

Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.

The input will always be made of only lowercase letters and will never be empty.
*/
///Solution
//My
const wordsToMarks = s => [...s].map(x => x.charCodeAt() - 96).reduce((a, b) => a + b);
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
    assert.strictEqual(wordsToMarks("attitude"), 100);
    assert.strictEqual(wordsToMarks("friends"), 75);
    assert.strictEqual(wordsToMarks("family"), 66);
    assert.strictEqual(wordsToMarks("selfness"), 99);
    assert.strictEqual(wordsToMarks("knowledge"), 96);
  });
})