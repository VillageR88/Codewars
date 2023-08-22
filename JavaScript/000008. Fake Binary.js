///Task
/*
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string

*/
///Solution
//My
function fakeBin(x){let replaced = ""; for (i of x) if (i < 5) replaced += 0; else replaced +=1; return replaced;}
//Codewars recommended
/*
function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}
*/
///Tester => JS 'Codewars' 'Sample Test' Tester
//Declarations and definitions - part adjusted to VSC
const chai = require("chai");
const assert = chai.assert;
//Describe - invariant part
assert.strictEqual(fakeBin('45385593107843568'), '01011110001100111');
assert.strictEqual(fakeBin('509321967506747'), '101000111101101'); 
assert.strictEqual(fakeBin('366058562030849490134388085'), '011011110000101010000011011');