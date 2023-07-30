/*Zadanie
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.

*/
///Solution
//Moje
function sumMix(x){
let sum = 0;
for (i of x) sum += Number(i);
return sum;
}
//Najlepsze rozwiązanie od Codewars
/*
function sumMix(x){
  return x.map(a => +a).reduce((a, b) => a + b);
}
*/
///Tester
//JS 'Codewars' 'Sample Test' (JSCSTT) Tester v(nazwa pliku) by VR.
//const Test = require('@codewars/test-compat'); *przechowalnia
//const getMsg = (n) => `Player ${n} won!`; *przechowalnia
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;
assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41);