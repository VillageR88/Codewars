///Task
/*
In this Kata we are passing a number (n) into a function.

Your code will determine if the number passed is even (or not).

The function needs to return either a true or false.

Numbers may be positive or negative, integers or floats.

Floats with decimal part non equal to zero are considered UNeven for this kata.

*/
///Solution
//My soloution
export const testEven = (n : number) : boolean => n % 2 == 0;
//Codewars recommended)
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
//Describe - invariant part
describe("Tests", function() {
  it("Fixed tests", function() {
    assert.equal(testEven(0), true, "testEven for 0");
    assert.equal(testEven(0.5), false, "testEven for 0.5");
    assert.equal(testEven(1), false, "testEven for 1");
    assert.equal(testEven(2), true, "testEven for 2");
    assert.equal(testEven(-4), true, "testEven for 2");
    assert.equal(testEven(15), false, "testEven for 15");
    assert.equal(testEven(20), true, "testEven for 20");
    assert.equal(testEven(220), true, "testEven for 220");
    assert.equal(testEven(222222221), false, "testEven for 222222221");
    assert.equal(testEven(500000000000), true, "testEven for 500000000000");
  });
});

