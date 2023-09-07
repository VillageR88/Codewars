///Task
/*
Instructions

Write a function that takes a single string (word) as argument.
The function must return an ordered list containing the indexes of all capital letters in the string.
Example (Input --> Output)

"CodEWaRs" --> [0,3,4,6]

*/
///Solution
//My soloution
export function capitals (word: string): number[] {
  return Array.from([...word].map((a) => word.match(/[A-Z]/g)?.includes(a) ? [...word].indexOf(a) : "").filter((x) => x !== "")) as number[];
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
  it("Testing for fixed tests", () => {
    assert.deepEqual(capitals('CodEWaRs'), [0,3,4,6] );
  });
});