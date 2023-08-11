///Task
/*
Your task is to sort a given string. Each word in the string will contain a single number.
This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string.
The words in the input String will only contain valid consecutive numbers.
Examples

"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""

*/
///Solution
//My soloution
export function order(words: string): string {
  const arr1 = words.split(" ");
  let arr2 = new Array(arr1.length);
  for (var i = 0; i < arr1.length; i++) {
    arr2[Number(arr1[i][arr1[i].search(/[0-9]/)]) -1] = arr1[i];
  }
  return arr2.join(" ");
}
//Codewars recommended
/*
export function order(words:String):String{
  return words.split(' ')
              .sort((a,b)=> +a.match(/\d/)-+b.match(/\d/))
              .join(' ')
}
*/

///Tester => TrueScript 'Codewars' 'Sample Test' Tester (TSCSTT) v0.1.0 by VR.
//Declarations and definitions - part adjusted to VSC
function describe (_desc: any, func: any) {func();};
function it (_desc: any, func: any) {func();};
import { assert } from "chai";
import { expect } from 'chai';
import { teardown } from "mocha";
//Describe - invariant part
describe("solution", function(){
  it("basicTests", function(){
    assert.equal(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est");
    assert.equal(order("4of Fo1r pe6ople g3ood th5e the2"), "Fo1r the2 g3ood 4of th5e pe6ople");
    assert.equal(order(""), "");
  });
});

