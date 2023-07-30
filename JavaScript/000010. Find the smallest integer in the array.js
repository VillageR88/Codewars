/*Zadanie
Given an array of integers your solution should find the smallest integer.

For example:

    Given [34, 15, 88, 2] your solution will return 2
    Given [34, -345, -1, 100] your solution will return -345

You can assume, for the purpose of this kata, that the supplied array will not be empty.

*/
///Solution
//Moje
class SmallestIntegerFinder {
  findSmallestInt(args) {
    let that = args[0];
    for (Number of args) if (that > Number) that = Number; else null;
    return that;
  }
}
//Najlepsze rozwiązanie od Codewars
/*
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}
*/
///Tester
//JS 'Codewars' 'Sample Test' (JSCSTT) Tester v(nazwa pliku) by VR.
//const Test = require('@codewars/test-compat'); *przechowalnia
//const getMsg = (n) => `Player ${n} won!`; *przechowalnia
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;
let sif = new SmallestIntegerFinder();
assert.strictEqual(sif.findSmallestInt([78,56,232,12,8]),8,'Should return the smallest int 8');
assert.strictEqual(sif.findSmallestInt([78,56,232,12,18]),12,'Should return the smallest int 12');
assert.strictEqual(sif.findSmallestInt([78,56,232,412,228]),56,'Should return the smallest int 56');
assert.strictEqual(sif.findSmallestInt([78,56,232,12,0]),0,'Should return the smallest int 0');
assert.strictEqual(sif.findSmallestInt([1,56,232,12,8]),1,'Should return the smallest int 1');