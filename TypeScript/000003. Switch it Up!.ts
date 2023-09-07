///Task
/*
When provided with a number between 0-9, return it in words.

Input :: 1

Output :: "One".

If your language supports it, try using a switch statement.

*/
///Solution
//My
export function switchItUp(intNumber:number):string {
  return ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"][intNumber];
;}
//Codewars recommended
/*
export function switchItUp(intNumber:number):string {
   enum out{ Zero,One,Two,Three,Four,Five,Six,Seven,Eight,Nine,Ten};
   return out[intNumber];
}
*/
///Tester => TrueScript 'Codewars' 'Sample Test' Tester (TSCSTT)
//Declarations and definitions - part adjusted to VSC
//const Test = require('@codewars/test-compat');
//const chai = require("chai");
//const assert = chai.assert;
//chai.config.truncateThreshold=0;
function describe (opis: any, func: any) {
  func();
};
function it (opis: any, func: any) {
  func();
};
var solution = {switchItUp}
//Describe - invariant part
import { assert } from "chai";
//import solution = require('@codewars/test-compat'););

describe("solution", function(){
  it("Basic Tests", function(){
    assert.equal(solution.switchItUp(1),"One");
    assert.equal(solution.switchItUp(3),"Three");
    assert.equal(solution.switchItUp(5),"Five");
  });
});