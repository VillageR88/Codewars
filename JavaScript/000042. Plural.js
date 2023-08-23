///Task
/*
We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.

    You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).

All values will be positive integers or floats, or zero.
*/
///Solution
//My
const plural = (n) => n != 1;
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
describe("Tests", () => {
  it("test", () => {
Test.assertEquals(plural(0), true, "Plural for 0");
Test.assertEquals(plural(0.5), true, "Plural for 0.5");
Test.assertEquals(plural(1), false, "Plural for 1");
Test.assertEquals(plural(100), true, "Plural for 100");
Test.assertEquals(plural(Infinity), true, "Plural for Infinity");

  });
});