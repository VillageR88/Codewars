/*Zadanie
Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
Examples (input -> output)

6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"

*/
///Solution
//My
function repeatStr (n, s) {
    let word = ""; for (i = 1; i <= n; i++) word += s; return word;
}
//Codewars recommended
/*
function repeatStr (n, s) {
  return s.repeat(n);
}
*/
///Tester
//JS 'Codewars' 'Sample Test' (JSCSTT) Tester v(nazwa pliku) by VR.
//const Test = require('@codewars/test-compat'); *przechowalnia
//const getMsg = (n) => `Player ${n} won!`; *przechowalnia
const chai = require("chai");
const assert = chai.assert;
assert.strictEqual(repeatStr(3, "*"), "***");
assert.strictEqual(repeatStr(5, "#"), "#####");
assert.strictEqual(repeatStr(2, "ha "), "ha ha ");