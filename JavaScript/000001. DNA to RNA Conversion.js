/*Zadanie
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
//Moje
function DNAtoRNA(dna) 
{
  let word = "";
  for (i of dna) {
    if (i == "T") word += "U";
    else word += i;
  }

  return word;
}
//Najlepsze rozwiązanie od Codewars
function DNAtoRNA(dna){
  return dna.replace(/T/g, 'U');
}

///Tester
//JS 'Codewars' 'Sample Test' (JSCSTT) Tester v0.1.0 by VR. - prototyp
var assert = require('assert');
assert.strictEqual(DNAtoRNA("TTTT"), "UUUU")
assert.strictEqual(DNAtoRNA("GCAT"), "GCAU")
assert.strictEqual(DNAtoRNA("GACCGCCGCC"), "GACCGCCGCC")