///Task
/*
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'

*/
///Solution
//My
export function solution(str: string): string {
  return [...str].reverse().join("");
}
//Codewars recommended
/*
*/

///Tester => TrueScript 'Codewars' 'Sample Test' Tester (TSCSTT) v0.1.0 by VR.
//Declarations and definitions - part adjusted to VSC
function describe (opis: any, func: any) {func();};
function it (opis: any, func: any) {func();};
import { assert } from "chai";
solution.solution = solution;
//Describe - invariant part
describe("Sample Test Cases", function(){
  it("Should return a string", function() {
    assert.equal(solution.solution('world'), 'dlrow');
    assert.equal(solution.solution('hello'), 'olleh');
    assert.equal(solution.solution(''), '');
    assert.equal(solution.solution('h'), 'h');
  });
});