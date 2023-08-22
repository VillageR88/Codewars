///Task
/*

Implement the function unique_in_order which takes as argument a sequence and returns a list of items
without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]

*/
///Solution
//My
var uniqueInOrder = function (iterable) {
  return  [...iterable].filter((_, i, a) => a[i] != a[i - 1]);
}
//Codewars recommended
/*
var uniqueInOrder=function(iterable){
    return [...iterable].filter((a, i) => a !== iterable[i-1])
}
*/
///Tester => JS 'Codewars' 'Sample Test' Tester
//Declarations and definitions - part adjusted to VSC
const Test = require('@codewars/test-compat');
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;
function describe (tag, func) {
  func();
};
function it (tag, func) {
  func();
};
//Describe - invariant part
describe("Tests", () => {
  it("test", () => {
    assert.deepEqual(uniqueInOrder('AAAABBBCCDAABBB'), ['A','B','C','D','A','B'])
    assert.deepEqual(uniqueInOrder([1,2,2,3,3]), [1,2,3])
  });
});
