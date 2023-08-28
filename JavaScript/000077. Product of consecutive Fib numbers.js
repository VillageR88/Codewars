///Task
/*
The Fibonacci numbers are the numbers in the following integer sequence (Fn):

    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

such as

    F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.

Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying

    F(n) * F(n+1) = prod.

Your function productFib takes an integer (prod) and returns an array:

[F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)

depending on the language if F(n) * F(n+1) = prod.

If you don't find two consecutive F(n) verifying F(n) * F(n+1) = prodyou will return

[F(n), F(n+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)

F(n) being the smallest one such as F(n) * F(n+1) > prod.
Some Examples of Return:

(depend on the language)

productFib(714) # should return (21, 34, true), 
                # since F(8) = 21, F(9) = 34 and 714 = 21 * 34

productFib(800) # should return (34, 55, false), 
                # since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55
-----
productFib(714) # should return [21, 34, true], 
productFib(800) # should return [34, 55, false], 
-----
productFib(714) # should return {21, 34, 1}, 
productFib(800) # should return {34, 55, 0},        
-----
productFib(714) # should return {21, 34, true}, 
productFib(800) # should return {34, 55, false}, 
*/
///Solution
//My
function productFib(prod) {
  var fib = [0,1]; //
  for (var i = 1; i <= 40; i++) { //increase i range if you want more Fibonacci numbers
    fib.push(fib[i] + fib[i - 1]);
  }
  var index_positioning = (fib.findIndex((x) => x > Math.sqrt(prod)));
  var previous = fib[index_positioning - 1];
  var next = fib[index_positioning];
  var verdict = (previous * next) == prod;
  if ((previous * next) < prod) {
    previous = fib[index_positioning];
    next = fib[index_positioning + 1];
  }
  return [previous, next, (previous * next) == prod];
}
//Codewars recommended
/*
function productFib(prod){
  var n = 0;
  var nPlus = 1;  
  while(n*nPlus < prod) {
    nPlus = n + nPlus;
    n = nPlus - n;
  }
  return [n, nPlus, n*nPlus===prod];
}
OR
function productFib(prod){
  let [a, b] = [0, 1];
  while(a * b < prod) [a, b] = [b, a + b];
  return [a, b, a * b === prod];
}
*/
///Tester => JS 'Codewars' 'Sample Test' Tester
//Declarations and definitions - part adjusted to VSC
const Test = require('@codewars/test-compat');
const chai = require("chai");
const deeepEqual = chai.assert.deepEqual;
const assert = chai.assert;
const strictEqual = require('chai').assert.strictEqual;
chai.config.truncateThreshold=0;
function describe (tag, func) {
  func();
};
function it (tag, func) {
  func();
};
//Describe - invariant part
describe("Tests", () => {
  it("test", () => {
    //assert.sameOrderedMembers(productFib(4895), [55, 89, true])
    //assert.sameOrderedMembers(productFib(5895), [89, 144, false])
    assert.sameOrderedMembers(productFib(74049690), [6765, 10946, true])
    assert.sameOrderedMembers(productFib(84049690), [10946, 17711, false])
    assert.sameOrderedMembers(productFib(193864606), [10946, 17711, true])
    assert.sameOrderedMembers(productFib(447577), [610, 987, false])
    assert.sameOrderedMembers(productFib(602070), [610, 987, true])
  });
});