///Task
/*
Let us begin with an example:

A man has a rather old car being worth $2000. 
He saw a secondhand car being worth $8000. 
He wants to keep his old car until he can buy the secondhand one.

He thinks he can save $1000 each month but the prices of his old car and of the new one decrease of 1.5 percent per month. 
Furthermore this percent of loss increases of 0.5 percent at the end of every two months. 
Our man finds it difficult to make all these calculations.

Can you help him?

How many months will it take him to save up enough money to buy the car he wants, and how much money will he have left over?

Parameters and return of function:

parameter (positive int or float, guaranteed) start_price_old (Old car price)
parameter (positive int or float, guaranteed) start_price_new (New car price)
parameter (positive int or float, guaranteed) saving_per_month 
parameter (positive float or int, guaranteed) percent_loss_by_month

nbMonths(2000, 8000, 1000, 1.5) should return [6, 766] or (6, 766)

Detail of the above example:

end month 1: percent_loss 1.5 available -4910.0
end month 2: percent_loss 2.0 available -3791.7999...
end month 3: percent_loss 2.0 available -2675.964
end month 4: percent_loss 2.5 available -1534.06489...
end month 5: percent_loss 2.5 available -395.71327...
end month 6: percent_loss 3.0 available 766.158120825...
return [6, 766] or (6, 766)

where 6 is the number of months at the end of which he can buy the new car and 766 is the nearest integer to 766.158... (rounding 766.158 gives 766).

Note:

Selling, buying and saving are normally done at end of month. 
Calculations are processed at the end of each considered month but if, by chance from the start, 
the value of the old car is bigger than the value of the new one or equal there is no saving to be made, 
no need to wait so he can at the beginning of the month buy the new car:

nbMonths(12000, 8000, 1000, 1.5) should return [0, 4000]
nbMonths(8000, 8000, 1000, 1.5) should return [0, 0]

We don't take care of a deposit of savings in a bank:-)
*/
///Solution
//My
function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth) {
  var totalSaving = 0;
  var x = 1;
  for (x; (totalSaving + startPriceOld) < startPriceNew; x++) {
    if (!(x % 2)) percentLossByMonth += 0.5;;
    startPriceOld -= (startPriceOld * percentLossByMonth / 100);
    startPriceNew -= (startPriceNew * percentLossByMonth / 100);
    totalSaving += savingperMonth;
  }
  return [x - 1, Math.round(totalSaving + startPriceOld - startPriceNew)];
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
    Test.assertSimilar(nbMonths(2000, 8000, 1000, 1.5), [6, 766])
    Test.assertSimilar(nbMonths(12000, 8000, 1000, 1.5), [0, 4000])
  });
});