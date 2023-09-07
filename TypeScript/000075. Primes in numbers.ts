///Task
/*
Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

 "(p1**n1)(p2**n2)...(pk**nk)"

with the p(i) in increasing order and n(i) empty if n(i) is 1.

Example: n = 86240 should return "(2**5)(5)(7**2)(11)"

*/
///Solution
//My
export const primeFactors = (n:number): string => {
  var arr = new Array;
  while (n >= 2) {
    var v = 2;
    while (n % v != 0) {
      v++;
    }
    arr.push(v);
    n = n / v;
  }
  return Array.from(new Set(arr)).map((x) => "(" + x + "**" + arr.filter((y) => y == x).length + ")").join("").replace(/\*\*1/g, "");
}
//Codewars recommended
/*
export const reverseList = (list: number[]): number[] => [...list].reverse();
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
function testing(n:number, expected:string) {
  assert.strictEqual(primeFactors(n), expected);
}
describe("Fixed Tests", function() {
  it("Basic tests primeFactors", function() {
    //testing(775878912,"(2**8)(3**4)(17)(31)(71)");
    testing(7775460,"(2**2)(3**3)(5)(7)(11**2)(17)");
    testing(7919,"(7919)");
    testing(17*17*93*677,"(3)(17**2)(31)(677)");
  });
});