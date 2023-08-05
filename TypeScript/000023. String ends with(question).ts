///Task
/*
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false

*/
///Solution
//My
export function solution(str: string, ending: string): boolean {
  return str.slice(str.length-ending.length) == ending;
}
//Codewars recommended
/*
export function solution(str: string, ending: string): boolean {
  return str.endsWith(ending);
}
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
solution.solution = solution;
//Describe - invariant part
describe("Sample Test Cases", function(){
  it("Should return true or false", function() {
    assert.equal(solution.solution('abcde', 'cde'), true);
    assert.equal(solution.solution('abcde', 'abc'), false);
    assert.equal(solution.solution('abc', ''), true);
  });
});