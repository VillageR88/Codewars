///Task
/*
Your function takes two arguments:

    current father's age (years)
    current age of his son (years)

Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).
The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.
*/
///Solution
//My
const twiceAsOld = (dadYearsOld, sonYearsOld) => Math.abs(dadYearsOld - sonYearsOld * 2);
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
describe("Sample tests", function(){
  it("Testing for dad's age: 36 and son's age: 7", function(){
    assert.strictEqual(twiceAsOld(36,7) , 22);
  });  
  it("Testing for dad's age: 55 and son's age: 30", function(){
    assert.strictEqual(twiceAsOld(55,30) , 5);
  });
  it("Testing for dad's age: 42 and son's age: 21", function(){
    assert.strictEqual(twiceAsOld(42,21) , 0);
  });
  it("Testing for dad's age: 22 and son's age: 1", function(){
    assert.strictEqual(twiceAsOld(22,1) , 20);
  });
  it("Testing for dad's age: 29 and son's age: 0", function(){
    assert.strictEqual(twiceAsOld(29,0) , 29);
  });
});