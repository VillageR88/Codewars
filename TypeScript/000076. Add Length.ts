///Task
/*
What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

Example(Input --> Output)

"apple ban" --> ["apple 5", "ban 3"]
"you will win" -->["you 3", "will 4", "win 3"]

Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

Note: String will have at least one element; words will always be separated by a space.

*/
///Solution
//My 1st soloution
export function addLength(str: string): string[] {
  return str.split(" ").map((x) => x + " " + x.length);
}
//Codewars recommended)
/*
return str.split(" ").map((x) => x + " " + x.length);
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
describe("Sample Tests", () => {
  it(`Testing for "apple ban"`, () => {
    assert.deepEqual(addLength('apple ban'), ["apple 5", "ban 3"]);
  });
  it(`Testing for "you will win"`, () => {
     assert.deepEqual(addLength('you will win'), ["you 3", "will 4", "win 3"]);
  });
});