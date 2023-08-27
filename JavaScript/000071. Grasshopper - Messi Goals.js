///Task
/*
Messi's Goal Total

Use variables to find the sum of the goals Messi scored in 3 competitions
Information

Messi goal scoring statistics:
Competition 	Goals
La Liga 	43
Champions League 	10
Copa del Rey 	5
Task

    Create these three variables and store the appropriate values using the table above:

    laLigaGoals
    championsLeagueGoals
    copaDelReyGoals

    Create a fourth variable named totalGoals that stores the sum of all of Messi's goals for this year.
*/
///Solution
//My


var laLigaGoals = 43
var championsLeagueGoals = 10
var copaDelReyGoals = 5

var totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals

//Codewars recommended
/*
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
describe("total goals", function(){
  it ("should equal the total", function () {
    Test.assertEquals(totalGoals, 58)
  })
})