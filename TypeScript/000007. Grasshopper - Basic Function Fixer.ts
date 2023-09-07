///Task
/*
AFix the function

I created this function to add five to any number that was passed in to it and return the new value. It doesn't throw any errors but it returns the wrong number.

Can you help me fix the function?

*/
///Solution
//My
export const addFive = (num : number) : number => {
  return num+5;
}
//Codewars recommended
/*
export const addFive = (x: number): number => x + 5
*/

///Tester => TrueScript 'Codewars' 'Sample Test' Tester (TSCSTT)
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
//var solution = {hoopCount}

describe("Tests", function() {
  it("Fixed tests", function() {
    assert.strictEqual(addFive(5), 10);
    assert.strictEqual(addFive(0), 5);
    assert.strictEqual(addFive(-5), 0);
  });
});

