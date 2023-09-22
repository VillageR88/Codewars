///Task
/*
You need to write regex that will validate a password to make sure it meets the following criteria:

    At least six characters long
    contains a lowercase letter
    contains an uppercase letter
    contains a digit
    only contains alphanumeric characters (note that '_' is not alphanumeric)

*/
///Solution
//My
const REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/
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
describe("Tests suite", () => {

  const { strictEqual } = require('chai').assert;

  function doTest(string, expected) {
    const actual = REGEXP.test(string);
    const log = `"${string}" is${expected ? '' : ' not'} a valid password\n`;
    strictEqual(actual, expected, log);
  }


  it("sample tests", () => {
    doTest('fjd3IR9', true);
    doTest('ghdfj32', false);
    doTest('DSJKHD23', false);
    doTest('dsF43', false);
    doTest('4fdg5Fj3', true);
    doTest('DHSJdhjsU', false);
    doTest('fjd3IR9.;', false);
    doTest('fjd3  IR9', false);
    doTest('djI38D55', true);
    doTest('djI3_8D55', false);
    doTest('djI38D55@@', false);
  });
});