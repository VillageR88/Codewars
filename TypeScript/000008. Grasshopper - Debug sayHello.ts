///Task
/*
Debugging sayHello function

The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!

Example output:

Hello, Mr. Spock

*/
///Solution
//My
export function sayHello(name: string): string {
  return 'Hello, '+name;
}
//Codewars recommended
/*
export const sayHello = (name: string): string => {
  return `Hello, ${name}`
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
//Describe - invariant part
import { assert } from "chai";
//var solution = {function}

describe("Basic tests", () => {
  it("Should pass basic tests", () => {
    assert.equal(sayHello('Mr. Spock'), 'Hello, Mr. Spock');
    assert.equal(sayHello('Captain Kirk'), 'Hello, Captain Kirk');
    assert.equal(sayHello('Liutenant Uhura'), 'Hello, Liutenant Uhura');
    assert.equal(sayHello('Dr. McCoy'), 'Hello, Dr. McCoy');
  });
});