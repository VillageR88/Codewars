/*Zadanie
In this kata you will create a function that takes a list of non-negative integers and strings
and returns a new list with the strings filtered out.
Example

filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

*/
///Solution
//My
function filter_list(l) {
  let new_arr = [];
  for (i of l) if (typeof(i) == "number") new_arr.push(i);
  return new_arr;
  // Return a new array with the strings filtered out
}
//Codewars recommended
/*
function filter_list(l) {
  return l.filter(function(v) {return typeof v == 'number'})
}
*/
///Tester
//JS 'Codewars' 'Sample Test' (JSCSTT) Tester v(nazwa pliku) by VR.
//const Test = require('@codewars/test-compat'); *przechowalnia
//const getMsg = (n) => `Player ${n} won!`; *przechowalnia
const Test = require('@codewars/test-compat');
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;
assert.deepEqual(filter_list([1,2,'a','b']),[1,2], 'For input [1,2,"a","b"]');
assert.deepEqual(filter_list([1,'a','b',0,15]),[1,0,15], 'For input [1,"a","b",0,15]');
assert.deepEqual(filter_list([1,2,'aasf','1','123',123]),[1,2,123], 'For input [1,2,"aasf","1","123",123]');