///Task
/*
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!
*/
///Solution
//My
const capitalize = s => [([...s].map((x, i) => !(i % 2) ? x.toUpperCase() : x)).join(""), ([...s].map((x, i) => i % 2 ? x.toUpperCase() : x)).join("")];
//Codewars recommended
/*
*/
///Tester => JS 'Codewars' 'Sample Test' Tester
//Declarations and definitions - part adjusted to VSC
const Test = require('@codewars/test-compat');
const chai = require("chai");
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
describe("Basic tests", function () {
  Test.assertDeepEquals(capitalize("abcdef"), ['AbCdEf', 'aBcDeF']);
  Test.assertDeepEquals(capitalize("codewars"), ['CoDeWaRs', 'cOdEwArS']);
  Test.assertDeepEquals(capitalize("abracadabra"), ['AbRaCaDaBrA', 'aBrAcAdAbRa']);
  Test.assertDeepEquals(capitalize("codewarriors"), ['CoDeWaRrIoRs', 'cOdEwArRiOrS']);
});