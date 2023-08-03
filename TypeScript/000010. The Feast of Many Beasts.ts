/*Task
All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

*/
///Solution
//My
export function feast(beast:string, dish:string):boolean {
  return beast[0]==dish[0] && beast[beast.length-1]==dish[dish.length-1]
}
//Codewars recommended
/*
export function feast(beast:string, dish:string):boolean {
  return beast[0] === dish[0] && beast.slice(-1) === dish.slice(-1);
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
//Describe - invariant part
import { assert } from "chai";
//var solution = {function}

describe('feast', () => {
  it('basic tests', () => {
    assert.equal(feast("great blue heron", "garlic naan"), true);
    assert.equal(feast("chickadee", "chocolate cake"), true);
    assert.equal(feast("brown bear", "bear claw"), false);
  });
});
