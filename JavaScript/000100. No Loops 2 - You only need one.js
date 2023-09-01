///Task
/*
*** No Loops Allowed ***

You will be given an array a and a value x. 
All you need to do is check whether the provided array contains the value, without using a loop.

Array can contain numbers or strings. x can be either. 
Return true if the array contains the value, false if not. 
With strings you will need to account for case.
*/
///Solution
//My
const check = (a, x) => a.includes(x);
//Codewars recommended
/*
const animal = (obj) => `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
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
describe("Basic tests",() =>{
  it('Sample tests', () => {
    assert.strictEqual(check([66, 101], 66), true);
    assert.strictEqual(check([80, 117, 115, 104, 45, 85, 112, 115], 45), true);
    assert.strictEqual(check(['t', 'e', 's', 't'], 'e'), true);
    assert.strictEqual(check(['what', 'a', 'great', 'kata'], 'kat'), false);
  });
})