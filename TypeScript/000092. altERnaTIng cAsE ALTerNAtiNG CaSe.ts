///Task
/*
altERnaTIng cAsE <=> ALTerNAtiNG CaSe

Define String.prototype.toAlternatingCase 
(or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) 
such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

toAlternatingCase("hello world") === "HELLO WORLD"
toAlternatingCase("HELLO WORLD") === "hello world"
toAlternatingCase("hello WORLD") === "HELLO world"
toAlternatingCase("HeLLo WoRLD") === "hEllO wOrld"
toAlternatingCase("12345")       === "12345"                   // Non-alphabetical characters are unaffected
toAlternatingCase("1a2b3c4d5e")  === "1A2B3C4D5E"
toAlternatingCase("String.prototype.toAlternatingCase") === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"

As usual, your function/method should be pure, i.e. it should not mutate the original string.
*/
///Solution
//My
export const toAlternatingCase = (s: string): string => [...s].map(x => x.match(/[a-z]/g) ? x = x.toUpperCase() : x = x.toLowerCase()).join("");
//Codewars recommended)
/**/
///Tester => TrueScript 'Codewars' 'Sample Test' Tester (TSCSTT)
//Declarations and definitions - part adjusted to VSC
function describe(_desc: any, func: any) { func(); };
function it(_desc: any, func: any) { func(); };
import { assert } from "chai";
var solution = { toAlternatingCase };
//Describe - invariant part
// import the type of assertion library you wish to use (Chai recommended)
describe("Sample Test Cases", function () {
  it("Should return a revesed case value", function () {
    assert.equal(solution.toAlternatingCase("hello world"), "HELLO WORLD");
    assert.equal(solution.toAlternatingCase("HeLLo WoRLD"), "hEllO wOrld");
    assert.equal(solution.toAlternatingCase("1a2b3c4d5e"), "1A2B3C4D5E");
  });
});