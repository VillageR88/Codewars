///Task
/*
Description:

Remove all exclamation marks from the end of sentence.
Examples

"Hi!"     ---> "Hi"
"Hi!!!"   ---> "Hi"
"!Hi"     ---> "!Hi"
"!Hi!"    ---> "!Hi"
"Hi! Hi!" ---> "Hi! Hi"
"Hi"      ---> "Hi"
*/
///Solution
//My
const remove = s => s.match(/(?!!+$)./g).join("");
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
function doTest(input, expected) {
  const actual = remove(input);
  strictEqual(actual, expected, `for string:\n"${input}"\n`);
}

it("It should works for basic tests", function () {
  doTest("Hi!", "Hi")
  doTest("Hi!!!", "Hi")
  doTest("!Hi", "!Hi")
  doTest("!Hi!", "!Hi")
  doTest("Hi! Hi!", "Hi! Hi")
  doTest("Hi", "Hi")
});