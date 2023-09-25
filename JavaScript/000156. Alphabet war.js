///Task
/*
Introduction

There is a war and nobody knows - the alphabet war!
There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.
Task

Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

The left side letters and their power:

 w - 4
 p - 3
 b - 2
 s - 1

The right side letters and their power:

 m - 4
 q - 3
 d - 2
 z - 1

The other letters don't have power and are only victims.
Example

alphabetWar("z");        //=> Right side wins!
alphabetWar("zdqmwpbs"); //=> Let's fight again!
alphabetWar("zzzzs");    //=> Right side wins!
alphabetWar("wwwwwwz");  //=> Left side wins!
*/
///Solution
//My
const alphabetWar = (l, m = l.match(/[wpbsmqdz]/g)) => (
m == null ? "Let's fight again!":
(x = [...m].map(x => x = { w: -4, p: -3, b: -2, s: -1, m: 4, q: 3, d: 2, z: 1 }[x]).reduce((a, b) => a + b),
x > 0 ? "Right side wins!" : x < 0 ? "Left side wins!" : "Let's fight again!"));
//Codewars recommended 
/**/
///Tester => JS 'Codewars' 'Sample Test' Tester
//Declarations and definitions - part adjusted to VSC
const Test = require('@codewars/test-compat');
const chai = require("chai");
const mocha = require('mocha');
const assert = chai.assert;
const { matchAll } = require('nunit-command/regex');
const deeepEqual = chai.assert.deepEqual;
const strictEqual = require('chai').assert.strictEqual;
chai.config.truncateThreshold = 0;
function describe(tag, func) {
  func();
};
function it(tag, func) {
  func();
};
//Describe - invariant part describe
describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(alphabetWar("z"), "Right side wins!");
    Test.assertEquals(alphabetWar("zdqmwpbs"), "Let's fight again!");
    Test.assertEquals(alphabetWar("zzzzs"), "Right side wins!");
    Test.assertEquals(alphabetWar("wwwwww"), "Left side wins!");
  });
});