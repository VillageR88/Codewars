///Task
/*
Write a function that takes a positive integer n, sums all the cubed values from 1 to n (inclusive), and returns that sum.

Assume that the input n will always be a positive integer.

Examples: (Input --> output)

2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)
*/
///Solution
//My
export const sumCubes = (n: number): number => new Array(n).fill(1).map((_, i) => Math.pow(i + 1, 3)).reduce((a, b) => a + b);
//Codewars recommended)
/**/
///Tester => TrueScript 'Codewars' 'Sample Test' Tester (TSCSTT)
//Declarations and definitions - part adjusted to VSC
function describe(_desc: any, func: any) { func(); };
function it(_desc: any, func: any) { func(); };
import { assert } from "chai";
//var solution = { sortMyString }; //unused
//Describe - invariant part
describe("Fixed tests", () => {
  it("Testing for 1", () => assert.strictEqual(sumCubes(1), 1));
  it("Testing for 2", () => assert.strictEqual(sumCubes(2), 9));
  it("Testing for 3", () => assert.strictEqual(sumCubes(3), 36));
  it("Testing for 4", () => assert.strictEqual(sumCubes(4), 100));
  it("Testing for 10", () => assert.strictEqual(sumCubes(10), 3025));
  it("Testing for 123", () => assert.strictEqual(sumCubes(123), 58155876));
});