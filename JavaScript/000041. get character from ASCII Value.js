///Task
/*
Write a function which takes a number and returns the corresponding ASCII char for that value.

Example:

65 --> 'A'
97 --> 'a'
48 --> '0

For ASCII table, you can refer to http://www.asciitable.com/
*/
///Solution
//My
function getChar(c){
  // ...
}
//Codewars recommended
/*
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
describe( "diamond()", function(){

  it("Valid diamonds", () => {
    assert.strictEqual(diamond(1), "*\n")
    assert.strictEqual(diamond(3), " *\n***\n *\n")
    assert.strictEqual(diamond(5), "  *\n ***\n*****\n ***\n  *\n")
  });
  
  it("Invalid diamonds", () => {
    assert.strictEqual(diamond(2), null)
    assert.strictEqual(diamond(-3), null)
    assert.strictEqual(diamond(0), null)
  });
});