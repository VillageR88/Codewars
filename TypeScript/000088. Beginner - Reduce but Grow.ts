///Task
/*
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

*/
///Solution
//My soloution
export function grow(arr: number[]): number {
  return arr.reduce((x, y) => x * y)
}
//Codewars recommended)
/*
export const grow = (arr: number[]) => arr.reduce((accum, it) => accum * it);
*/  

///Tester => TrueScript 'Codewars' 'Sample Test' Tester (TSCSTT) v0.1.0 by VR.
//Declarations and definitions - part adjusted to VSC
function describe (_desc: any, func: any) {func();};
function it (_desc: any, func: any) {func();};
import { randomNumber } from "@codewars/test-compat";
import { assert } from "chai";
import { expect } from 'chai';
import { teardown } from "mocha";
//Describe - invariant part
describe("Basic tests", function() {
  it("Testing for [1, 2, 3]", () => assert.strictEqual(grow([1, 2, 3]), 6));
  it("Testing for [4, 1, 1, 1, 4]", () => assert.strictEqual(grow([4, 1, 1, 1, 4]), 16));
  it("Testing for [2, 2, 2, 2, 2, 2]", () => assert.strictEqual(grow([2, 2, 2, 2, 2, 2]), 64));
});