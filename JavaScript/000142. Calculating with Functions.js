///Task
/*
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3

Requirements:

    There must be a function for each number from 0 ("zero") to 9 ("nine")
    There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
    Each calculation consist of exactly one operation and two numbers
    The most outer function represents the left operand, the most inner function represents the right operand
    Division should be integer division. For example, this should return 2, not 2.666666...:

eight(dividedBy(three()));
*/
///Solution
//My
function zero(args) {
  _zero = eval(`0${args != undefined ? args : ""}`);
  return args != undefined && args.includes("/") ? Math.floor(_zero) : _zero;
}
function one(args) {
  _one = eval(`1${args != undefined ? args : ""}`);
  return args != undefined && args.includes("/") ? Math.floor(_one) : _one;
}
function two(args) {
  _two = eval(`2${args != undefined ? args : ""}`);
  return args != undefined && args.includes("/") ? Math.floor(_two) : _two;
}
function three(args) {
  _three = eval(`3${args != undefined ? args : ""}`);
  return args != undefined && args.includes("/") ? Math.floor(_three) : _three;
}
function four(args) {
  _four = eval(`4${args != undefined ? args : ""}`);
  return args != undefined && args.includes("/") ? Math.floor(_four) : _four;
}
function five(args) {
  _five = eval(`5${args != undefined ? args : ""}`);
  return args != undefined && args.includes("/") ? Math.floor(_five) : _five;
}
function six(args) {
  _six = eval(`6${args != undefined ? args : ""}`);
  return args != undefined && args.includes("/") ? Math.floor(_six) : _six;
}
function seven(args) {
  _seven = eval(`7${args != undefined ? args : ""}`);
  return args != undefined && args.includes("/") ? Math.floor(_seven) : _seven;
}
function eight(args) {
  _eight = eval(`8${args != undefined ? args : ""}`);
  return args != undefined && args.includes("/") ? Math.floor(_eight) : _eight;
}
function nine(args) {
  _nine = eval(`9${args != undefined ? args : ""}`);
  return args != undefined && args.includes("/") ? Math.floor(_nine) : _nine;
}

function plus(args) { return `+${args}` }
function minus(args) { return `-${args}` }
function times(args) { return `*${args}` }
function dividedBy(args) { return `/${args}` }
//Codewars recommended 
/*
function zero(fn) {return fn ? fn(0) : 0}
function one(fn) {return fn ? fn(1) : 1}
function two(fn) {return fn ? fn(2) : 2}
function three(fn) {return fn ? fn(3) : 3}
function four(fn) {return fn ? fn(4) : 4}
function five(fn) {return fn ? fn(5) : 5}
function six(fn) {return fn ? fn(6) : 6}
function seven(fn) {return fn ? fn(7) : 7}
function eight(fn) {return fn ? fn(8) : 8}
function nine(fn) {return fn ? fn(9) : 9}

function plus(n) {return function(v) {return v + n}}
function minus(n) {return function(v) {return v - n}}
function times(n) {return function(v) {return v * n}}
function dividedBy(n) {return function(v) {return v / n}}

OR

const zero = a => a ? a(0) : 0
const one = a => a ? a(1) : 1
const two = a => a ? a(2) : 2
const three = a => a ? a(3) : 3
const four = a => a ? a(4) : 4
const five = a => a ? a(5) : 5
const six = a => a ? a(6) : 6
const seven = a => a ? a(7) : 7
const eight = a => a ? a(8) : 8
const nine = a => a ? a(9) : 9

const plus = a => b => a + b
const minus = a => b => b - a
const dividedBy = a => b => Math.floor(b / a)
const times = a => b => a * b

OR

const [zero, one, two, three, four, five, six, seven, eight, nine] = [...Array(10)].map((_, idx) => fn => fn ? fn(idx) : idx);
const [plus, minus, times, dividedBy] = [`+`, `-`, `*`, `/`].map(val => new Function(`b`, `return a => a ${val} b ^ 0`));
*/
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
    assert.strictEqual(seven(times(five())), 35);
    assert.strictEqual(four(plus(nine())), 13);
    assert.strictEqual(eight(minus(three())), 5);
    assert.strictEqual(six(dividedBy(two())), 3);
  });
});
