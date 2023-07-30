/*Zadanie
Write a function which converts the input string to uppercase.

*/
///Solution
//Moje
function makeUpperCase(str) {
  // Code here
}
//Najlepsze rozwiązanie od Codewars
/*
*/
///Tester => JS 'Codewars' 'Sample Test' (JSCSTT) Tester v0.1.0 by VR.
//Main
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
//Describe
describe("Basic Tests", function(){
  it("should pass the basic tests", function(){
    assert.strictEqual(makeUpperCase(""),           "");
    assert.strictEqual(makeUpperCase("hello"), "HELLO");
    assert.strictEqual(makeUpperCase("Hello"), "HELLO");
    assert.strictEqual(makeUpperCase("HELLO"), "HELLO");
  });
});