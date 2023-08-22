/*Zadanie
Write a function to split a string and convert it into an array of words.
Examples (Input ==> Output):

"Robin Singh" ==> ["Robin", "Singh"]

"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

*/
///Solution
//My
function stringToArray(string){
  return string.split([" "]);
}
//Codewars recommended
/*
function stringToArray(string){
  return string.split(' ');
}
*/
///Tester => JS 'Codewars' 'Sample Test' Tester
//Declarations and definitions - part adjusted to VSC
const Test = require('@codewars/test-compat');
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;
//Describe - invariant part
assert.deepEqual(stringToArray("Robin Singh"), ["Robin", "Singh"]);
assert.deepEqual(stringToArray("I love arrays they are my favorite"), ["I", "love", "arrays", "they", "are", "my", "favorite"]);