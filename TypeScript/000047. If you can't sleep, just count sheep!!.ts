///Task
/*
If you can't sleep, just count sheep!!
Task:

Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

*/
///Solution
//My
export function countSheep(num: number): string {
  return Array(num).fill(0).map((x,index)=>x=(index+1).toString()+" sheep...").join("").toString();
}
//Codewars recommended
/*
*/

///Tester => TrueScript 'Codewars' 'Sample Test' Tester (TSCSTT)
//Declarations and definitions - part adjusted to VSC
function describe (_opis: any, func: any) {func();};
function it (_opis: any, func: any) {func();};
import { assert } from "chai";
var solution = {countSheep};
//Describe - invariant part
describe("Sample Test Cases", function(){
  it("Should return a string", function() {
    assert.equal(solution.countSheep(0), '');
    assert.equal(solution.countSheep(1), '1 sheep...');
    assert.equal(solution.countSheep(2), '1 sheep...2 sheep...');
    assert.equal(solution.countSheep(3), '1 sheep...2 sheep...3 sheep...');
  });
});