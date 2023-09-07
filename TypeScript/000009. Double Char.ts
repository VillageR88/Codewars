///Task
/*
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
Examples (Input -> Output):

* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "

Good Luck!

*/
///Solution
//My
export function doubleChar(str: string): string{
  let newstr = "";
  for (let i = 0; i < str.length; i++) {newstr += str[i]+str[i];}
  return newstr;
}
//Codewars recommended
/*
export const doubleChar = (str: string): string =>
  str
    .split('')
    .map(c => c.repeat(2))
    .join('');
*/

///Tester => TS 'Codewars' 'Sample Test' Tester (TSCSTT) v0.1.0 by VR.
//Declarations and definitions - part adjusted to VSC
//const Test = require('@codewars/test-compat');
//const chai = require("chai");
//const assert = chai.assert;
//chai.config.truncateThreshold=0;
function describe (opis: any, func: any) {
  func();
};
function it (opis: any, func: any) {
  func();
};
//Describe - invariant part
import { assert } from "chai";
//var solution = {function}

describe("doubleChar", () => {
  it("works for some examples", () => {
    assert.strictEqual(doubleChar("abcd"), "aabbccdd");
    assert.strictEqual(doubleChar("Adidas"), "AAddiiddaass");
    assert.strictEqual(doubleChar("1337"), "11333377");
    assert.strictEqual(doubleChar("illuminati"), "iilllluummiinnaattii");
    assert.strictEqual(doubleChar("123456"), "112233445566");
    assert.strictEqual(doubleChar("%^&*("), "%%^^&&**((");
  });
});
