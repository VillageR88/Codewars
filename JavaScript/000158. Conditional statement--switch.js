///Task
/*
ask

Complete the function howManydays. 
It accepts 1 parameter month, which means the month of the year. 
Different months have a different number of days as shown in the table below. 
Return the number of days that are in month. 
There is no need for input validation: month will always be greater than 0 and less than or equal to 12.

+---------------+-------------+
|    month      |    days     |
+---------------+-------------+
|1,3,5,7,8,10,12|     31      |
+---------------+-------------+
|4,6,9,11       |     30      |
+---------------+-------------+
|2              |     28      |  (Do not consider the leap year)
+---------------+-------------+

Tip: Using default for most of the cases can reduce your work.
*/
///Solution
//My
const howManydays = m => (
  "With a magical pitch and a swish of the switch, We'll change it up quick, like a wizardly glitch! 🧙‍♀️🪄✨",
(x = (m == 1| m == 3| m == 5| m == 7| m == 8| m == 10| m==12) ? m = 1 :
(m == 4| m == 6| m == 9| m == 11) ? m = 2 : 3), {1: 31, 2: 30, 3: 28}[x]);
//Codewars recommended 
/**/
///Tester => JS 'Codewars' 'Sample Test' Tester
//Declarations and definitions - part adjusted to VSC
const Test = require('@codewars/test-compat');
const chai = require("chai");
const mocha = require('mocha');
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
    //Test.assertSimilar(howManydays(1), 31);
    Test.assertSimilar(howManydays(2), 28);
    Test.assertSimilar(howManydays(3), 31);
    Test.assertSimilar(howManydays(4), 30);
    Test.assertSimilar(howManydays(12), 31);
  });
});