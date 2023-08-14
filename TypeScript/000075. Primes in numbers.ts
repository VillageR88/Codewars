///Task
/*
Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

 "(p1**n1)(p2**n2)...(pk**nk)"

with the p(i) in increasing order and n(i) empty if n(i) is 1.

Example: n = 86240 should return "(2**5)(5)(7**2)(11)"

*/
///Solution
//My 1st soloution - Codewars Execution Timed Out (12000 ms) error - needs optimization
/*
export const primeFactors = (n:number): string => {
  n = 775878912;
  var var1 = n;
  var mem1 = 2;
  var throw_me_some_numbers = new Array;
  console.log("n1 =", n);
  for (var k = 1; n > 1; k++) {
    if (k > 1) console.log("\nn" + k, "=", "n" + (k - 1), "/", mem1, "=", n);
    while (var1 > 1) {
      for (var i = 1; i <= var1 / 2; i++) {
        if (var1 % i == 0) {
          mem1 = i;
        }
      }
      if (mem1 == 1) {
        mem1 = var1;
        break;
      }
      console.log("/", var1 / mem1, "=", mem1);
      var1 = mem1;
    }
    var1 > 1 && throw_me_some_numbers.push(var1);

    console.log(k + ". number is", var1)
    var1 = n / var1;
    n = var1;
  }
  console.log("\nWe have this number / these numbers now", throw_me_some_numbers, "and we need manipulate them to get result\n");
  console.log("see te return line")
  return Array.from(new Set(throw_me_some_numbers.reverse())).map((x) => "(" + x + "**" + throw_me_some_numbers.filter((y) => y == x).length + ")").join("").replace(/\*\*1/g, "");
}
*/
//My 2nd soloution - TODO
export const primeFactors = (n:number): string => {
  n = 775878912;
  var var1 = n;
  var mem1 = 2;
  var throw_me_some_numbers = new Array;
  console.log("n1 =", n);
  for (var k = 1; n > 1; k++) {
    if (k > 1) console.log("\nn" + k, "=", "n" + (k - 1), "/", mem1, "=", n);
    while (var1 > 1) {
      for (var i = 1; i <= var1 / 2; i++) {
        if (var1 % i == 0) {
          mem1 = i;
        }
      }
      if (mem1 == 1) {
        mem1 = var1;
        break;
      }
      console.log("/", var1 / mem1, "=", mem1);
      var1 = mem1;
    }
    var1 > 1 && throw_me_some_numbers.push(var1);

    console.log(k + ". number is", var1)
    var1 = n / var1;
    n = var1;
  }
  console.log("\nWe have this number / these numbers now", throw_me_some_numbers, "and we need manipulate them to get result\n");
  console.log("see te return line")
  return Array.from(new Set(throw_me_some_numbers.reverse())).map((x) => "(" + x + "**" + throw_me_some_numbers.filter((y) => y == x).length + ")").join("").replace(/\*\*1/g, "");
}
//Codewars recommended)
/*
export const reverseList = (list: number[]): number[] => [...list].reverse();
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
function testing(n:number, expected:string) {
  assert.strictEqual(primeFactors(n), expected);
}

describe("Fixed Tests", function() {
  it("Basic tests primeFactors", function() {
      testing(7775460,"(2**2)(3**3)(5)(7)(11**2)(17)");
      testing(7919,"(7919)");
      testing(17*17*93*677,"(3)(17**2)(31)(677)");

  });
});