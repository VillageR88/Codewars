///Task
/*
Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

*/
///Solution
//My
export const boolToWord = (bool: boolean): string => {
  return bool==true?"Yes":"No";
};
//Codewars recommended
/*
export const boolToWord = (bool: boolean): string => {
  return bool ? 'Yes' : 'No';
}; */

///Tester => TrueScript 'Codewars' 'Sample Test' Tester (TSCSTT) v0.1.0 by VR.
//Declarations and definitions - part adjusted to VSC
function describe (opis: any, func: any) {
  func();
};
function it (opis: any, func: any) {
func();
};
import { assert } from "chai";
//Describe - invariant part
describe("boolToWord", function() {
  it("Sample tests", function() {
    assert.equal(boolToWord(true), "Yes");
    assert.equal(boolToWord(false), "No");
  });
});