///Task
/*
In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit .
If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function,
not consisting of 0. The limit will always be higher than the base.

For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

*/
///Solution
//My
export function findMultiples(integer: number, limit: number): number[] {
  return Array.from({length: limit / integer}, (x, y) => x = integer + y * integer);
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
describe("Basic tests", () => {
  it("Should pass basic tests", () => {
    assert.deepEqual(findMultiples(5, 25), [5, 10, 15, 20, 25]);
    assert.deepEqual(findMultiples(1, 2), [1, 2]);
    assert.deepEqual(findMultiples(5, 7), [5]);
    assert.deepEqual(findMultiples(4, 27), [4, 8, 12, 16, 20, 24]);
    assert.deepEqual(findMultiples(11, 54), [11, 22, 33, 44]);
  });
});