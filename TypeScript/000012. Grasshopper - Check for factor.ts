///Task
/*
This function should test if the factor is a factor of base.

Return true if it is a factor or false if it is not.
About factors

Factors are numbers you can multiply together to get another number.

2 and 3 are factors of 6 because: 2 * 3 = 6

    You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
    You can use the mod operator (%) in most languages to check for a remainder

For example 2 is not a factor of 7 because: 7 % 2 = 1

Note: base is a non-negative number, factor is a positive number.

*/
///Solution
//My
export function checkForFactor(base: number, factor: number) {
  return base%factor<=0;
}
//Codewars recommended
/*
export const checkForFactor = (base: number, factor: number) : boolean => !(base % factor);
*/

///Tester => TrueScript 'Codewars' 'Sample Test' Tester (TSCSTT)
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
//import { checkForFactor } from "./solution";

const tester = (base: number, factor: number, exp: boolean) => it(`checkForFactor(${base}, ${factor})`, () => assert.strictEqual(checkForFactor(base, factor), exp));

describe("Basic tests", function() {
  tester(10, 2, true);
  tester(63, 7, true);
  tester(2450, 5, true);
  tester(24612, 3, true);
  tester(9, 2, false);
  tester(653, 7, false);
  tester(2453, 5, false);
  tester(24617, 3, false);
});
