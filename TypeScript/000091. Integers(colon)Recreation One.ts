///Task
/*
1, 246, 2, 123, 3, 82, 6, 41 are the divisors of number 246. Squaring these divisors we get: 1, 60516, 4, 15129, 9, 6724, 36, 1681. The sum of these squares is 84100 which is 290 * 290.
Task

Find all integers between m and n (m and n integers with 1 <= m <= n) such that the sum of their squared divisors is itself a square.

We will return an array of subarrays or of tuples (in C an array of Pair) or a string. The subarrays (or tuples or Pairs) will have two elements: first the number the squared divisors of which is a square and then the sum of the squared divisors.
Example:

list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
list_squared(42, 250) --> [[42, 2500], [246, 84100]]

The form of the examples may change according to the language, see "Sample Tests".
Note

In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.

*/
///Solution
//My soloution
export const listSquared = (m:number, n:number):number[][] => {
  m = 144; n = 144; // debug;
  var result = new Array;
  for (m; m <= n; m++) {
    var _m = m;
    var arr1 = new Array;
    arr1.push([_m, 1]);
    for (var i = 2; i <= _m / i; i++) {
      //console.log("result", result); //debug off
      console.log(arr1);
      if (_m % i == 0) {
        console.log("divisor found:", _m, i);
        arr1.push([_m, i]);
        //_m = _m / i;
        //i = 1; //will gain +1 after this line
      }
    }
    arr1.push([_m,_m]);
    console.log(arr1);
    var arr3 = Array.from(new Set(arr1.flat().sort((a, b) => a - b))).map((x) => x**2);
    var c = arr3.reduce((p, v) => p + v);
    var d = Math.sqrt(arr3.reduce((p, v) => p + v));
    if (!(c % d)) {
      result.push([m, c]);
      console.log("result", result);

    }
  }
  return result;
}
//Codewars recommended)
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
function testing(m:number, n:number, expected:number[][]) {
  assert.deepEqual(listSquared(m, n), expected);
}

describe("Fixed Tests", function() {
  it("listSquared", function() {
      testing(1, 250, [[1, 1], [42, 2500], [246, 84100]]);
      //testing(42, 250, [[42, 2500], [246, 84100]]);
      //testing(250, 500, [[287, 84100]]);
      //testing(300, 600, []);
  });
});
