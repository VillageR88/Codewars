  ///Task
/*
Count the number of Duplicates

Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
Example

"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice

*/
///Solution
//My
export function duplicateCount(text: string): number{
  var max_count = 0;
  for (var i of new Set(text.toLowerCase())) {
    var counter = 0;
    for (var j of text.toLowerCase()) {
      if (i == j) {
        counter++;
        if (counter == 2) {
          max_count++;
        }
      }
    }
  }
  return max_count;
}
//Codewars recommended
/*
import _ from 'lodash';

export function duplicateCount(text: string): number {
  return _(text).countBy(_.toUpper).values().filter(x => x > 1).size();
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
    assert.equal(duplicateCount(""), 0);
    assert.equal(duplicateCount("abcde"), 0);
    assert.equal(duplicateCount("aabbcde"), 2);
    assert.equal(duplicateCount("aabBcde"), 2,"should ignore case");
    assert.equal(duplicateCount("Indivisibility"), 1)
    assert.equal(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent")
  });
});