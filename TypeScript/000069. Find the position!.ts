///Task
/*
When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1"

*/
///Solution
//My
export function position(alphabet:string):string {
  return ("Position of alphabet: " + String(alphabet.charCodeAt(0) - 96));
}
//Codewars recommended)
/*
export const position = (alphabet: any): string => `Position of alphabet: ${alphabet.charCodeAt() - 96}`;
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
describe("solution", function(){
  it("Basic tests", function(){
    assert.strictEqual(position("a"),"Position of alphabet: 1");
    assert.strictEqual(position("z"),"Position of alphabet: 26");
    assert.strictEqual(position("e"),"Position of alphabet: 5");
  });  
});