/*Zadanie
Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

Constraint:

    1 <= month <= 12

*/
///Solution
//My
const quarterOf = (month) => {
  var quarter
  if (month <= 3) quarter = 1;
  else if (month >= 4 && month <=6) quarter = 2;
  else if (month >= 7 && month <=9) quarter = 3;
  else quarter = 4;
  return quarter;
}
//Codewars recommended
/*
const quarterOf = m => Math.ceil(m/3);
*/
///Tester => JS 'Codewars' 'Sample Test' Tester
//Declarations and definitions - part adjusted to VSC
const Test = require('@codewars/test-compat');
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;
function describe (tag, func) {
  func();
};
function it (tag, func) {
  func();
};
//Describe - invariant part
describe("Basic Tests", () =>{
  it("Testing for fixed tests", () => {
    assert.strictEqual(quarterOf(3), 1)
    assert.strictEqual(quarterOf(8), 3)
    assert.strictEqual(quarterOf(11), 4)
  });
});