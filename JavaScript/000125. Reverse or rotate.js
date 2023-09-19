///Task
/*
The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) 
of size sz (ignore the last chunk if its size is less than sz).

If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, 
reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

If

    sz is <= 0 or if str is empty return ""
    sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".

Examples:

revrot("123456987654", 6) --> "234561876549"
revrot("123456987653", 6) --> "234561356789"
revrot("66443875", 4) --> "44668753"
revrot("66443875", 8) --> "64438756"
revrot("664438769", 8) --> "67834466"
revrot("123456779", 8) --> "23456771"
revrot("", 8) --> ""
revrot("123456779", 0) --> "" 
revrot("563000655734469485", 4) --> "0365065073456944"

Example of a string rotated to the left by one position:
s = "123456" gives "234561".
*/
///Solution
//My
function revrot(str, sz) {
  console.log(str, "length:", str.length, "sz:", sz, "proportion:", Math.floor(str.length / sz));
  const propotion = Math.floor(str.length / sz);
  var new_str = "";
  if (sz <= 0 || sz > str.length) return "";
  else
    for (var i = 0; i < propotion; i++)
      new_str += str.substring(1 + sz * i, sz * (i + 1)) + str[sz * i];
    //  1 23456 9 87654

    //  733049910872815764 , 5 -- > 330479108928157
    //  7 3304 9 9108 7 28157 64 --> 33047 91089 28157
    //  563000655734469485, 4 --> 0365065073456944

  //str.substring(1, sz) + str[sz * 0] + str.substring(sz + 1, sz * 2) + str[sz * 1];
  return new_str;
}
//+ str.substring(sz * 2 + 1, sz * 3)
//+ str.substring([sz * 2]
//Codewars recommended
/*
*/
///Tester => JS 'Codewars' 'Sample Test' Tester
//Declarations and definitions - part adjusted to VSC
const Test = require('@codewars/test-compat');
const chai = require("chai");
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
function testing(actual, expected) {
  assert.strictEqual(actual, expected)
}

describe("revrot", function () {
  it("Basic tests", function () {
    //testing(revrot("123456987654", 6), "234561876549")
    //testing(revrot("1234", 0), "")
    //testing(revrot("", 0), "")
    //testing(revrot("1234", 5), "")
    //testing(revrot("733049910872815764", 5), "330479108928157")
    testing(revrot("85205431669475962869931042311146866", 35), "450258166943596287013996111324")

  })
})