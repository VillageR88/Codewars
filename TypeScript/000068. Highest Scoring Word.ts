///Task
/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

*/
///Solution
//My
export const high = (str: string): string => str.split(" ")[str.split(" ").map(x => [...x].map(x => x.charCodeAt(0) - 96).reduce((p, c) => p + c)).findIndex((x, _, z) => x == z.reduce((p, c) => c > p ? p = c : p))];
//Codewars recommended
/*
export const VALUE_OFFSET = 96;
export const calcValue = (word: string): number => {
  return word.split('').reduce((sum, char) => sum + char.charCodeAt(0) - VALUE_OFFSET, 0);
}  
export const high = (str: string): string => {
  return str.split(' ').reduce((max, word) => calcValue(word) > calcValue(max) ? word : max);
}
*/

///Tester => TrueScript 'Codewars' 'Sample Test' Tester (TSCSTT)
//Declarations and definitions - part adjusted to VSC
function describe (_desc: any, func: any) {func();};
function it (_desc: any, func: any) {func();};
import { randomNumber } from "@codewars/test-compat";
import { assert } from "chai";
import { expect } from 'chai';
import { teardown } from "mocha";
//Describe - invariant part
const solutions = [
  ['man i need a taxi up to ubud', 'taxi'],
  ['what time are we climbing up the volcano', 'volcano'],
  ['take me to semynak', 'semynak'],
  ['massage yes massage yes massage', 'massage'],
  ['take two bintang and a dance please', 'bintang'],
  ['aa b', 'aa'],
  ['b aa', 'b'],
  ['bb d', 'bb'],
  ['d bb', 'd'],
  ['aaa b', 'aaa'],
]

describe('Sample test', () => {
  it('works with test inputs', () => {
    solutions.forEach(([input, expected]) => {
      assert.strictEqual(high(input), expected)
    })
  })
})