///Task
/*
You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

Find max(abs(length(x) − length(y)))

If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).
Example:

a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
mxdiflg(a1, a2) --> 13

Bash note:

    input : 2 strings with substrings separated by ,
    output: number as a string
*/
///Solution
//My
function mxdiflg (a, b) {
  function sortedAB(AB) {
    return AB.sort((a, b) => a.length - b.length).filter(str => str.length > 0);
  }
  const av = sortedAB(a);
  const bv = sortedAB(b);
  if (a == "" || b == "") return -1;
  else { 
  return Math.max(
  Math.abs(av[0].length - bv[b.length - 1].length),
  Math.abs(av[0].length - bv[0].length),
  Math.abs(av[a.length-1].length - bv[0].length),
  Math.abs(av[a.length-1].length - bv[b.length-1].length)
  )
  }
}
  //Codewars recommended
/*
*/
///Tester => JS 'Codewars' 'Sample Test' Tester
//Declarations and definitions - part adjusted to VSC
const Test = require('@codewars/test-compat');
const chai = require("chai");
const deeepEqual = chai.assert.deepEqual;
const assert = chai.assert;
const strictEqual = require('chai').assert.strictEqual;
chai.config.truncateThreshold=0;
function describe (tag, func) {
  func();
};
function it (tag, func) {
  func();
};
//Describe - invariant part
describe("mxdiflg",function() {
  it("Basic tests",function() {
      var s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
      var s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
      assert.strictEqual(mxdiflg(s1, s2), 13);
    })
    it("Basic tests",function() {
      var s1 = [""];
      var s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
      assert.strictEqual(mxdiflg(s1, s2), -1);
    })
}
)