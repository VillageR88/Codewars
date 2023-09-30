///Task
/*
There's a "3 for 2" (or "2+1" if you like) offer on mangoes. 
For a given quantity and price (per mango), calculate the total cost of the mangoes.
Examples

mango(2, 3) ==> 6    # 2 mangoes for $3 per unit = $6; no mango for free
mango(3, 3) ==> 6    # 2 mangoes for $3 per unit = $6; +1 mango for free
mango(5, 3) ==> 12   # 4 mangoes for $3 per unit = $12; +1 mango for free
mango(9, 5) ==> 30   # 6 mangoes for $5 per unit = $30; +3 mangoes for free
*/
///Solution
//My
export const mango = (quantity: number, price: number): number => (quantity - Math.floor(quantity / 3)) * price;
//Codewars recommended)
/**/
///Tester => TrueScript 'Codewars' 'Sample Test' Tester (TSCSTT)
//Declarations and definitions - part adjusted to VSC
function describe(_desc: any, func: any) { func(); };
function it(_desc: any, func: any) { func(); };
import { assert } from "chai";
//var solution = { sortMyString }; //unused
//Describe - invariant part
describe("Sample Tests", () => {
  it("Should pass sample tests", () => {
    assert.strictEqual(mango(3, 3), 6)
    assert.strictEqual(mango(9, 5), 30)
  });
});