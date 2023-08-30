///Task
/*
In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

    make as few changes as possible.
    if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.

For example:

solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase.

More examples in test cases. Good luck!

Please also try:

Simple time difference

Simple remove duplicates
*/
///Solution
//My
const solve = (s, u = 0, l = 0) => (
  [...s].map((x) => x.charCodeAt() >= 65 && x.charCodeAt() <= 90 ? u += 1 : l += 1), (l >= u)
  ? [...s].map((x) => ((x.charCodeAt() >= 65) && (x.charCodeAt() <= 90)) ? (x = x.toLowerCase()) : x).join("") 
  : [...s].map((x) => ((x.charCodeAt() >= 97) && (x.charCodeAt() <= 122)) ? (x = x.toUpperCase()) : x).join(""));
//Codewars recommended
/*
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
describe("Basic tests", function(){
  Test.assertEquals(solve("code"),"code");
  Test.assertEquals(solve("CODe"),"CODE");
  Test.assertEquals(solve("COde"),"code");
  Test.assertEquals(solve("Code"),"code");
  });  