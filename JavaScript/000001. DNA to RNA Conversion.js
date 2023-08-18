/*Tasl
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

///Tester
///Tester => JS 'Codewars' 'Sample Test' Tester (JSCSTT) v0.1.0 by VR.
//Deklaracje i definicje - część adjusted to VSC
//import Test from '@codewars/test-compat';
import { assert as _assert, config } from "chai";
const assert = _assert;
config.truncateThreshold=0;
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