///Task
/*
Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.
Examples (input --> output)

4 --> 3 // we have 3 divisors - 1, 2 and 4
5 --> 2 // we have 2 divisors - 1 and 5
12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30

Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.

*/
///Solution
//My
export function divisors(n: number) {
  return Array.from({length : n}, (v, k) => Number(n % (v = 1 + k) == 0)).reduce((x, y) => x + y);
}
//Codewars recommended
/*
*/

///Tester => TrueScript 'Codewars' 'Sample Test' Tester (TSCSTT)
//Declarations and definitions - part adjusted to VSC
function describe (_desc: any, func: any) {func();};
function it (_desc: any, func: any) {func();};
import { randomNumber } from "@codewars/test-compat";
import { assert } from "chai";
import { expect } from 'chai';
import { teardown } from "mocha";
//Describe - invariant part
describe("basic tests", function() {
  it("Testing for 1", () => assert.strictEqual(divisors(1), 1));
  it("Testing for 10", () => assert.strictEqual(divisors(10), 4));
  it("Testing for 11", () => assert.strictEqual(divisors(11), 2));
  it("Testing for 54", () => assert.strictEqual(divisors(54), 8));
  it("Testing for 64", () => assert.strictEqual(divisors(64), 7));
});