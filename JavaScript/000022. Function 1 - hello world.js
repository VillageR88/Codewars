/*Zadanie
Make a simple function called greet that returns the most-famous "hello world!".
Style Points

Sure, this is about as easy as it gets. But how clever can you be to create the most creative "hello world" you can think of? What is a "hello world" solution you would want to show your friends?

*/
///Solution
//My
function greet() {
  return "hello world!";
}
//Codewars recommended
/*
const quarterOf = m => Math.ceil(m/3);
*/
///Tester => JS 'Codewars' 'Sample Test' Tester (JSCSTT) v0.1.0 by VR.
//Deklaracje i definicje - część dostosowana do VSC
const Test = require('@codewars/test-compat');
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;
function describe (opis, funkcja) {
  funkcja();
};
function it (opis, funkcja) {
  funkcja();
};
//Describe - część niezmieniana
describe("Testing function", function() {
  it("Is it a function?", function() {
    assert.strictEqual(typeof greet, "function", "greet should be a function");
  });
  it("Correct return-value?", function() {
    assert.strictEqual(greet(), "hello world!");
  });
});