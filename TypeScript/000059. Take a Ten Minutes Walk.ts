///Task
/*
You live in the city of Cartesia where all roads are laid out in a perfect grid.
You arrived ten minutes too early to an appointment,
so you decided to take the opportunity to go for a short walk.
The city provides its citizens with a Walk Generating App on their phones -- everytime you
press the button it sends you an array of one-letter strings representing
directions to walk (eg. ['n', 's', 'w', 'e']).
You always walk only a single block for each letter (direction) 
and you know it takes you one minute to traverse one city block,
so create a function that will return true if the walk the app gives you
will take you exactly ten minutes (you don't want to be early or late!) and will,
of course, return you to your starting point. Return false otherwise.
Note: you will always receive a valid array containing
a random assortment of direction letters ('n', 's', 'e', or 'w' only).
It will never give you an empty array (that's not a walk, that's standing still!).

*/
///Solution
//My
export function isValidWalk(walk: string[]) {
  return Array.from([
    (walk.reduce((acc, x) => acc += {n: 1, s: -1}[x as keyof void] ?? 0, 0)),
    (walk.reduce((acc, x) => acc += {e: 1, w: -1}[x as keyof void] ?? 0, 0))
    ]).join() == "0,0" && walk.length == 10;
}
//Codewars recommended
/*
*/

///Tester => TrueScript 'Codewars' 'Sample Test' Tester (TSCSTT)
//Declarations and definitions - part adjusted to VSC
function describe (_desc: any, func: any) {func();};
function it (_desc: any, func: any) {func();};
import { assert } from "chai";
import { expect } from 'chai';
//Describe - invariant part
// TODO Add your tests here
describe("example", function() {
  it("test", function() {
    assert.equal(isValidWalk(['n', 'n', 'n', 'e']), false);
    assert.equal(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), true);
    assert.equal(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), false);
    assert.equal(isValidWalk(['w']), false);
    assert.equal(isValidWalk(['n','n','n','s','n','s','n','s','n','s']), false);
  });
});