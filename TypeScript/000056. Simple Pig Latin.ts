///Task
/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
Examples

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

*/
///Solution
//My
export const pigIt = (a : string) : string =>  {
  return a.split(" ").map((x, y, z) => !x.match(/[a-z]/gi) ? x:z[y].slice(1) + (z[y][0]) + "ay").join(" ");
}
//Codewars recommended
/*
*/

///Tester => TrueScript 'Codewars' 'Sample Test' Tester (TSCSTT)
//Declarations and definitions - part adjusted to VSC
function describe (_opis: any, func: any) {func();};
function it (_opis: any, func: any) {func();};
import { assert } from "chai";
//Describe - invariant part
describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(pigIt('Pig latin is cool'),'igPay atinlay siay oolcay')
    assert.strictEqual(pigIt('This is my string'),'hisTay siay ymay tringsay')
    assert.strictEqual(pigIt('VPuYHCHhcXSoQ wbwWEyA COZT sszqefUm HSmxyrRlEhAXJPrR DP riiJWQalDsey . NjtzxY'),
    'PuYHCHhcXSoQVay bwWEyAway OZTCay szqefUmsay SmxyrRlEhAXJPrRHay PDay iiJWQalDseyray . jtzxYNay')
});
});
