///Task
/*
A square of squares

You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.
Task

Given an integral number, determine if it's a square number:

    In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

The tests will always use some integral number, so don't worry about that in dynamic typed languages.
Examples

-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false
*/
///Solution
//My
export default function isSquare(n: number): boolean {
  return Math.sqrt(n)%1==0;
};

//Codewars recommended
/*
export default function isSquare(n: number): boolean {
  return Number.isInteger(Math.sqrt(n));
};
*/

///Tester => TrueScript 'Codewars' 'Sample Test' Tester (TSCSTT)
//Declarations and definitions - part adjusted to VSC
function describe (opis: any, func: any) {
  func();
};
function it (opis: any, func: any) {
func();
};
import { assert } from "chai";
//Describe - invariant part
import {expect} from "chai";

describe("solution", function() {
  it("should work for some examples", function() {
    expect(isSquare(-1)).to.be.false;
    expect(isSquare( 0)).to.be.true;
    expect(isSquare( 3)).to.be.false;
    expect(isSquare( 4)).to.be.true;
    expect(isSquare(25)).to.be.true;
    expect(isSquare(26)).to.be.false;
  });
});