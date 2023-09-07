///Task
/*
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"

*/
///Solution
//My
export class Kata {
  static dnaStrand(dna: string) {
    var new_dna = "";
    for (var i of dna) {
    i == "T" ? new_dna += "A" :
    i == "A" ? new_dna += "T" :
    i == "C" ? new_dna += "G" :
    new_dna += "C";
    }
    return new_dna;
  }
}
//Codewars recommended
/*
 export class Kata {
  static dnaStrand(dna: string) {
    return dna.replace(/./g, (c)=>({A:'T',T:'A',G:'C',C:'G'})[c]);
  }
}
OR
export class Kata {
  static dnaStrand(dna: string): string{
    //your code here
    const match = {
      'A': 'T',
      'T': 'A',
      'G': 'C',
      'C': 'G'
    }
    return Array.from(dna, v=>match[v]).join('');
  }
}
*/

///Tester => TrueScript 'Codewars' 'Sample Test' Tester (TSCSTT)
//Declarations and definitions - part adjusted to VSC
function describe (opis: any, func: any) {
  func();
};
function it (opis: any, func: any) {
func();
};
import { assert } from "chai";
//Describe - invariant part
var solution = {Kata}
describe("dnaStrand", function() {
  it("Sample tests", function() {
    assert.strictEqual(solution.Kata.dnaStrand("AAAA"),"TTTT","String AAAA is");
    assert.strictEqual(solution.Kata.dnaStrand("ATTGC"),"TAACG","String ATTGC is");
    assert.strictEqual(solution.Kata.dnaStrand("GTAT"),"CATA","String GTAT is");
  });
});