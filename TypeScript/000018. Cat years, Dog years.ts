///Task
/*
Kata Task

I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

    humanYears >= 1
    humanYears are whole numbers only

Cat Years

    15 cat years for first year
    +9 cat years for second year
    +4 cat years for each year after that

Dog Years

    15 dog years for first year
    +9 dog years for second year
    +5 dog years for each year after that

*/
///Solution
//My
export function humanYearsCatYearsDogYears(humanYears: number): [number, number, number] {
  return [humanYears,
     humanYears == 1 ? 15 : humanYears == 2 ? 24 : humanYears > 2 ? 24+(humanYears-2)*4:0,
     humanYears == 1 ? 15 : humanYears == 2 ? 24 : humanYears > 2 ? 24+(humanYears-2)*5:0,]
  }

//Codewars recommended
/*
export function humanYearsCatYearsDogYears(humanYears: number): [number, number, number] {
  return humanYears == 1 ? [1, 15, 15] : [humanYears, (humanYears - 2) * 4 + 24, (humanYears - 2) * 5 + 24];
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
describe("Example Tests", function() {

  it("one", function() {
    assert.deepEqual(humanYearsCatYearsDogYears(1), [1,15,15]);
  });

  it("two", function() {
    assert.deepEqual(humanYearsCatYearsDogYears(2), [2,24,24]);
  });

  it("ten", function() {
    assert.deepEqual(humanYearsCatYearsDogYears(10), [10,56,64]);
  });

});