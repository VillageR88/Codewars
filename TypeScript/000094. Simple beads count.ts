///Task
/*
Two red beads are placed between every two blue beads. There are N blue beads. After looking at the arrangement below work out the number of red beads.

@ @@ @ @@ @ @@ @ @@ @ @@ @

Implement count_red_beads(n) (in PHP count_red_beads($n); in Java, Javascript, TypeScript, C, C++ countRedBeads(n)) so that it returns the number of red beads.
If there are less than 2 blue beads return 0.
*/
///Solution
//My
export const countRedBeads = (n: number): number => n > 1 ? n - 2 + n : 0;
//Codewars recommended)
/**/
///Tester => TrueScript 'Codewars' 'Sample Test' Tester (TSCSTT)
//Declarations and definitions - part adjusted to VSC
function describe(_desc: any, func: any) { func(); };
function it(_desc: any, func: any) { func(); };
import { assert } from "chai";
//var solution = { sortMyString }; //unused
//Describe - invariant part
describe("Test Cases", function () {
  it("Should work for Sample Test Cases", function () {
    assert.equal(countRedBeads(0), 0);
    assert.equal(countRedBeads(1), 0);
    assert.equal(countRedBeads(3), 4);
    assert.equal(countRedBeads(5), 8);
  });
});