/*
Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

For example:

"GCAT"  =>  "GCAU"
The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.
*/

import "package:test/test.dart";

void main() {
  group('Fixed tests', () {
    void testing(String dna, String exp) =>
        test("Testing for $dna", () => expect(rnaToDna(dna), equals(exp)));
    testing("TTTT", "UUUU");
    testing("GCAT", "GCAU");
    testing("", "");
    testing("T", "U");
    testing("GACCGCCGCC", "GACCGCCGCC");
    testing("GATTCCACCGACTTCCCAAGTACCGGAAGCGCGACCAACTCGCACAGC",
        "GAUUCCACCGACUUCCCAAGUACCGGAAGCGCGACCAACUCGCACAGC");
    testing("CACGACATACGGAGCAGCGCACGGTTAGTACAGCTGTCGGTGAACTCCATGACA",
        "CACGACAUACGGAGCAGCGCACGGUUAGUACAGCUGUCGGUGAACUCCAUGACA");
    testing("CACGACATACGGAGCAGCGCACGGTTAGTACAGCTGTCGGTGAACTCCATGACA",
        "CACGACAUACGGAGCAGCGCACGGUUAGUACAGCUGUCGGUGAACUCCAUGACA");
    testing("AACCCTGTCCACCAGTAACGTAGGCCGACGGGAAAAATAAACGATCTGTCAATG",
        "AACCCUGUCCACCAGUAACGUAGGCCGACGGGAAAAAUAAACGAUCUGUCAAUG");
    testing(
        "GAAGCTTATCCGTTCCTGAAGGCTGTGGCATCCTCTAAATCAGACTTGGCTACGCCGTTAGCCGAGGGCTTAGCGTTGAGTGTCATTATATACGCGGCCTGCGACCTGGCCACACAATGCCCTCGAAAATTTTTCTTTCGGTTATACGAGTTGCGAAACCTTTCGCGCGTAGACGAAGAATTTGAAGTGGCCTACACCGTTTGGAAAGCCGTTCTCATTAGAATGGTACCGACTACTCGGCTCGGAGTCATTGTATAGGGAGAGTGTCGTATCAACATCACACACTTTTAGCATTTAAGGTCCATGGCCGTTGACAGGTACCGA",
        "GAAGCUUAUCCGUUCCUGAAGGCUGUGGCAUCCUCUAAAUCAGACUUGGCUACGCCGUUAGCCGAGGGCUUAGCGUUGAGUGUCAUUAUAUACGCGGCCUGCGACCUGGCCACACAAUGCCCUCGAAAAUUUUUCUUUCGGUUAUACGAGUUGCGAAACCUUUCGCGCGUAGACGAAGAAUUUGAAGUGGCCUACACCGUUUGGAAAGCCGUUCUCAUUAGAAUGGUACCGACUACUCGGCUCGGAGUCAUUGUAUAGGGAGAGUGUCGUAUCAACAUCACACACUUUUAGCAUUUAAGGUCCAUGGCCGUUGACAGGUACCGA");
  });
}

String rnaToDna(String dna) {
  return dna.replaceAll('T', 'U');
}
