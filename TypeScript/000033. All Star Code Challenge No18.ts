///Task
/*
Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

If no occurrences can be found, a count of 0 should be returned.

("Hello", "o")  ==>  1
("Hello", "l")  ==>  2
("", "z")       ==>  0

str_count("Hello", 'o'); // returns 1
str_count("Hello", 'l'); // returns 2
str_count("", 'z'); // returns 0

Notes

    The first argument can be an empty string
    In languages with no distinct character data type, the second argument will be a string of length 1

*/
///Solution
//My
export function strCount(str: string, letter: string): number {
  return Number(str.match(RegExp(letter,"g"))?.length||0);
}
//Codewars recommended
/*
export const strCount = (str: string, letter: string) => [...str].filter(c => c === letter).length;
 */

///Tester => TrueScript 'Codewars' 'Sample Test' Tester (TSCSTT) v0.1.0 by VR.
//Declarations and definitions - part adjusted to VSC
function describe (opis: any, func: any) {
  func();
};
function it (opis: any, func: any) {
func();
};
import { assert } from "chai";
//Describe - invariant part
describe("Sample Test Cases", function() {
  it("Testing for fixed test", () => {
    assert.strictEqual(strCount('Hello', 'o'), 1);
    assert.strictEqual(strCount('Hello', 'l'), 2);
    assert.strictEqual(strCount('',      'z'), 0);
  });
});