///Task
/*
Code as fast as you can! You need to double the integer and return it.
*/
///Solution
//My
export function doubleInteger(i: number): number {
  return i*2;
}
//Codewars recommended
/*
export const doubleInteger = (i: number): number => i * 2
*/

///Tester => TrueScript 'Codewars' 'Sample Test' Tester (TSCSTT)
//Declarations and definitions - part adjusted to VSC
function describe (opis: any, func: any) {
  func();
};
function it (opis: any, func: any) {
func();
};
import { assert } from "chai";
//Describe - invariant part
describe("Double integer", () => {
  it("Fixed tests", () => {
    assert.strictEqual(doubleInteger(2), 4);
  });
});
