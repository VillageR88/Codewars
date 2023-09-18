///Task
/*
Wolves have been reintroduced to Great Britain. 
You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. 
Fortunately, you are good at spotting them.

Warn the sheep in front of the wolf that it is about to be eaten. 
Remember that you are standing at the front of the queue which is at the end of the array:

[sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
   7      6      5      4      3            2      1

If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". 
Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

Note: there will always be exactly one wolf in the array.
Examples

Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

Input: ["sheep", "sheep", "wolf"]
Output: "Pls go away and stop eating my sheep"
*/
///Solution
//My
const warnTheSheep = queue => queue.findIndex(x => x == "wolf") == queue.length - 1 || 0 ? "Pls go away and stop eating my sheep" : `Oi! Sheep number ${queue.length - 1 - queue.findIndex(x => x == "wolf")}! You are about to be eaten by a wolf!`;
//Codewars recommended
/*
*/
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
function doTest(queue, expected) {
  const log = `for queue [${queue.join(', ')}]\n`;
  const actual = warnTheSheep(queue);
  strictEqual(actual, expected, log);
}

describe("Fixed tests", function () {
  it("Tests", function () {
    doTest(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"],
      "Oi! Sheep number 2! You are about to be eaten by a wolf!"
    );
    doTest(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"],
      "Oi! Sheep number 5! You are about to be eaten by a wolf!"
    );
    doTest(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"],
      "Oi! Sheep number 6! You are about to be eaten by a wolf!"
    );
    doTest(["sheep", "wolf", "sheep"],
      "Oi! Sheep number 1! You are about to be eaten by a wolf!"
    );
    doTest(["wolf"],
      "Pls go away and stop eating my sheep"
    );
    doTest(["sheep", "sheep", "wolf"],
      "Pls go away and stop eating my sheep"
    );
  });
});