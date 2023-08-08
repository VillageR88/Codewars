///Task
/*
Some numbers have funny properties. For example:

    89 --> 8¹ + 9² = 89 * 1

    695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

    46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

    we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n.

In other words:

    Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

If it is the case we will return k, if not return -1.

Note: n and p will always be given as strictly positive integers.

dig_pow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
dig_pow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
dig_pow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
dig_pow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

*/
///Solution
//My 1st soloution (tryout)
/*
export class G964 {
  public static digPow = (n: number, p: number) => {
    var value1 = 0;
    var multip = p;
    for (var i of n.toString().split("")) {
      value1 += Number(i)**multip;
      multip++;
    }
    return value1%n==0?value1/n:-1;
  }
}
*/
//My 2nd soloution (TODO)
export class G964 {
  public static digPow = (n: number, p: number) => {
    const result = n.toString().split("").map((x, indx) => Number(x) ** (p + indx)).reduce((accu, curval) => accu + curval);
    return result % n == 0 ? result / n : -1;
  }
}
//Codewars recommended
/*
export class G964 {
    public static digPow = (n, p) => {
        var x = n.toString().split("").reduce((s, d, i) => s + Math.pow(d, p + i), 0)
        return x % n ? -1 : x / n;
    }
}
*/

///Tester => TrueScript 'Codewars' 'Sample Test' Tester (TSCSTT) v0.1.0 by VR.
//Declarations and definitions - part adjusted to VSC
function describe (_opis: any, func: any) {func();};
function it (_opis: any, func: any) {func();};
import { assert } from "chai";
//Describe - invariant part
function dotest(n: number, p: number, expected: number) {
  assert.equal(G964.digPow(n, p), expected, "Incorrect answer for n=" + n + ", p=" + p);
}

describe("Fixed Tests", function() {
  it("digPow", function() {
      dotest(89, 1, 1);
      dotest(92, 1, -1);
      dotest(114, 3, 9);
      dotest(1377, 1, 2);
  });
});