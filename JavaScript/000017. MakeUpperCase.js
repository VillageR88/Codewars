/*Zadanie
Write a function which converts the input string to uppercase.

*/
///Solution
//My
function makeUpperCase(str) {
 return str.toUpperCase();
}
//Codewars recommended
/*
*/
///Tester => JS 'Codewars' 'Sample Test' Tester (JSCSTT) v0.1.0 by VR.
//Deklaracje i definicje - część dostosowana do VSC
//const Test = require('@codewars/test-compat');
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
describe("Basic Tests", function(){
  it("should pass the basic tests", function(){
    assert.strictEqual(makeUpperCase(""),           "");
    assert.strictEqual(makeUpperCase("hello"), "HELLO");
    assert.strictEqual(makeUpperCase("Hello"), "HELLO");
    assert.strictEqual(makeUpperCase("HELLO"), "HELLO");
  });
});