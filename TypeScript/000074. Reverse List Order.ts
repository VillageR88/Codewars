///Task
/*
In this kata you will create a function that takes in a list and returns a list with the reverse order.
Examples (Input -> Output)

* [1, 2, 3, 4]  -> [4, 3, 2, 1]
* [9, 2, 0, 7]  -> [7, 0, 2, 9]

*/
///Solution
//My
export function reverseList(list: number[]): number[] {
  return list.reverse();
}
//Codewars recommended
/*
export const reverseList = (list: number[]): number[] => [...list].reverse();
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
describe("reverseList", function(){
  it("should reverse some sample arrays", function(){
    assert.deepEqual(reverseList([1,2,3,4]), [4,3,2,1], "Input=[1,2,3,4]");
    assert.deepEqual(reverseList([3,1,5,4]), [4,5,1,3], "Input=[3,1,5,4]");
  });
});