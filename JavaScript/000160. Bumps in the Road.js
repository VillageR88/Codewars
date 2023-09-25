///Task
/*
Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). 
If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead
*/
///Solution
//My
const bump = x => (x.match(/n/g)?.length || 0) <= 15 ? "Woohoo!" : "Car Dead";
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
describe("Bumps in the Road", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(bump("n"), "Woohoo!");
    assert.strictEqual(bump("__nn_nnnn__n_n___n____nn__nnn"), "Woohoo!");
    assert.strictEqual(bump("nnn_n__n_n___nnnnn___n__nnn__"), "Woohoo!");
    assert.strictEqual(bump("_nnnnnnn_n__n______nn__nn_nnn"), "Car Dead");
    assert.strictEqual(bump("______n___n_"), "Woohoo!");
  });
});