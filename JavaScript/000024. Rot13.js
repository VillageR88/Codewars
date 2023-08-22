/*Zadanie
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

*/
///Solution
//My
function rot13(message){
  var crypted_message1 = [];
  var crypted_message2 = [];
  var word_from_crypted_message2 = "";
  for (i in message) {crypted_message1.push(message.charCodeAt(i));} //na cyfry
  console.log("message is", message)
  for (i in crypted_message1) {
    if (crypted_message1[i] >= 97 && crypted_message1[i] <= 122) { // jeśli jest a-z
      crypted_message1[i] += 13;
      if (crypted_message1[i] > 122)
        crypted_message1[i] = crypted_message1[i]-122-1+97;
    }
    else if (crypted_message1[i] >= 65 && crypted_message1[i] <= 90) { // jeśli jest A-Z
        crypted_message1[i] += 13;
  if (crypted_message1[i] > 90) 
        crypted_message1[i] = crypted_message1[i]-90-1+65;
    } 
  }
  console.log(crypted_message1)
  for (i in crypted_message1) crypted_message2[i] = String.fromCharCode(crypted_message1[i]);
  console.log(crypted_message2)
  for (i of crypted_message2) word_from_crypted_message2 += i;
  console.log(word_from_crypted_message2);
  return word_from_crypted_message2;
}
//Codewars recommended
/*
function rot13(message) {
  var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
  return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
}
ALBO
const rot13 = str => str.replace(/[a-z]/gi, letter => String.fromCharCode(letter.charCodeAt(0) + (letter.toLowerCase() <= 'm' ? 13: -13)));
*/
///Tester => JS 'Codewars' 'Sample Test' Tester
//Declarations and definitions - part adjusted to VSC
const Test = require('@codewars/test-compat');
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;
function describe (tag, func) {
  func();
};
function it (tag, func) {
  func();
};
//Describe - invariant part
describe("Tests", function() {
  it("Sample tests", function() {
    for (const [input, expected] of [["test", "grfg"], ["Test", "Grfg"]]) {
      assert.strictEqual(rot13(input), expected, `Test failed with messsage = '${input}'`);
    }
  });
});