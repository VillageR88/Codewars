///Task
/*
Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

[Make sure you type the exact thing I wrote or the program may not execute properly]

*/
///Solution
//My
function greet(name){
  return "Hello, "+name+" how are you doing today?";
}
//Codewars recommended
function greet(name){
  return `Hello, ${name} how are you doing today?`;
}
///Tester => JS 'Codewars' 'Sample Test' Tester
//Declarations and definitions - part adjusted to VSC
var assert = require('assert');
//Describe - invariant part
assert.strictEqual(greet("Ryan"), "Hello, Ryan how are you doing today?");
assert.strictEqual(greet("Shingles"), "Hello, Shingles how are you doing today?");