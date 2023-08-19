/*Zadanie
one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
Examples

    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
*/
///Solution
//My
function digitalRoot(n) {
  var transformation = function(n){
  trans = n.toString().split("");
  let result = 0;
  for (i of trans) result += Number(i);
  if (result.toString().length > 1) result = transformation(result);
  return result;
  }
  return transformation(n);
}
//Codewars recommended
/*
function digital_root(n) {
  return (n - 1) % 9 + 1;
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
    assert.strictEqual( digitalRoot(16), 7 )
    assert.strictEqual( digitalRoot(456), 6 )
  });
});
