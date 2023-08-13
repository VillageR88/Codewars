///Task
/*
You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.
Examples:

strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

Concatenate the consecutive strings of strarr by 2, we get:

treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
The first that came is "folingtrashy" so 
longest_consec(strarr, 2) should return "folingtrashy".

In the same way:
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm, "nothing" in Erlang).
Note

consecutive strings : follow one after another without an interruption

*/
///Solution
//My soloution
export function longestConsec(strarr: string[], k: number): string {
  return k > strarr.length || k < 1 ? "" : Array.from({length : strarr.length - k + 1}).map((_, i) => strarr.slice(i, i + k).join("")).reduce((p, v) => v.length > p.length ? v : p);
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
//Describe - invariant part
describe("Fixed Tests", function() {
  it("Basic tests longestConsec", function() {
    assert.strictEqual(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2), "abigailtheta");
    assert.strictEqual(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1), "oocccffuucccjjjkkkjyyyeehh");
    assert.strictEqual(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3), "ixoyx3452zzzzzzzzzzzz");
  });
});
