///Task
/*

Exclusive "or" (xor) Logical Operator
Overview

In some scripting languages like PHP, there exists a logical operator (e.g. &&, ||, and, or, etc.) called the "Exclusive Or" (hence the name of this Kata). The exclusive or evaluates two booleans. It then returns true if exactly one of the two expressions are true, false otherwise. For example:

false xor false == false // since both are false
true xor false == true // exactly one of the two expressions are true
false xor true == true // exactly one of the two expressions are true
true xor true == false // Both are true.  "xor" only returns true if EXACTLY one of the two expressions evaluate to true.

Task

Since we cannot define keywords in Javascript (well, at least I don't know how to do it), your task is to define a function xor(a, b) where a and b are the two expressions to be evaluated. Your xor function should have the behaviour described above, returning true if exactly one of the two expressions evaluate to true, false otherwise.
Fundamentals

*/
///Solution
//My soloution
export const xor=(a:boolean, b:boolean):boolean => {
  return a !== b;
}
//Codewars recommended
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
describe("Your 'xor' function/operator", ()=> {
  it("should work for the four basic cases described above", ()=> {
    assert.equal(xor(false, false), false, "false xor false === false");
    assert.equal(xor(true, false), true, "true xor false === true");
    assert.equal(xor(false, true), true, "false xor true === true");
    assert.equal(xor(true, true), false, "true xor true === false");
    assert.notEqual(xor(true, true), true,"'xor' is NOT identical to 'or'");
  });
});