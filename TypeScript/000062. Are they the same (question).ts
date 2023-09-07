///Task
/*
Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays
have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears).
"Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
Examples
Valid arrays

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121,
20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on.
It gets obvious if we write b's elements in terms of squares:

a = [121, 144, 19, 161, 19, 144, 19, 11] 
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]

Invalid arrays

If, for example, we change the first number to something else, comp is not returning true anymore:

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]

comp(a,b) returns false because in b 132 is not the square of any number of a.

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]

comp(a,b) returns false because in b 36100 is not the square of any number of a.
Remarks

    a or b might be [] or {} (all languages except R, Shell).
    a or b might be nil or null or None or nothing (except in C++, COBOL, Crystal, D, Dart, Elixir, Fortran, F#, Haskell, Nim, OCaml, Pascal, Perl, PowerShell, Prolog, PureScript, R, Racket, Rust, Shell, Swift).

If a or b are nil (or null or None, depending on the language), the problem doesn't make sense so return false.
Note for C

The two arrays have the same size (> 0) given as parameter in function comp.

*/
///Solution
//My
export function comp(a1: number[] | null, a2: number[] | null): boolean {
  return a1?.map((x) => x**2).sort().toString() == a2?.sort().toString();
}
//Codewars recommended
/*
*/

///Tester => TrueScript 'Codewars' 'Sample Test' Tester (TSCSTT)
//Declarations and definitions - part adjusted to VSC
function describe (_desc: any, func: any) {func();};
function it (_desc: any, func: any) {func();};
import { assert } from "chai";
import { expect } from 'chai';
//Describe - invariant part

function testing(a1: number[] | null, a2: number[] | null, expected: boolean) {
  var s1 = "";
  var s2 = "";
  if (a1 !== null) s1 = a1.toString(); else s1 = "null";
  if (a2 !== null) s2 = a2.toString(); else s2 = "null";
  assert.strictEqual(comp(a1, a2), expected, "Error with [" + s1 + "] / [" + s2 + "]\n");
}

describe("Fixed Tests comp", function() {
  it("Basic tests", function() {
    var a1: number[] = [121, 144, 19, 161, 19, 144, 19, 11];
    var a2: number[] = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
    testing(a1, a2, true);
    
    a1 = [121, 144, 19, 161, 19, 144, 19, 11];
    a2 = [11*21, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
    testing(a1, a2, false);
    
  });
});



