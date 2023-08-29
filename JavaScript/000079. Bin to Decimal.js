///Task
/*
Complete the function which converts a binary number (given as a string) to a decimal number.
*/
///Solution
//My
const binToDec = bin => parseInt(bin, 2);
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
describe("Example Tests", () => {
  [ ["1",1], ["0",0], ["1001001", 73] ].forEach( ([inp, exp]) => Test.assertEquals( binToDec(inp), exp ) )
});