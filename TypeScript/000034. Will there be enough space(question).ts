///Task
/*
The Story:

Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.
Task Overview:

You have to write a function that accepts three parameters:

    cap is the amount of people the bus can hold excluding the driver.
    on is the number of people on the bus excluding the driver.
    wait is the number of people waiting to get on to the bus excluding the driver.

If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.
Usage Examples:

cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting

*/
///Solution
//My
export function enough(cap: number, on: number, wait: number): number {
  return on+wait-cap>0?on+wait-cap:0;
}
//Codewars recommended
/*
export const strCount = (str: string, letter: string) => [...str].filter(c => c === letter).length;
 */

///Tester => TrueScript 'Codewars' 'Sample Test' Tester (TSCSTT)
//Declarations and definitions - part adjusted to VSC
function describe (opis: any, func: any) {
  func();
};
function it (opis: any, func: any) {
func();
};
import { assert } from "chai";
//Describe - invariant part
describe('Tests: ', () => {
  it('Example Tests: ', () => {
    assert.equal(enough(10, 5, 5), 0);
    assert.equal(enough(100, 60, 50), 10);
    assert.equal(enough(50, 15, 10), 0);
  });
});