///Task
/*
You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.

Your function will accept three arguments:
The first and second argument should be numbers.
The third argument should represent a sign indicating the operation to perform on these two numbers.

if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.
Example:

calculator(1,2,"+"); //=> result will be 3
calculator(1,2,"&"); //=> result will be "unknown value"
calculator(1,"k","*"); //=> result will be "unknown value"

Good <luck!></luck!>
*/
///Solution
//My
function calculator(a, b, sign) {
  try {return eval(`${a}${sign}${b}`)}
  catch (error) {return "unknown value"}
}
//Codewars recommended
/*
*/
///Tester => JS 'Codewars' 'Sample Test' Tester
//Declarations and definitions - part adjusted to VSC
const Test = require('@codewars/test-compat');
const chai = require("chai");
const assert = chai.assert;
const { matchAll } = require('nunit-command/regex');
const deeepEqual = chai.assert.deepEqual;
const strictEqual = require('chai').assert.strictEqual;
chai.config.truncateThreshold = 0;
function describe(tag, func) {
  func();
};
function it(tag, func) {
  func();
};
//Describe - invariant part describe
describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(calculator(1, 2, "+"), 3, "calculate");
    Test.assertEquals(calculator(1, 2, "-"), -1, "calculate");
    Test.assertEquals(calculator(3, 5, "*"), 15, "calculate");
    Test.assertEquals(calculator(6, 2, "/"), 3, "calculate");
    Test.assertEquals(calculator(6, 2, "$"), "unknown value", "calculate");
    Test.assertEquals(calculator(6, "h", "*"), "unknown value", "calculate");
  });
});