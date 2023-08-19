/*Zadanie
Grade book

Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
Numerical Score 	Letter Grade
90 <= score <= 100 	'A'
80 <= score < 90 	'B'
70 <= score < 80 	'C'
60 <= score < 70 	'D'
0 <= score < 60 	'F'

Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

*/
///Solution
//My
function getGrade (s1, s2, s3) {
  var average = (s1+s2+s3)/3;
    if (average >= 90 && average <= 100)  return "A";
    else if (average >= 80 && average < 90) return "B";
    else if (average >= 70 && average < 80) return "C";
    else if (average >= 60 && average < 70) return "D";
    else if (average >= 0 && average < 60) return "F";
}
//Codewars recommended
/*
function getGrade (s1, s2, s3) {
  avg = (s1+s2+s3)/3;
  if (avg < 60)  return "F";
    else if (avg < 70) return "D";
    else if (avg < 80) return "C";
    else if (avg < 90) return "B";
    else return "A";
}
/
/Albo
function getGrade (s1, s2, s3) {
  var s = (s1 + s2 + s3) / 3
  return s >= 90 ? "A" : s >= 80 ? "B" : s >= 70 ? "C" : s >= 60 ? "D" : "F"
}
*/
///Tester
//JS 'Codewars' 'Sample Test' (JSCSTT) Tester v0.1.0 by VR.
const Test = require('@codewars/test-compat');
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;
function describe (opis, funkcja) {
  funkcja();
};
function it (opis, funkcja) {
  funkcja();
};
describe('grade book', function () {
  it('should return an A', function () {
    Test.assertEquals(getGrade(95,90,93), 'A')
    Test.assertEquals(getGrade(100,85,96), 'A')
    Test.assertEquals(getGrade(92,93,94), 'A')
  })
  it('should return a B', function () {
    Test.assertEquals(getGrade(70,70,100), 'B')
    Test.assertEquals(getGrade(82,85,87), 'B')
    Test.assertEquals(getGrade(84,79,85), 'B')
    Test.assertEquals(getGrade(89,89,90), 'B') 
  })
    it('should return a C', function () {
    Test.assertEquals(getGrade(70,70,70), 'C')
    Test.assertEquals(getGrade(75,70,79), 'C')
    Test.assertEquals(getGrade(60,82,76), 'C')
  })
    it('should return a D', function () {
    Test.assertEquals(getGrade(65,70,59), 'D')
    Test.assertEquals(getGrade(66,62,68), 'D')
    Test.assertEquals(getGrade(58,62,70), 'D')
  })
    it('should return an F', function () {
    Test.assertEquals(getGrade(44,55,52), 'F')
    Test.assertEquals(getGrade(48,55,52), 'F')
    Test.assertEquals(getGrade(58,59,60), 'F')
  })
})