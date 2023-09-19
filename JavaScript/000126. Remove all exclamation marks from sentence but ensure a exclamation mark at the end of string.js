///Task
/*
Description:

Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.
Examples

"Hi!"     ---> "Hi!"
"Hi!!!"   ---> "Hi!"
"!Hi"     ---> "Hi!"
"!Hi!"    ---> "Hi!"
"Hi! Hi!" ---> "Hi Hi!"
"Hi"      ---> "Hi!"
*/
///Solution
//My
const remove = s => s.replace(/!/g, "") + "!";
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
function doTest(input, expected) {
  const actual = remove(input);
  strictEqual(actual, expected, `for string:\n"${input}"\n`);
}

describe("Tests suite", function () {
  it("sample tests", function () {
    doTest("Hi!", "Hi!");
    doTest("Hi!!!", "Hi!");
    doTest("!Hi", "Hi!");
    doTest("!Hi!", "Hi!");
    doTest("Hi! Hi!", "Hi Hi!");
    doTest("Hi", "Hi!");
  });
});