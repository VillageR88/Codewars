///Task
/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

*/
///Solution
//My soloution
export class Kata {
    static getCount(str: string): number {
      return str.match(/[aeiou]/g)?.length??0;
    }
  }
//Codewars recommended)
/*
*/  

///Tester => TrueScript 'Codewars' 'Sample Test' Tester (TSCSTT) v0.1.0 by VR.
//Declarations and definitions - part adjusted to VSC
function describe (_desc: any, func: any) {func();};
function it (_desc: any, func: any) {func();};
import { randomNumber } from "@codewars/test-compat";
import { assert } from "chai";
import { expect } from 'chai';
import { teardown } from "mocha";
var solution = {Kata};
//Describe - invariant part
describe("getCount", function(){
    it ("should pass a sample test", function(){
        assert.strictEqual(solution.Kata.getCount("abracadabra"), 5)
    });
});