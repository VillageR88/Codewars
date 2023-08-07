///Task
/*
Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).

*/
///Solution
//My
export function isTriangle(a: number, b: number, c: number): boolean {
  return a<b+c&&b<a+c&&c<a+b;
}
//Codewars recommended
/*
export const isTriangle = (a: number, b: number, c: number): boolean =>
  a + b > c && a + c > b && b + c > a
*/

///Tester => TrueScript 'Codewars' 'Sample Test' Tester (TSCSTT) v0.1.0 by VR.
//Declarations and definitions - part adjusted to VSC
function describe (_opis: any, func: any) {func();};
function it (_opis: any, func: any) {func();};
import { assert } from "chai";
//Describe - invariant part
describe("PublicTest", function() {
  it("should pass basic tests", () => {
    assert.strictEqual(isTriangle(1, 2, 2), true);
    assert.strictEqual(isTriangle(7, 2, 2), false);
  });
});
