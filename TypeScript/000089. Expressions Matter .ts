///Task
/*
Task

    Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
    In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained (Read the notes for more detail about it)

Example

With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:

    1 * (2 + 3) = 5
    1 * 2 * 3 = 6
    1 + 2 * 3 = 7
    (1 + 2) * 3 = 9

So the maximum value that you can obtain is 9.
*/

///Solution
//My soloution
 const expressionsMatter = (a: number, b: number, c: number): number => [(a * (b + c)), (a * b * c), ((a + b) * c), (a + b + c)].reduce((p, v) => v > p ? v : p);
//Codewars recommended)
/*
export function expressionsMatter(a: number, b: number, c: number): number {
   return Math.max(a*b*c, (a+b)*c, a*(b+c), a+b+c);
}
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
describe("Small values", function() {
  it("Should work", function() {
    assert.equal(expressionsMatter(2, 1, 2), 6);
    assert.equal(expressionsMatter(2, 1, 1), 4);
    assert.equal(expressionsMatter(1, 1, 1), 3);
    assert.equal(expressionsMatter(1, 2, 3), 9);
    assert.equal(expressionsMatter(1, 3, 1), 5);
    assert.equal(expressionsMatter(2, 2, 2), 8);
  })
});

describe("Medium values", function() {
  it("Should work", function() {
    assert.equal(expressionsMatter(5, 1, 3), 20);
    assert.equal(expressionsMatter(3, 5, 7), 105);
    assert.equal(expressionsMatter(5, 6, 1), 35);
    assert.equal(expressionsMatter(1, 6, 1), 8);
    assert.equal(expressionsMatter(2, 6, 1), 14);
    assert.equal(expressionsMatter(6, 7, 1), 48);
  })
});

describe("Mixed values", function() {
  it("Should work", function() {
    assert.equal(expressionsMatter(2, 10, 3), 60);
    assert.equal(expressionsMatter(1, 8, 3), 27);
    assert.equal(expressionsMatter(9, 7, 2), 126);
    assert.equal(expressionsMatter(1, 1, 10), 20);
    assert.equal(expressionsMatter(9, 1, 1), 18);
    assert.equal(expressionsMatter(10, 5, 6), 300);
    assert.equal(expressionsMatter(1, 10, 1), 12);
  })
});