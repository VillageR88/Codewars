///Task
/*
Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems.
It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells.
RNA differs slightly from DNA its chemical structure and contains no Thymine.
In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

For example:

"GCAT"  =>  "GCAU"

The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

*/
///Solution
//My
function DNAtoRNA(dna) 
{
  let word = "";
  for (var i of dna) {
    if (i == "T") word += "U";
    else word += i;
  }

  return word;
}
//Codewars recommended
/*
function DNAtoRNA(dna){
  return dna.replace(/T/g, 'U');
}
*/

///Tester => JS 'Codewars' 'Sample Test' Tester
//Declarations and definitions - part adjusted to VSC
const chai = require("chai");
const assert = chai.assert;
function describe (opis, funkcja) {
  funkcja();
};
function it (opis, funkcja) {
  funkcja();
};
var solution = {DNAtoRNA};
//Describe - invariant part
describe("Sample Test Cases", function(){
  it("Should return a string", function() {
    assert.equal(solution.DNAtoRNA("TTTT"), "UUUU");
    assert.equal(solution.DNAtoRNA("GCAT"), "GCAU");
    assert.equal(solution.DNAtoRNA("GACCGCCGCC"), "GACCGCCGCC");
  });
});