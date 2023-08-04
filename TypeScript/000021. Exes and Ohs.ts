///Task
/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false


*/
///Solution
//My
export function xo(str: string) : boolean {
  var o_count = 0;
  var x_count = 0;
  for (var i of str.toLowerCase()) {
    i == "x" ? x_count++: i == "o"?o_count++:0;
  }
  return x_count==o_count;
}
//Codewars recommended
/*
export function xo(str: string) {
  return str.toLowerCase().split('x').length == str.toLowerCase().split('o').length;
}
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
describe("xo", function() {
  it("Basic Tests", function() {
    assert.strictEqual(xo('xo'),true);
    assert.strictEqual(xo("xxOo"),true);
    assert.strictEqual(xo("xxxm"),false);
    assert.strictEqual(xo("Oo"),false);
    assert.strictEqual(xo("ooom"),false);
  });
});