///Task
/*
Common denominators

You will have a list of rationals in the form

{ {numer_1, denom_1} , ... {numer_n, denom_n} } 
or
[ [numer_1, denom_1] , ... [numer_n, denom_n] ] 
or
[ (numer_1, denom_1) , ... (numer_n, denom_n) ] 

where all numbers are positive ints. You have to produce a result in the form:

(N_1, D) ... (N_n, D) 
or
[ [N_1, D] ... [N_n, D] ] 
or
[ (N_1', D) , ... (N_n, D) ] 
or
{{N_1, D} ... {N_n, D}} 
or
"(N_1, D) ... (N_n, D)"

depending on the language (See Example tests) in which D is as small as possible and

N_1/D == numer_1/denom_1 ... N_n/D == numer_n,/denom_n.

Example:

convertFracs [(1, 2), (1, 3), (1, 4)] `shouldBe` [(6, 12), (4, 12), (3, 12)]

Note:

Due to the fact that the first translations were written long ago - more than 6 years - 
these first translations have only irreducible fractions.

Newer translations have some reducible fractions. 
To be on the safe side it is better to do a bit more work by simplifying fractions even if they don't have to be.
Note for Bash:

input is a string, e.g "2,4,2,6,2,8" output is then "6 12 4 12 3 12"
*/
///Solution
//My
function convertFrac(lst) {
  var maxDenom = lst.reduce(function(acc, curr) {
    return lcm(acc, curr[1]);
  }, 1);

  var result = lst.map(function(frac) {
    var factor = maxDenom / frac[1];
    return [frac[0] * factor, maxDenom];
  });

  var may_vary = result.map(function(frac) {
    return "(" + frac[0] + "," + frac[1] + ")";
  }).join("");

  return may_vary;
}

function lcm(a, b) {
  return Math.abs(a * b) / gcd(a, b);
}

function gcd(a, b) {
  while (b !== 0) {
    var temp = b;
    b = a % b;
    a = temp;
  }
  return a;
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
const { isNumber, isFinite } = require('underscore');
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
describe("Tests", () => {
  it("test", () => {
    var lst = [[1, 2], [1, 3], [1, 4]]
    Test.assertEquals(convertFrac(lst), "(6,12)(4,12)(3,12)")
    var lst = [[69, 130], [87, 1310], [3, 4]]
    Test.assertEquals(convertFrac(lst), "(18078,34060)(2262,34060)(25545,34060)")
    var lst = [[8, 15], [7, 111], [4, 25]]
    Test.assertEquals(convertFrac(lst), "(1480,2775)(175,2775)(444,2775)")
  });
});