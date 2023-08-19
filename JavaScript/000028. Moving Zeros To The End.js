/*Zadanie
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

*/
///Solution
//My
function moveZeros(arr) {
  var counter = 0;
  var inner_moveZeros = function(arr) {
    for (i in arr) {
      if (arr[i] === 0)
      {
        counter++;
        arr.splice(i, 1);
        return inner_moveZeros(arr);
      }
    }
  }
  inner_moveZeros(arr);
  for (i = 0; i < counter; i++) {
    arr.push(0);
  }
  return arr;
}
//Codewars recommended
/*
var moveZeros = function (arr) {
  return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
}
*/
///Tester => JS 'Codewars' 'Sample Test' Tester (JSCSTT) v0.1.0 by VR.
//Deklaracje i definicje - część dostosowana do VSC
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
//Describe - część niezmieniana
describe("Tests", () => {
  it("test", () => {
    assert.deepEqual(moveZeros([1,2,0,1,0,1,0,3,0,1]), [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]);
  });
});