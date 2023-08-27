///Task
/*
As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).

For example:

gimme([2, 3, 1]) => 0

2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

Another example (just to make sure it is clear):

gimme([5, 10, 14]) => 1

10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.
*/
///Solution
//My
const gimme = (triplet) => triplet.findIndex((x) => x ^ Math.min(...triplet) && x ^ Math.max(...triplet));
//) Math.min(...triplet);
//Codewars recommended
/*
function gimme(a) {
  return a.indexOf(a.concat().sort(function(a, b) { return a - b })[1])
}
*/
///Tester => JS 'Codewars' 'Sample Test' Tester
//Declarations and definitions - part adjusted to VSC
const Test = require('@codewars/test-compat');
const chai = require("chai");
const assert = chai.assert;
const strictEqual = require('chai').assert.strictEqual;
chai.config.truncateThreshold=0;
function describe (tag, func) {
  func();
};
function it (tag, func) {
  func();
};
//Describe - invariant part
function doTest (triplet, expected) {
	const actual = gimme(triplet);
	strictEqual(actual, expected, `for [${triplet}], expected ${expected} but got ${actual}`);
}
describe("Basic Test", function () {
	it("Tests for integers", function () {
		doTest([2, 3, 1], 0);
		doTest([5, 10, 14], 1);
	});
	it("Tests for floats", function () {
		doTest([2.1, 3.2, 1.4], 0);
		doTest([5.9, 10.4, 14.2], 1);
	});
	it("Tests for negative numbers", function () {
		doTest([-2, -3, -1], 0);
		doTest([-5, -10, -14], 1);
	});
	it("Tests for mixed numbers", function () {
		doTest([-2, -3.2, 1], 0);
		doTest([-5.2, -10.6, 14], 0);
	});
});