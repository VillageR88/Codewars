///Task
/*
A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) 
or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

Write a function that will convert a string into title case, given an optional list of exceptions (minor words). 
The list of minor words will be given as a string with each word separated by a space. 
Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.
Arguments (Haskell)

    First argument: space-delimited list of minor words that must always be lowercase except for the first word in the string.
    Second argument: the original string to be converted.

Arguments (Other languages)

    First argument (required): the original string to be converted.
    Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. 
    The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.

Example

titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'
*/
///Solution
//My
function titleCase(title, minorWords) {
  if (title == "") return "";
  else if (title.split(" ").length == 1) { return title[0].toUpperCase() + title.slice(1).toLowerCase(); }
  const t = title.split(" ");
  const first = t[0][0].toUpperCase() + t[0].slice(1).toLowerCase();
  return (first + "," + t.slice(1).map(x => minorWords != undefined && minorWords.toLowerCase().split(" ").includes(x.toLowerCase()) ?
    x.toLowerCase() : x[0].toUpperCase() + x.slice(1).toLowerCase())).replace(/,/g, " ");
}
//Codewars recommended 
/**/
///Tester => JS 'Codewars' 'Sample Test' Tester
//Declarations and definitions - part adjusted to VSC
const Test = require('@codewars/test-compat');
const chai = require("chai");
const mocha = require('mocha');
const assert = chai.assert;
const { matchAll } = require('nunit-command/regex');
const deeepEqual = chai.assert.deepEqual;
const strictEqual = require('chai').assert.strictEqual;
chai.config.truncateThreshold = 0;
function describe(tag, func) {
  func();
};
function it(tag, func) {
  func();
};
//Describe - invariant part describe
describe("Tests", () => {
  it("test", () => {
    //Test.assertEquals(titleCase('First a of in', 'ab'), 'First A Of In')
    //Test.assertEquals(titleCase('ab', 'ab'), 'Ab')
    //Test.assertEquals(titleCase(''), '')
    //Test.assertEquals(titleCase('a clash of KINGS', 'a an the of'), 'A Clash of Kings')
    Test.assertEquals(titleCase('THE WIND IN THE WILLOWS', 'The In'), 'The Wind in the Willows')
    Test.assertEquals(titleCase('the quick brown fox'), 'The Quick Brown Fox')
  });
});