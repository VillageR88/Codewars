///Task
/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F

*/
///Solution
//My
export function abbrevName(name: string): string {
  var words = name.split(" ");
  var initials = ""
  for (var i = 0; i < words.length; i++) {
    initials += words[i][0]+".";
  }
  return initials = initials.slice(0, initials.length-1).toUpperCase();
}
//Codewars recommended
/*
solution #1
export function abbrevName(name: string): string {
    return name.split(" ").map((item)=> item[0].toUpperCase()).join('.')
}
solution #2
export function abbrevName(name: string): string {
    return name
      .split(" ")
      .map(n => n[0].toUpperCase())
      .join(".");
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
describe("Sample Test Cases", function(){
  const SamHarris = abbrevName("Sam Harris");
  const PatrickFeenan = abbrevName("Patrick Feenan");
  const RFavuzzi = abbrevName("R Favuzzi");
  it("Should return a proper abbreviate", function() {
    assert.strictEqual(SamHarris, "S.H", "Should return S.H");
    assert.strictEqual(PatrickFeenan, "P.F", "Should return P.F");
    assert.strictEqual(RFavuzzi, "R.F", "Should return R.F");
  });
});