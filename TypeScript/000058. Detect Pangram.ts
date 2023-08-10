///Task
/*
A pangram is a sentence that contains every single letter of the alphabet at least once.
For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram,
because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

*/
///Solution
//My soloution
export const isPangram = (phrase: string): boolean => new Set(phrase.toLowerCase().match(/[a-z]/g)).size >= 26;
//Codewars recommended
/*
*/

///Tester => TrueScript 'Codewars' 'Sample Test' Tester (TSCSTT) v0.1.0 by VR.
//Declarations and definitions - part adjusted to VSC
function describe (_desc: any, func: any) {func();};
function it (_desc: any, func: any) {func();};
import { assert } from "chai";
import { expect } from 'chai';
//Describe - invariant part
describe("example", function() {
  it("test", function() {
    assert.strictEqual(isPangram("The quick brown fox jumps over the lazy dog."), true);
    assert.strictEqual(isPangram("This is not a pangram."), false);
  });
});