///Task
/*
Your friend invites you out to a cool floating pontoon around 1km off the beach. Among other things, the pontoon has a huge slide that drops you out right into the ocean, a small way from a set of stairs used to climb out.

As you plunge out of the slide into the water, you see a shark hovering in the darkness under the pontoon... Crap!

You need to work out if the shark will get to you before you can get to the pontoon. To make it easier... as you do the mental calculations in the water you either freeze when you realise you are dead, or swim when you realise you can make it!

You are given 5 variables;

    sharkDistance = distance from the shark to the pontoon. The shark will eat you if it reaches you before you escape to the pontoon.

    sharkSpeed = how fast it can move in metres/second.

    pontoonDistance = how far you need to swim to safety in metres.

    youSpeed = how fast you can swim in metres/second.

    dolphin = a boolean, if true, you can half the swimming speed of the shark as the dolphin will attack it.

    The pontoon, you, and the shark are all aligned in one dimension.

If you make it, return "Alive!", if not, return "Shark Bait!".
*/
///Solution
//My
const shark = (pD, sD, yS, sS, d) => pD / yS < sD / (d ? sS / 2 : sS) ? "Alive!" : "Shark Bait!";
///Tester => JS 'Codewars' 'Sample Test' Tester
//Declarations and definitions - part adjusted to VSC
const Test = require('@codewars/test-compat');
const chai = require("chai");
const assert = chai.assert;
const { matchAll } = require('nunit-command/regex');
const deeepEqual = chai.assert.deepEqual;
const strictEqual = require('chai').assert.strictEqual;
chai.config.truncateThreshold = 0;
function describe(tag, func) {
  func();
};
function it(tag, func) {
  func();
};
//Describe - invariant part describe
describe("Example tests", () => {
  Test.assertEquals(shark(12, 50, 4, 8, true), "Alive!");
  Test.assertEquals(shark(7, 55, 4, 16, true), "Alive!");
  Test.assertEquals(shark(24, 0, 4, 8, true), "Shark Bait!");
  Test.assertEquals(shark(30, 166, 3, 20, true), "Shark Bait!");
});