///Task
/*
Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

    If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
    If he doesn't get 10 hoops, return the string "Keep at it until you get it".

*/
///Solution
//My
export function hoopCount(n: number): string {
  return ["Keep at it until you get it", "Great, now move on to tricks"][Number(n>=10)];
}
//Codewars recommended
/*
export function hoopCount(n: number): string {
  return n >= 10 ? "Great, now move on to tricks": "Keep at it until you get it"
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
//var solution = {hoopCount}

describe("Keep up the hoop", () => {
  it("Fixed tests", () => {
    assert.strictEqual(hoopCount(6), "Keep at it until you get it");
    assert.strictEqual(hoopCount(10), "Great, now move on to tricks");
    assert.strictEqual(hoopCount(22), "Great, now move on to tricks");
  });
});
