///Task
/*
You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.
*/
///Solution
//My
export function twoSort(s: string[]): string {
  var new_string = "";
  s.sort();
  for (var i = 0; i < s[0].length; i++){
    new_string += s[0][i];
    if (i < s[0].length-1) new_string +="***";
  }
  return new_string;
}
//Codewars recommended
/*
export function twoSort(s: string[]): string {
  return s
    .sort()[0]
    .split("")
    .join("***");
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
describe("Sort and Star", function(){
  it("Sample tests", function() {
    assert.equal(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n');
    assert.equal(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]), 'a***r***e');
    assert.equal(twoSort(["lets", "talk", "about", "javascript", "the", "best", "language"]), 'a***b***o***u***t');
    assert.equal(twoSort(["i", "want", "to", "travel", "the", "world", "writing", "code", "one", "day"]), 'c***o***d***e');
    assert.equal(twoSort(["Lets", "all", "go", "on", "holiday", "somewhere", "very", "cold"]), 'L***e***t***s');
  });
});
