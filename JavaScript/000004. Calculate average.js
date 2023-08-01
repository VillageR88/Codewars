/*Zadanie
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.

*/
///Solution
//Moje
function findAverage(array) {
  let wynik = 0;
  if (array.length > 0) {
  for (i of array) wynik = wynik + i;
  return wynik/array.length;
  }
  else return 0;
}
//Najlepsze rozwiązanie od Codewars
/*
var find_average = (array) => {  
  return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
}
*/
///Tester
//JS 'Codewars' 'Sample Test' (JSCSTT) Tester v(nazwa pliku) by VR.
//const Test = require('@codewars/test-compat'); *przechowalnia
//const getMsg = (n) => `Player ${n} won!`; *przechowalnia
const chai = require("chai");
const assert = chai.assert;
assert.strictEqual(findAverage([1,1,1]), 1);
assert.strictEqual(findAverage([1,2,3]), 2);
assert.strictEqual(findAverage([1,2,3,4]), 2.5);
assert.strictEqual(findAverage([]), 0);