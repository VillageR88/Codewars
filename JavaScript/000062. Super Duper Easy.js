///Task
/*
Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".
*/
///Solution
//My
const problem = (x) => typeof x == "string" ? "Error" : x * 50 + 6;
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
describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(problem("hello"), "Error");
    assert.strictEqual(problem(1), 56);
    assert.strictEqual(problem(5), 256);
    assert.strictEqual(problem(0), 6);
    assert.strictEqual(problem(1.2), 66);
    assert.strictEqual(problem(3), 156);
    assert.strictEqual(problem("RyanIsCool"), "Error");
    assert.strictEqual(problem(-3), -144);
    assert.strictEqual(problem(""), "Error");
    assert.strictEqual(problem(0.03), 7.5);
  })
})