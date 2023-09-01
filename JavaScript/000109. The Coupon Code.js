///Task
/*
Story

Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.
Task

Your mission:
Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".
Examples:

checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false
*/
///Solution
//My
function checkCoupon(eC, cC, cD, eD) {
  var dict = {
  January: "01", February: "02", March: "03", April: "04", May: "05", June: "06", 
  July: "07", August: "08", September: "09", November: "10", October: "11", December: "12"};
  cD = cD.split(" "), cD = cD[2] + dict[cD[0]] + (cD[1].length == 2 ? 0 + cD[1] : cD[1]);
  eD = eD.split(" "), eD = eD[2] + dict[eD[0]] + (eD[1].length == 2 ? 0 + eD[1] : eD[1]);
  return eC === cC && cD <= eD;
}
//Codewars recommended
/*
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  return enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate)
}*/
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
    assert.strictEqual(checkCoupon('123','123','September 5, 2014','October 1, 2014'), true);
    assert.strictEqual(checkCoupon('123a','123','September 5, 2014','October 1, 2014'), false);
    assert.strictEqual(checkCoupon('a12v564','a12v564','March 25, 1998','March 5, 1998'), false);
  });
});