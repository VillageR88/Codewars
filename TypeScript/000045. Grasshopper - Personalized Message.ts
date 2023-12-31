///Task
/*
Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:
case 	return
name equals owner 	'Hello boss'
otherwise 	'Hello guest'

*/
///Solution
//My
export function greet(name: string, owner: string): string{
  return name == owner ? "Hello boss" : "Hello guest";
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
describe("example", () => {
  it("Fixed test", () => {
    assert.strictEqual(greet('Daniel', 'Daniel'), 'Hello boss')
    assert.strictEqual(greet('Greg', 'Daniel'), 'Hello guest')
  });
});
