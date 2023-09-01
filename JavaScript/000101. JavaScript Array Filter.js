///Task
/*
JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

The solution would work like the following:

getEvenNumbers([2,4,5,6]) // should == [2,4,6]
*/
///Solution
//My
const getEvenNumbers = a => a.filter((x) => !(x % 2));
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
describe("Fixed tests", () => {
  it('should return an empty array if there are no even numbers', function(){
    assert.deepEqual(getEvenNumbers([1,2,3,6,8,10]), [2,6,8,10])
    assert.deepEqual(getEvenNumbers([1,2]), [2])
    assert.deepEqual(getEvenNumbers([12,14,15]), [12,14])
    assert.deepEqual(getEvenNumbers([13,15]), [])
    assert.deepEqual(getEvenNumbers([1,3,9]), [])
  });
})