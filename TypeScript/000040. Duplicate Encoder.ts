  ///Task
/*
The goal of this exercise is to convert a string to a new string where each character in the new string is
"(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string.
Ignore capitalization when determining if a character is a duplicate.
Examples

"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 

Notes

Assertion messages may be unclear about what they display in some languages.
If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

*/
///Solution
//My
export function duplicateEncode(word: string){
  var word_translator = "";
  for (var i of word.toLowerCase()) {
    var counter = 0;
    for (var j of word.toLowerCase()) {
      if (i == j) {
        counter ++;
      }
    }
    if (counter > 1) word_translator += ")";
    else word_translator += "(";
  }
  return word_translator;
}
//Codewars recommended
/*
export function duplicateEncode(word: string){
    // ...
    return word
    .toLowerCase()
    .split('')
    .map((a, i, w) => {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('')
}
*/

///Tester => TrueScript 'Codewars' 'Sample Test' Tester (TSCSTT) v0.1.0 by VR.
//Declarations and definitions - part adjusted to VSC
function describe (opis: any, func: any) {func();};
function it (opis: any, func: any) {func();};
import { assert } from "chai";
//Describe - invariant part
describe("example", function() {
  it("test", function() {
    assert.strictEqual(duplicateEncode("din"),"(((");
    assert.strictEqual(duplicateEncode("recede"),"()()()");
    assert.strictEqual(duplicateEncode("Success"),")())())","should ignore case");
    assert.strictEqual(duplicateEncode("(( @"),"))((");
  });
});