///Task
/*
Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples: (Input --> Output)

[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

*/
///Solution
//My soloution
export function number(array: string[]): string[]{
  return array.map((x, i) => i + 1 + ": " + x)
}
//Codewars recommended)
/*
export function number(array: string[]): string[]{
  return array.map((el, i) => `${i+1}: ${el}`);
}
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
describe("Testing 1-2-3", () => {
  it("Fixed tests", () => {
    assert.deepEqual(number([]), []);
    assert.deepEqual(number(["a", "b", "c"]), ["1: a", "2: b", "3: c"]); 
    assert.deepEqual(number(["", "", "", "", ""]), ["1: ", "2: ", "3: ", "4: ", "5: "]); 
  });
});
