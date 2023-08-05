///Task
/*
Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]

*/
///Solution
//My
export const reverseSeq = (n: number): number[] => {
  return Array(n).fill(n).map((_, index) => index + 1).reverse();
}
//Codewars recommended
/*
export const reverseSeq = (n: number): number[] => {
  return Array.from({length:n},(_,i)=>n-i);
};
 */

///Tester => TrueScript 'Codewars' 'Sample Test' Tester (TSCSTT) v0.1.0 by VR.
//Declarations and definitions - part adjusted to VSC
function describe (opis: any, func: any) {
  func();
};
function it (opis: any, func: any) {
func();
};
import { assert } from "chai";
//Describe - invariant part
describe("reverseSeq", function() {
  it("Sample Test", function() {
    assert.deepEqual(reverseSeq(5), [5, 4, 3, 2, 1]);
  });
});