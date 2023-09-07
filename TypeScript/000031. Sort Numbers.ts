///Task
/*
Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

For example:

solution([1, 2, 10, 50, 5]); // should return [1, 2, 5, 10, 50]
solution([]); // should return []

*/
///Solution
//My
export function solution(nums: number[]): number[] {
  return nums.sort((a, b) => a - b);
}
//Codewars recommended
/*
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
solution.solution = solution;
//Describe - invariant part
describe("Sample Test Cases", function(){
  it("Should return an array", function() {
    assert.deepEqual(solution.solution([1, 2, 10, 50, 5]), [1,2,5,10,50]);
    assert.deepEqual(solution.solution([]), []);
  });
});