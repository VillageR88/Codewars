///Task
/*
Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.
Task

You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.
Examples

A size 3 diamond:

 *
***
 *

...which would appear as a string of " *\n***\n *\n"

A size 5 diamond:

  *
 ***
*****
 ***
  *

...that is:

"  *\n ***\n*****\n ***\n  *\n"

*/
///Solution
//My
const diamond = (n) => n <= 0 || n % 2 == 0 ? null : new Array(n).fill("*").map((x, i) => i < n / 2 ? i = " ".repeat(n / 2 - i) + x.repeat(2 * i + 1)+ "\n" : " ".repeat(n / 2 - n + 1 + i) + x.repeat((n - i) * 2 - 1) + "\n").join("");
/*
}
*/
///Tester => JS 'Codewars' 'Sample Test' Tester
//Declarations and definitions - part adjusted to VSC
const Test = require('@codewars/test-compat');
const chai = require("chai");
const assert = chai.assert;
const strictEqual = require('chai').assert.strictEqual;
chai.config.truncateThreshold=0;
function describe (tag, func) {
  func();
};
function it (tag, func) {
  func();
};
//Describe - invariant part
describe( "diamond()", function(){

  it("Valid diamonds", () => {
    assert.strictEqual(diamond(1), "*\n")
    assert.strictEqual(diamond(3), " *\n***\n *\n")
    assert.strictEqual(diamond(5), "  *\n ***\n*****\n ***\n  *\n")
  });
  
  it("Invalid diamonds", () => {
    assert.strictEqual(diamond(2), null)
    assert.strictEqual(diamond(-3), null)
    assert.strictEqual(diamond(0), null)
  });
});