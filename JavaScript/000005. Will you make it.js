///Task
/*
You were camping with your friends far away from home, but when it's time to go back,
you realize that your fuel is running out and the nearest pump is 50 miles away!
You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

Considering these factors, write a function that tells you if it is possible to get to the pump or not.

Function should return true if it is possible and false if not.

*/
///Solution
//My
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  if ((mpg*fuelLeft)-distanceToPump>=0) return true; else return false;
};
//Codewars recommended
/*
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return distanceToPump/mpg <= fuelLeft
};
*/
///Tester => JS 'Codewars' 'Sample Test' Tester
//Declarations and definitions - part adjusted to VSC
const chai = require("chai");
const assert = chai.assert;
//Describe - invariant part
assert.equal(zeroFuel(50, 25, 2), true);
assert.equal(zeroFuel(100, 50, 1), false);