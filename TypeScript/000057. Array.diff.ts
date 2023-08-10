///Task
/*
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

array_diff({1, 2}, 2, {1}, 1, *z) == {2} (z == 1)

If a value is present in b, all of its occurrences must be removed from the other:

array_diff({1, 2, 2, 2, 3}, 5, {2}, 1, *z) == {1, 3} (z == 2)

*/
///Solution
//My soloution (What have happened to me? Total refusal...)
export function arrayDiff(a: number[], b: number[]): number[] {
  for (var i in a) {
    for (var j in b) {
      if (a[i] == b[j]) {
        a.splice(Number(i), 1);
        return arrayDiff(a, b);
      }
    }
  }
return a;
}
//Codewars recommended
/*
export function arrayDiff(a: number[], b: number[]): number[] {
  return a.filter(e => !b.includes(e));
}
OR
export function arrayDiff(a: number[], b: number[]): number[] {
  const bSet = new Set(b);
  return a.filter( value => !bSet.has(value) );
}
*/

///Tester => TrueScript 'Codewars' 'Sample Test' Tester (TSCSTT) v0.1.0 by VR.
//Declarations and definitions - part adjusted to VSC
function describe (_opis: any, func: any) {func();};
function it (_opis: any, func: any) {func();};
import { assert } from "chai";
import { expect } from 'chai';
//Describe - invariant part
describe('Basic tests', () => {
  it('Basic test should work', () => {
    expect(arrayDiff([], [4, 5])).to.eql([], 'a was [], b was [4,5]');
    expect(arrayDiff([3, 4], [3])).to.eql([4], 'a was [3, 4], b was [3]');
    expect(arrayDiff([1, 8, 2], [])).to.eql([1, 8, 2], 'a was [1, 8, 2], b was []');
    expect(arrayDiff([1, 2, 3], [1, 2])).to.eql([3], 'a was [1, 2, 3], b was [1, 2]');
  });
});