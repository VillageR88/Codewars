///Task
/*
Now you have to write a function that takes an argument and returns the square of it.

*/
///Solution
//My
export function square(n: number){
  return n*n;
}
//Codewars recommended
/*
export function square(n: number): number{
  return n * n
}
*/

///Tester => TS 'Codewars' 'Sample Test' Tester (TSCSTT) v0.1.0 by VR.
//Declarations and definitions - part adjusted to VSC
//const Test = require('@codewars/test-compat');
//const chai = require("chai");
//const assert = chai.assert;
//chai.config.truncateThreshold=0;
function describe (opis: any, func: any) {
  func();
};
function it (opis: any, func: any) {
  func();
};
//Describe - invariant part
import { assert } from "chai";
//var solution = {function}


const DELTA = 0.05
describe("Tests", function() {
  it("Fixed tests", function() {
    assert.approximately(square(2), 4, DELTA);
    assert.approximately(square(0), 0, DELTA);
    assert.approximately(square(1), 1, DELTA);
    assert.approximately(square(12), 144, DELTA);
    assert.approximately(square(100), 10000, DELTA);
    assert.approximately(square(3), 9, DELTA);
    assert.approximately(square(5), 25, DELTA);
    assert.approximately(square(-2), 4, DELTA);
    assert.approximately(square(-2.2), 4.84, DELTA);
  });
});
