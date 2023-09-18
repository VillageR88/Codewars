///Task
/*
Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. 
Consonants are any letters of the alphabet except "aeiou".

We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"

-- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
solve("zodiacs") = 26

For the word "strength", solve("strength") = 57
-- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.

For C: do not mutate input.

More examples in test cases. Good luck!

If you like this Kata, please try:
*/
///Solution
//My
const solve = s => Math.max(...s.split(RegExp(/[aeiou]/g)).filter(x => x != "").map(x => x.split("").map(x => x.charCodeAt() - 96).reduce((a, b) => a + b)));
//Codewars recommended
/*
*/
///Tester => JS 'Codewars' 'Sample Test' Tester
//Declarations and definitions - part adjusted to VSC
const Test = require('@codewars/test-compat');
const chai = require("chai");
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
const assert = chai.assert;
chai.config.truncateThreshold = 0;
describe("Basic tests", function () {
  it("Should pass sample tests", function () {
    assert.strictEqual(solve("zodiacs"), 26);
    assert.strictEqual(solve("chruschtschov"), 80);
    assert.strictEqual(solve("khrushchev"), 38);
    assert.strictEqual(solve("strength"), 57);
    assert.strictEqual(solve("catchphrase"), 73);
    assert.strictEqual(solve("twelfthstreet"), 103);
    assert.strictEqual(solve("mischtschenkoana"), 80);
    assert.strictEqual(solve("az"), 26);
  });
});