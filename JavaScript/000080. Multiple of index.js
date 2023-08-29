///Task
/*
Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
Some cases:

[22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]

[68, -1, 1, -7, 10, 10] => [-1, 10]

[-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]
*/
///Solution
//My
const multipleOfIndex = array => array.filter((x, i, arr) => x == 0 || x % i == 0);
//Codewars recommended
/*
*/
///Tester => JS 'Codewars' 'Sample Test' Tester
//Declarations and definitions - part adjusted to VSC
const Test = require('@codewars/test-compat');
const chai = require("chai");
const deeepEqual = chai.assert.deepEqual;
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
describe("Basic tests",() => {
  const testCases = [
        [[22, -6, 32, 82, 9, 25], [-6, 32, 25]], //[-6, 32, 25]
        [[68, -1, 1, -7, 10, 10], [-1, 10]],
        [[11, -11], [-11]],
        [[-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68], [-85, 72, 0, 68]],
        [[28,38,-44,-99,-13,-54,77,-51], [38, -44, -99]],
        [[-1,-49,-1,67,8,-60,39,35], [-49, 8, -60, 35]],
        [[0, 2, 3, 6, 9], [0, 2, 6]]
  ];
  for(const [input, expected] of testCases)
    it(`Testing for [${input}]`, () => assert.deepEqual(multipleOfIndex(input), expected));
});