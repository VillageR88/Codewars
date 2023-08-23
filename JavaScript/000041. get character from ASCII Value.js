///Task
/*
Write a function which takes a number and returns the corresponding ASCII char for that value.

Example:

65 --> 'A'
97 --> 'a'
48 --> '0

For ASCII table, you can refer to http://www.asciitable.com/
*/
///Solution
//My
const getChar = (c) => String.fromCharCode(c);
//Codewars recommended
/*
const getChar = String.fromCharCode;
*/
///Tester => JS 'Codewars' 'Sample Test' Tester
//Declarations and definitions - part adjusted to VSC
const Test = require('@codewars/test-compat');
const chai = require("chai");
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
Test.assertEquals(getChar(55),'7')
Test.assertEquals(getChar(56),'8')
Test.assertEquals(getChar(57),'9')
Test.assertEquals(getChar(58),':')
Test.assertEquals(getChar(59),';')
Test.assertEquals(getChar(60),'<')
Test.assertEquals(getChar(61),'=')
Test.assertEquals(getChar(62),'>')
Test.assertEquals(getChar(63),'?')
Test.assertEquals(getChar(64),'@')
Test.assertEquals(getChar(65),'A')
  });
});