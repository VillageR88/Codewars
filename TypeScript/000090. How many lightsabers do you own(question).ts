///Task
/*
Inspired by the development team at Vooza, write the function that

    accepts the name of a programmer, and
    returns the number of lightsabers owned by that person.

The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.

Note: your function should have a default parameter.

For example(Input --> Output):

"anyone else" --> 0
"Zach" --> 18

*/

///Solution
//My soloution
export const howManyLightsabersDoYouOwn = (name?: any) => Number({Zach: 18}[name as keyof void] ?? 0);
// The question mark (?) after name attribute marks it as optional.//Codewars recommended)
/*
export const howManyLightsabersDoYouOwn = (name?: any): number => name === 'Zach' ? 18 : 0
*/  

///Tester => TrueScript 'Codewars' 'Sample Test' Tester (TSCSTT)
//Declarations and definitions - part adjusted to VSC
function describe (_desc: any, func: any) {func();};
function it (_desc: any, func: any) {func();};
import { randomNumber } from "@codewars/test-compat";
import { assert } from "chai";
import { expect } from 'chai';
import { teardown } from "mocha";
//Describe - invariant part
describe("How many light sabers?", function() {
  it("Basic tests", function() {
    assert.equal(howManyLightsabersDoYouOwn('Zach'), 18);
    assert.equal(howManyLightsabersDoYouOwn('Adam'), 0);
  });
});