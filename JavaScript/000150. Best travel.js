///Task
/*
John and Mary want to travel between a few towns A, B, C ... Mary has on a sheet of paper a list of distances between these towns. 
ls = [50, 55, 57, 58, 60]. John is tired of driving and he says to Mary that he doesn't want to drive more than t = 174 miles and he will visit only 3 towns.

Which distances, hence which towns, they will choose so that the sum of the distances is the biggest possible to please Mary and John?
Example:

With list ls and 3 towns to visit they can make a choice between: 
[50,55,57],[50,55,58],[50,55,60],[50,57,58],[50,57,60],[50,58,60],[55,57,58],[55,57,60],[55,58,60],[57,58,60].

The sums of distances are then: 162, 163, 165, 165, 167, 168, 170, 172, 173, 175.

The biggest possible sum taking a limit of 174 into account is then 173 and the distances of the 3 corresponding towns is [55, 58, 60].

The function chooseBestSum (or choose_best_sum or ... depending on the language) will take as parameters t 
(maximum sum of distances, integer >= 0), k (number of towns to visit, k >= 1) and ls 
(list of distances, all distances are positive or zero integers and this list has at least one element). 
The function returns the "best" sum ie the biggest possible sum of k distances less than or equal to the given 
limit t, if that sum exists, or otherwise nil, null, None, Nothing, depending on the language. 
In that case with C, C++, D, Dart, Fortran, F#, Go, Julia, Kotlin, Nim, OCaml, Pascal, Perl, PowerShell, Reason, Rust, Scala, Shell, Swift return -1.
Examples:

ts = [50, 55, 56, 57, 58] choose_best_sum(163, 3, ts) -> 163

xs = [50] choose_best_sum(163, 3, xs) -> nil (or null or ... or -1 (C++, C, D, Rust, Swift, Go, ...)

ys = [91, 74, 73, 85, 73, 81, 87] choose_best_sum(230, 3, ys) -> 228
Notes:

    try not to modify the input list of distances ls
    in some languages this "list" is in fact a string (see the Sample Tests).
*/
///Solution
//My
function chooseBestSum(t, k, ls, a, b, c, i1 = 0, i2 = 1, i3 = 2, choice_ls = []) {
  console.log(t, k, ls);
  if (ls.length < k) return null;
  else if (k == 3) {
    while (true) {
      a = ls[i1];
      b = ls[i2];
      c = ls[i3];
      choice_ls.push([a, b, c])
      i3++;
      if (i3 == ls.length) {
        i2++;
        i3 = i2 + 1;
      }
      if (i2 == ls.length - 1) {
        i1++;
        i2 = i1 + 1;
        i3 = i2 + 1;
      }
      if (i1 == ls.length - 2) break;
    }
  }
  else if (k == 2) {
    while (true) {
      a = ls[i1];
      b = ls[i2];
      choice_ls.push([a, b])
      i2++;
      if (i2 == ls.length) {
        i1++;
        i2 = i1 + 1;
      }
      if (i1 == ls.length - 1) break;
    }
  }
  console.log("Final array non-filtered:", ...choice_ls.map(x => x.reduce((a, b) => a + b)));
  console.log("Final array filtered:", ...choice_ls.map(x => x.reduce((a, b) => a + b)).filter(x => x <= t));
  console.log("Result:", Math.max(...choice_ls.map(x => x.reduce((a, b) => a + b)).filter(x => x <= t)));
  return Math.max(...choice_ls.map(x => x.reduce((a, b) => a + b)).filter(x => x <= t));
}
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
describe("chooseBestSum", function () {
  it("Basic tests ", function () {
    var ts = [50, 55, 56, 57, 58]
    Test.assertEquals(chooseBestSum(163, 3, ts), 163)
    ts = [50]
    Test.assertEquals(chooseBestSum(163, 3, ts), null)
    ts = [91, 74, 73, 85, 73, 81, 87]
    Test.assertEquals(chooseBestSum(230, 3, ts), 228)
    ys = [91, 74, 73, 85, 73, 81, 87]
    Test.assertEquals(chooseBestSum(230, 3, ys), 228)
    ts = [91, 74, 73, 85, 73, 81, 87]
    Test.assertEquals(chooseBestSum(331, 2, ts), 178)
  })
})