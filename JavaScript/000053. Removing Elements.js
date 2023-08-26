///Task
/*
Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
Example:

["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!
*/
///Solution
//My
const removeEveryOther = (arr) => arr.filter((x, index) => x && !(index % 2));
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
describe("Basic tests",() =>{
  it("Testing for fixed tests", () => {
    assert.deepEqual(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']),['Hello', 'Hello Again']);
    assert.deepEqual(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),[1, 3, 5, 7, 9]);
    assert.deepEqual(removeEveryOther([[1, 2]]), [[1, 2]]);
    assert.deepEqual(removeEveryOther([['Goodbye'], {'Great': 'Job'}]),[['Goodbye']]);
  })
});