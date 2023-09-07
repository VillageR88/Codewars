///Task
/*
Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

Square all numbers k (0 <= k <= n) between 0 and n.

Count the numbers of digits d used in the writing of all the k**2.

Implement the function taking n and d as parameters and returning this count.
Examples:

n = 10, d = 1 
the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

The function, when given n = 25 and d = 1 as argument, should return 11 since
the k*k that contain the digit 1 are:
1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
So there are 11 digits 1 for the squares of numbers between 0 and 25.

Note that 121 has twice the digit 1.

*/
///Solution
//My
export class G964 {
  public static nbDig(n: number, d: number): number {
    return Number(Array(n+1).fill(0).map((_,indx)=>(indx)**2).join("").match(new RegExp(String(d),"g"))?.length);
  }
}
//Codewars recommended
/*
*/

///Tester => TrueScript 'Codewars' 'Sample Test' Tester (TSCSTT)
//Declarations and definitions - part adjusted to VSC
function describe (_opis: any, func: any) {func();};
function it (_opis: any, func: any) {func();};
import { assert } from "chai";
var solution = {G964};
//Describe - invariant part
function testing(actual: number, expected: number) {
  assert.equal(actual, expected);
}

describe("Fixed Tests", function() {
    it("Basic tests nbDig", function() {
        testing(solution.G964.nbDig(10, 1), 4)
        testing(solution.G964.nbDig(5750, 0), 4700)
        testing(solution.G964.nbDig(11011, 2), 9481)
        testing(solution.G964.nbDig(12224, 8), 7733)
        testing(solution.G964.nbDig(11549, 1), 11905)
    });
});