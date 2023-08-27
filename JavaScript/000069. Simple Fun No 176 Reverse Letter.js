///Task
/*
Task

Given a string str, reverse it and omit all non-alphabetic characters.
Example

For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".
Input/Output

    [input] string str

A string consists of lowercase latin letters, digits and symbols.

    [output] a string
*/
///Solution
//My
const reverseLetter = (str) => (str.match(/a-z/g)).reverse().join("");
//Codewars recommended
/*
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
describe("Basic Tests", function(){
  it("It should works for basic tests.", function(){
  
  Test.assertEquals(reverseLetter("krishan"),"nahsirk")
  
  Test.assertEquals(reverseLetter("ultr53o?n"),"nortlu")
  
  Test.assertEquals(reverseLetter("ab23c"),"cba")
  
  Test.assertEquals(reverseLetter("krish21an"),"nahsirk")
  
  })})