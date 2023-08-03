/*Task
A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

Return true if yes, false otherwise :)

*/
///Solution
//My
export function hero(bullets: number, dragons: number): boolean {
  return bullets>=dragons*2;
}
//Codewars recommended
/*
export function hero(bullets: number, dragons: number): boolean {
  return bullets >= 2 * dragons;
}
*/
///Tester => TS 'Codewars' 'Sample Test' Tester (TSCSTT) v0.1.0 by VR.
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
var solution = {hero}
//Describe - invariant part
import { assert } from "chai";

describe("Tests:", function() {
  it("Basic tests:", function() {
    assert.equal(hero(10, 5), true);
    assert.equal(hero(7, 4), false);
    assert.equal(hero(4, 5), false);
    assert.equal(hero(100, 40), true);
    assert.equal(hero(1500, 751), false);
    assert.equal(hero(0, 1), false);
  });
});