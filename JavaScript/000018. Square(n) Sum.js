/*Zadanie
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2+2^2+2^2=9

*/
///Solution
//My
function squareSum(numbers){
  let sum = 0
  for (i of numbers) sum += i*i;
  return sum;
}
//Codewars recommended
/*
*/
///Tester => JS 'Codewars' 'Sample Test' Tester
//Declarations and definitions - part adjusted to VSC
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
describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(squareSum([1,2]), 5);
    assert.strictEqual(squareSum([0, 3, 4, 5]), 50);
    assert.strictEqual(squareSum([]), 0);
  });
});