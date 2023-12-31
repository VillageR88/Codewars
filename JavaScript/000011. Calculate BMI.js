/*Zadanie
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"

*/
///Solution
//My
function bmi(weight, height) {
  const result = weight/(height*height);
  if (result <= 18.5) return "Underweight";
  else if (result <= 25.0) return "Normal";
  else if (result <= 30.0) return "Overweight";
  else if (result > 30) return "Obese";
}
//Codewars recommended
/*
function bmi(weight, height) {
  var result = weight/Math.pow(height,2) 
  
  if (result <= 18.5) {
    return "Underweight";
  } else if (result <= 25) {
    return "Normal";
  } else if (result <= 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
  
}
*/
///Tester => JS 'Codewars' 'Sample Test' Tester
//Declarations and definitions - part adjusted to VSC

const Test = require('@codewars/test-compat');
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;
//Describe - invariant part
Test.assertEquals(bmi(80, 1.80), "Normal");