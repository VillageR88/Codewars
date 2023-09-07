///Task
/*
The wide-mouth frog is particularly interested in the eating habits of other creatures.

He just can't stop asking the creatures he encounters what they like to eat.
But, then he meets the alligator who just LOVES to eat wide-mouthed frogs!

When he meets the alligator, it then makes a tiny mouth.

Your goal in this kata is to create complete the mouth_size method this method takes 
one argument animalwhich corresponds to the animal encountered by the frog.
If this one is an alligator (case-insensitive) return small otherwise return wide.

*/
///Solution
//My
export function mouthSize(animal: string): string {
  return animal.toLowerCase() == 'alligator' ? 'small' : 'wide';
}
//Codewars recommended
/*
export const mouthSize = (animal: string): string => /alligator/i.test(animal) ? 'small' : 'wide';
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
describe("Basic tests", () => {
  it("Basic tests should pass", () => {
    assert.equal(mouthSize("toucan"),"wide");
    assert.equal(mouthSize("ant bear"),"wide");
    assert.equal(mouthSize("alligator"),"small");
  });
});