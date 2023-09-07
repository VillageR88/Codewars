///Task
/*
Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

For example:

time = 3 ----> litres = 1

time = 6.7---> litres = 3

time = 11.8--> litres = 5

*/
///Solution
//My
export function litres(time: number): number {
  return Math.floor(time/2);
}
//Codewars recommended
/*
export function litres(time: number): number {
  return Math.floor(0.5 * time);
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
var solution = {litres}
//Describe - invariant part
import { assert } from "chai";

describe('Cycling', () => {
  it('Some basic tests', () => {
    assert.equal(litres(2),1);
    assert.equal(litres(1.4),0);
    assert.equal(litres(12.3),6);
    assert.equal(litres(0.82),0);
    assert.equal(litres(11.8),5);
    assert.equal(litres(1787),893);
    assert.equal(litres(0),0);
  });
});