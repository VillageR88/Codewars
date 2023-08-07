///Task
/*
In this simple assignment you are given a number and have to make it negative. 
But maybe the number is already negative?

Examples

makeNegative(1);  // return -1
makeNegative(-5); // return -5
makeNegative(0);  // return 0

Notes

    The number can be negative already, in which case no change is required.
    Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

*/
///Solution
//My
export const makeNegative = (num: number): number => (num > 0 ? - num : num);
//Codewars recommended
/*
export const makeNegative = (num: number): number => -Math.abs(num);
*/

///Tester => TrueScript 'Codewars' 'Sample Test' Tester (TSCSTT) v0.1.0 by VR.
//Declarations and definitions - part adjusted to VSC
function describe (_opis: any, func: any) {func();};
function it (_opis: any, func: any) {func();};
import { assert } from "chai";
//Describe - invariant part
describe("makeNegative", function() {
  it("Sample tests", function() {
    assert.equal(makeNegative(42), -42);
    assert.equal(makeNegative(1), -1);
    assert.equal(makeNegative(-5), -5);
  });
});