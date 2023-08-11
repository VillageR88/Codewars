///Task
/*
There is a bus moving in the city which takes and drops some people at each bus stop.

You are provided with a list (or array) of integer pairs. 
Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.

Your task is to return the number of people who are still on the bus after
the last bus stop (after the last array). Even though it is the last bus stop,
the bus might not be empty and some people might still be inside the bus,
they are probably sleeping there :D

Take a look on the test cases.

Please keep in mind that the test cases ensure that the number of people in the bus
is always >= 0. So the returned integer can't be negative.

The second value in the first pair in the array is 0, since the bus 
is empty in the first bus stop.

*/
///Solution
//My soloution
export function number(busStops: [number, number][]): number {
  return busStops.reduce((x, y) => [x[0] + y[0], x[1] + y[1]]).reduce((x, y) => x - y);
}
//Codewars recommended
/*
export function number(busStops:number[][]):number {
  return busStops.reduce((rem, [on, off]) => rem+(on-off), 0);
}
OR
export function number(busStops:number[][]):number {
  // Your Code
  return busStops.reduce( (peoplesInBus, currentBusStop) => peoplesInBus + currentBusStop[0] - currentBusStop[1], 0);
}
*/

///Tester => TrueScript 'Codewars' 'Sample Test' Tester (TSCSTT) v0.1.0 by VR.
//Declarations and definitions - part adjusted to VSC
function describe (_desc: any, func: any) {func();};
function it (_desc: any, func: any) {func();};
import { assert } from "chai";
import { expect } from 'chai';
//Describe - invariant part
// TODO Add your tests here
describe('number', () => {
  it('basic tests', () => {
    assert.equal(number([[10,0],[3,5],[5,8]]),5)
    assert.equal(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]),17)
    assert.equal(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]),21)
    assert.equal(number([[0,0]]),0)
  });
});