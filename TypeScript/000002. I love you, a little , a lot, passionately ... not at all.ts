///Task
/*
Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

    "I love you"
    "a little"
    "a lot"
    "passionately"
    "madly"
    "not at all"

If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.

*/
///Solution
//My
export function howMuchILoveYou(petals: number): string{
  while (petals > 6) petals = petals - 6;
  var choice = {1: "I love you", 2: "a little", 3: "a lot", 4: "passionately", 5: "madly", 6: "not at all"};
  return choice[petals as keyof typeof choice];
}
//Codewars recommended
/*
export function howMuchILoveYou(nbPetals:number):string {
  return ['not at all','I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'][nbPetals % 6]
}
}
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

describe("I love you...", function() {
  it("Basic tests", function() {
    assert.equal(howMuchILoveYou(7), "I love you", "Number of petals can be higher than 6");
    assert.equal(howMuchILoveYou(3), "a lot");
    assert.equal(howMuchILoveYou(6), "not at all");
  });
});