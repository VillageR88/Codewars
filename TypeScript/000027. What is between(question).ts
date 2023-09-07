///Task
/*
Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4]

*/
///Solution
//My
export function between(a: number, b: number): number[] {
  return Array(b-a+1).fill(0).map((x=a,indx)=>(x=a+indx));
}
//Codewars recommended
/*
export function between(a: number, b: number): number[] {
  return Array.from({length: b - a + 1}, (_, j) => j + a);
}
};
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
describe("Basic tests", () => {
  it("Basic tests should work", () => {
    assert.deepEqual(between(1, 4), [1, 2, 3, 4]);
    assert.deepEqual(between(-2, 2), [-2, -1, 0, 1, 2]);
  });
});