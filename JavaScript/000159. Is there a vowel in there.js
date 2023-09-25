///Task
/*
Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

Return the resulting array.
*/
///Solution
//My
const isVow = a => a.map(x => String.fromCharCode(x).match(/[aeiou]/) ? String.fromCharCode(x) : x)
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
  Test.assertSimilar(isVow([118, 117, 120, 121, 117, 98, 122, 97, 120, 106, 104, 116, 113, 114, 113, 120, 106]), [118, "u", 120, 121, "u", 98, 122, "a", 120, 106, 104, 116, 113, 114, 113, 120, 106]);
  Test.assertSimilar(isVow([101, 121, 110, 113, 113, 103, 121, 121, 101, 107, 103]), ["e", 121, 110, 113, 113, 103, 121, 121, "e", 107, 103]);
});