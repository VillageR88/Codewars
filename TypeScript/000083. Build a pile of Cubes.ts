///Task
/*
Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n3 n^3 n3, the cube above will have volume of (n−1)3 (n-1)^3 (n−1)3 and so on until the top which will have a volume of 13 1^3 13.

You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

The parameter of the function findNb (find_nb, find-nb, findNb, ...) will be an integer m and you have to return the integer n such as n3+(n−1)3+(n−2)3+...+13=m n^3 + (n-1)^3 + (n-2)^3 + ... + 1^3 = m n3+(n−1)3+(n−2)3+...+13=m if such a n exists or -1 if there is no such n.
Examples:

findNb(1071225) --> 45

findNb(91716553919377) --> -1

*/
///Solution
//My soloution
export function findNb(m: number): number {
  for (var i = [0, 2]; i[0] < m; i[1]++) {
    i[0] += (i[1] - 1) ** 3;
  }
  return m == i[0] ? i[1] - 2 : -1;
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
describe("Fixed Tests nbMonths", function() {
  it("Basic tests", function() {
    assert.strictEqual(findNb(4183059834009), 2022);
    assert.strictEqual(findNb(24723578342962), -1);
    assert.strictEqual(findNb(135440716410000), 4824);
    assert.strictEqual(findNb(40539911473216), 3568);
  });
});