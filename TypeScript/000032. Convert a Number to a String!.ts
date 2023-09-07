///Task
/*
We need a function that can transform a number (integer) into a string.

What ways of achieving this do you know?
Examples (input --> output):

123  --> "123"
999  --> "999"
-100 --> "-100"

*/
///Solution
//My
export function numberToString(num: number): string {
  return num.toString();
}
//Codewars recommended
/*
 */

///Tester => TrueScript 'Codewars' 'Sample Test' Tester (TSCSTT)
//Declarations and definitions - part adjusted to VSC
function describe (opis: any, func: any) {
  func();
};
function it (opis: any, func: any) {
func();
};
import { assert } from "chai";
import { expect } from "chai";
//Describe - invariant part
describe("numberToString", function() {
  it("should work correctly", () => {
    expect(numberToString(67)).to.equal('67');
  });
});