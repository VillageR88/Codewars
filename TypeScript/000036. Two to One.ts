///Task
/*
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
Examples:

a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

*/
///Solution
//My
export const longest = (s1:string, s2:string): string => {
  var new_str = "";
  for (var i of s1+s2) new_str.includes(i)?0:new_str+=i;
  return [...new_str].sort().join("");
}
//Codewars recommended
/*
export const longest = (s1: string, s2: string): string =>
  [...new Set([...s1, ...s2])].sort().join("");
}; */

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
function testing(actual:string, expected:string) {
    assert.strictEqual(actual, expected)
}

describe("Fixed Tests", function() {
    it("Basic tests longest", function() {
        testing(longest("aretheyhere", "yestheyarehere"), "aehrsty");
        testing(longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu");
        testing(longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy");
        testing(longest("lordsofthefallen", "gamekult"), "adefghklmnorstu");
    });
});

