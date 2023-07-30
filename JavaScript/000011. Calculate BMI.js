/*Zadanie
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"

*/
///Solution
//Moje
function bmi(weight, height) {
  const result = weight/(height*height);
  if (result <= 18.5) return "Underweight";
  else if (result <= 25.0) return "Normal";
  else if (result <= 30.0) return "Overweight";
  else if (result > 30) return "Obese";
}
//Najlepsze rozwiązanie od Codewars
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
///Tester
//JS 'Codewars' 'Sample Test' (JSCSTT) Tester v(nazwa pliku) by VR.
//const Test = require('@codewars/test-compat'); *przechowalnia
//const getMsg = (n) => `Player ${n} won!`; *przechowalnia
const Test = require('@codewars/test-compat');
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;
Test.assertEquals(bmi(80, 1.80), "Normal");