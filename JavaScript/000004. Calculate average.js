///Task
/*
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.

*/
///Solution
//My
function findAverage(array) {
  let wynik = 0;
  if (array.length > 0) {
  for (i of array) wynik = wynik + i;
  return wynik/array.length;
  }
  else return 0;
}
//Codewars recommended
/*
var find_average = (array) => {  
  return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
}
*/
///Tester => JS 'Codewars' 'Sample Test' Tester
//Declarations and definitions - part adjusted to VSC
const chai = require("chai");
const assert = chai.assert;
//Describe - invariant part
assert.strictEqual(findAverage([1,1,1]), 1);
assert.strictEqual(findAverage([1,2,3]), 2);
assert.strictEqual(findAverage([1,2,3,4]), 2.5);
assert.strictEqual(findAverage([]), 0);