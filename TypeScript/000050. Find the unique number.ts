///Task
/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:

    Find the unique number (this kata)
    Find the unique string
    Find The Unique

*/
///Solution
//My
export function findUniq(arr: number[]): number {
  return Number(0==arr.lastIndexOf(arr[0])?arr[0]:arr.filter((x)=>x!=arr[0]));
}

//Codewars recommended
/*
*/

///Tester => TrueScript 'Codewars' 'Sample Test' Tester (TSCSTT)
//Declarations and definitions - part adjusted to VSC
function describe (_opis: any, func: any) {func();};
function it (_opis: any, func: any) {func();};
import { assert } from "chai";
//Describe - invariant part
describe('findUniq', () => {
  it('should handle sample cases', () => {
    assert.strictEqual(findUniq([ 1, 1, 1, 2, 1, 1 ]), 2);
    assert.strictEqual(findUniq([ 0, 0, 0.55, 0, 0 ]), 0.55);
    assert.strictEqual(findUniq([ 7, 7, 7, 7, 7, 7, 6, 7]), 6);
  });
});
