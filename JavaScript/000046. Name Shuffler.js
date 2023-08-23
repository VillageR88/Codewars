///Task
/*
Write a function that returns a string in which firstname is swapped with last name.

Example(Input --> Output)

"john McClane" --> "McClane john"
*/
///Solution
//My
const nameShuffler = (str) => str.match(/\S+\w+$/) + " " + str.match(/\w+/);
//Codewars recommended
/* I like this one:
const nameShuffler = str =>
  str.replace(/([^\s]+) ([^\s]+)/, `$2 $1`);
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
describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(nameShuffler('john McClane'),'McClane john');
    assert.strictEqual(nameShuffler('Mary jeggins'),'jeggins Mary')
    assert.strictEqual(nameShuffler('tom jerry'),'jerry tom')
    assert.strictEqual(nameShuffler("William O'Brien"),'O\'Brien William')
    
  });
});