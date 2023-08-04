///Task
/*
Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11

However, the arrays can have varying lengths, not just limited to 4.
*/
///Solution
//My
export function binaryArrayToNumber(arr: number[]): number{
  var result = 0;
  var n = 1;
  for (var i = 0; i < arr.length; i++){
    if (arr[arr.length-1-i] != 0) {
      result += n;
    }
    n *= 2;
  }
  return result;
};
//Codewars recommended
/*
export function binaryArrayToNumber(arr: number[]): number{
  return parseInt(arr.join(""), 2)
};
*/

///Tester => TS 'Codewars' 'Sample Test' Tester (TSCSTT) v0.1.0 by VR.
//Declarations and definitions - part adjusted to VSC
function describe (opis: any, func: any) {
  func();
};
function it (opis: any, func: any) {
func();
};
import { assert } from "chai";
//Describe - invariant part
describe("One's and Zero's", () => {
  it("Example tests", () => {
      assert.strictEqual(binaryArrayToNumber([0,0,0,1]), 1);
      assert.strictEqual(binaryArrayToNumber([0,0,1,0]), 2);
      assert.strictEqual(binaryArrayToNumber([1,1,1,1]), 15);
      assert.strictEqual(binaryArrayToNumber([0,1,1,0]), 6);
  });
});