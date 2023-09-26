///Task
/*
Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5

For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

For example, decode("h3 th2r2") would return "hi there".

For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.
*/
///Solution
//My
const encode = s => [...s].map(x => x = { a: 1, e: 2, i: 3, o: 4, u: 5 }[x] || x).join("");
const decode = s => [...s].map(x => x = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' }[x] || x).join("");

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
describe("Sample tests", function () {
  it("Tests", function () {
    assert.equal(encode('hello'), 'h2ll4');
    assert.equal(encode('How are you today?'), 'H4w 1r2 y45 t4d1y?');
    assert.equal(encode('This is an encoding test.'), 'Th3s 3s 1n 2nc4d3ng t2st.');
    assert.equal(decode('h2ll4'), 'hello');
  });
});