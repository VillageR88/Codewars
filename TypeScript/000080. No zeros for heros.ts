///Task
/*
Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105

Zero alone is fine, don't worry about it. Poor guy anyway

*/
///Solution
//My soloution
export function noBoringZeros(n: number): number {
  return Number(n.toString().split(/0+$/g).join(""));
}
//Codewars recommended)
/*
export function noBoringZeros(n: number): number {
  return +n.toString().replace(/0+$/, "");
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
function doTest(n: number, expected: number) {
  assert.strictEqual(noBoringZeros(n), expected, `n = ${n}`);
}

describe("Basic tests", () => {
  it("noBoringZeros", () => {
    doTest(104500, 1045);
    doTest(960000, 96);
    doTest(1050, 105);
    doTest(-1050, -105);
    doTest(-105, -105);
    doTest(0, 0);
  });
});