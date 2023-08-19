/*Zadanie
Sentence Smash

Write a function that takes an array of words and smashes them together into a sentence and returns the sentence.
You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word.
Be careful, there shouldn't be a space at the beginning or the end of the sentence!
Example

['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

*/
///Solution
//My
function smash (words) {
  let array1 = "";
  if (words != ""){
  for (i of words) {
    array1 = array1+i+" ";}
  return array1.trimEnd();
  }
  else return "";
};
//Codewars recommended
/*

*/
///Tester
//JS 'Codewars' 'Sample Test' (JSCSTT) Tester v(nazwa pliku) by VR.
//const Test = require('@codewars/test-compat'); *przechowalnia
//const getMsg = (n) => `Player ${n} won!`; *przechowalnia
const chai = require("chai");
const assert = chai.assert;
assert.strictEqual(smash([]), "");
assert.strictEqual(smash(["hello"]), "hello");
assert.strictEqual(smash(["hello", "world"]), "hello world");
assert.strictEqual(smash(["hello", "amazing", "world"]), "hello amazing world");
assert.strictEqual(smash(["this", "is", "a", "really", "long", "sentence"]), "this is a really long sentence");