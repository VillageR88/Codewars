///Task
/*
ask:

Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).
Examples:

Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"

Have fun!

*/
///Solution
//My
export function oddOrEven(array: number[]):any {
  return array.length==0?"even":array.reduce((a,b)=>a+b)%2?"odd":"even";
}
//Codewars recommended
/*
*/

///Tester => TrueScript 'Codewars' 'Sample Test' Tester (TSCSTT)
//Declarations and definitions - part adjusted to VSC
function describe (_opis: any, func: any) {func();};
function it (_opis: any, func: any) {func();};
import { assert } from "chai";
//Describe - invariant part
describe('Fixed tests', () => {
  it('Edge tests', () => {
    assert.equal(oddOrEven([0]), 'even')
    assert.equal(oddOrEven([1]), 'odd')
    assert.equal(oddOrEven([]), 'even')
  });
  
  it('Even tests', () => {
    assert.equal(oddOrEven([0, 1, 5]), 'even')
    assert.equal(oddOrEven([0, 1, 3]), 'even')
    assert.equal(oddOrEven([1023, 1, 2]), 'even')
  });
  
  it('Negative Even tests', () => {
    assert.equal(oddOrEven([0, -1, -5]), 'even')
    assert.equal(oddOrEven([0, -1, -3]), 'even')
    assert.equal(oddOrEven([-1023, 1, -2]), 'even')
  });
  
  it('Odd tests', () => {
    assert.equal(oddOrEven([0, 1, 2]), 'odd')
    assert.equal(oddOrEven([0, 1, 4]), 'odd')
    assert.equal(oddOrEven([1023, 1, 3]), 'odd')
  });
  
  it('Negative Odd tests', () => {
    assert.equal(oddOrEven([0, -1, 2]), 'odd')
    assert.equal(oddOrEven([0, 1, -4]), 'odd')
    assert.equal(oddOrEven([-1023, -1, 3]), 'odd')
  });
});