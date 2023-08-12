///Task
/*
ask

Sum all the numbers of a given array ( cq. list ),
except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge,
even if there are more than one with the same value.

Mind the input validation.
Example

{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6

Input validation

If an empty value ( null, None, Nothing etc. ) is given instead of an array,
or the given array is an empty list or a list with only 1 element, return 0.

*/
///Solution
//My soloution
export function sumArray(array:number[] | null) : number {
  return array == null || array.length < 3 ? 0 : 
  Number(array?.sort((a, b) => a - b).splice(1, array.length - 2).reduce((pv, cv) => pv + cv));
}
//Codewars recommended
/*
export function sumArray(array:number[]) : number {
  if (!array || array.length <= 1) return 0;
  return array.sort((a, b) => a - b).slice(1, -1).reduce((p, n) => p + n, 0);
OR
export const sumArray = ($:number[] | null) => !$ ? 0 : $.sort((a, b)=> a - b).slice(1,-1).reduce((acc, el)=> acc + el, 0)
*/

///Tester => TrueScript 'Codewars' 'Sample Test' Tester (TSCSTT) v0.1.0 by VR.
//Declarations and definitions - part adjusted to VSC
function describe (_desc: any, func: any) {func();};
function it (_desc: any, func: any) {func();};
import { randomNumber } from "@codewars/test-compat";
import { assert } from "chai";
import { expect } from 'chai';
import { teardown } from "mocha";
var solution = {sumArray};
//Describe - invariant part
describe("KataTest", function(){
  it("BasicTests", function(){
    //assert.deepEqual(solution.sumArray([NaN]), 0);
    assert.deepEqual(solution.sumArray([ 6, 2, 1, 8, 10 ]), 16);
    assert.deepEqual(solution.sumArray([ 6, 0, 1, 10, 10 ]), 17);
  });
});