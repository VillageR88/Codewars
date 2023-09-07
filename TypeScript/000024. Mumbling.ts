///Task
/*
This time no story, no theory. The examples below show you how to write function accum:
Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

The parameter of accum is a string which includes only letters from a..z and A..Z.

*/
///Solution
//My
export function accum(s: string): string {
  var new_s = "";
  for (var i = 0; i < s.length; i++) {
    new_s += s[i].toUpperCase();
    for (var j = 0; j < i; j++) { 
      new_s += s[i].toLowerCase();
    }
    if (i<s.length-1) {
      new_s += "-";
    }
  }
  return new_s;
}
//Codewars recommended
/*
export function accum(s: string): string {
  return [...s.toLowerCase()]
    .map((c, idx) => c.toUpperCase() + c.repeat(idx))
    .join('-')

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
//Describe - invariant part
describe("Fixed Tests accum", function() {
  it("Basic tests", function() {
    assert.strictEqual(
      accum("ZpglnRxqenU"),
      "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
    );
    assert.strictEqual(
      accum("NyffsGeyylB"),
      "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb"
    );
    assert.strictEqual(
      accum("MjtkuBovqrU"),
      "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu"
    );
    assert.strictEqual(
      accum("EvidjUnokmM"),
      "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm"
    );
    assert.strictEqual(
      accum("HbideVbxncC"),
      "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc"
    );
  });
});
