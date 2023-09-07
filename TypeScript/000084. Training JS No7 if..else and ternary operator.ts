///Task
/*
Task:

Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, 
function accepts 1 parameter:n, n is the number of hotdogs a customer will buy,
different numbers have different prices (refer to the following table),
return how much money will the customer spend to buy that number of hotdogs.
number of hotdogs 	price per unit (cents)
n < 5 	100
n >= 5 and n < 10 	95
n >= 10 	90

You can use if..else or ternary operator to complete it.

When you have finished the work, click "Run Tests" to see if your code is working properly.

In the end, click "Submit" to submit your code and pass this kata.


*/
///Solution
//My soloution
export function saleHotdogs(n: number): number {
  return n < 5 ? n * 100 : n >= 10 ? n * 90 : n * 95;
}
//Codewars recommended
/*
export const saleHotdogs = n => n<5?n*100:n>=5&&n<10?n*95:n*90
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
describe("solution", function() {
  it("sample tests", function() {
    assert.strictEqual(saleHotdogs(1),100);
    assert.strictEqual(saleHotdogs(4),400);
    assert.strictEqual(saleHotdogs(5),475);
    assert.strictEqual(saleHotdogs(9),855);
    assert.strictEqual(saleHotdogs(10),900);
    assert.strictEqual(saleHotdogs(100),9000);
  });
});