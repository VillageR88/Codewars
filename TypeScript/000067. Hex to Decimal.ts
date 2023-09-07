///Task
/*
Complete the function which converts hex number (given as a string) to a decimal number.

*/
///Solution
//My
export function hexToDec(hexString:string):number {
  return parseInt(hexString, 16);
}
//Codewars recommended
/*
*/

///Tester => TrueScript 'Codewars' 'Sample Test' Tester (TSCSTT)
//Declarations and definitions - part adjusted to VSC
function describe (_desc: any, func: any) {func();};
function it (_desc: any, func: any) {func();};
import { randomNumber } from "@codewars/test-compat";
import { assert } from "chai";
import { expect } from 'chai';
import { teardown } from "mocha";
var solution = {hexToDec}
//Describe - invariant part
describe("solution", function(){
  it("Basic Tests", function(){
    assert.equal(solution.hexToDec("1"), 1);
    assert.equal(solution.hexToDec("a"), 10);
    assert.equal(solution.hexToDec("10"), 16);
    assert.equal(solution.hexToDec("FF"), 255);
    assert.equal(solution.hexToDec("-C"), -12);
  });
});