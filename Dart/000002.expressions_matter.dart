/*
Given three integers a, b, and c, return the largest number obtained after inserting the operators +, *, and parentheses (). In other words, try every combination of a, b, and c with the operators, without reordering the operands, and return the maximum value.

Example
With the numbers 1, 2, and 3, here are some possible expressions:

1 * (2 + 3) = 5
1 * 2 * 3 = 6
1 + 2 * 3 = 7
(1 + 2) * 3 = 9
The maximum value that can be obtained is 9.

Notes
The numbers are always positive, in the range 1 ≤ a, b, c ≤ 10.
You can use the same operation more than once.
It is not necessary to use all the operators or parentheses.
You cannot swap the operands. For example, with the given numbers, you cannot get the expression (1 + 3) * 2 = 8.
Input and Output Examples
expressionsMatter(1, 2, 3) ==> 9, because (1 + 2) * 3 = 9.
expressionsMatter(1, 1, 1) ==> 3, because 1 + 1 + 1 = 3.
expressionsMatter(9, 1, 1) ==> 18, because 9 * (1 + 1) = 18.
*/

import "package:test/test.dart";

void main() {
  group("Fixed tests", () {
    // test("expressionMatter(2, 1, 2)", () {
    //   expect(expressionMatter(2, 1, 2), equals(6));
    // });
    // test("expressionMatter(2, 1, 1)", () {
    //   expect(expressionMatter(2, 1, 1), equals(4));
    // });
    test("expressionMatter(1, 1, 1)", () {
      expect(expressionMatter(1, 1, 1), equals(3));
    });
    test("expressionMatter(1, 2, 3)", () {
      expect(expressionMatter(1, 2, 3), equals(9));
    });
    test("expressionMatter(1, 3, 1)", () {
      expect(expressionMatter(1, 3, 1), equals(5));
    });
    test("expressionMatter(2, 2, 2)", () {
      expect(expressionMatter(2, 2, 2), equals(8));
    });
    test("expressionMatter(5, 1, 3)", () {
      expect(expressionMatter(5, 1, 3), equals(20));
    });
    test("expressionMatter(3, 5, 7)", () {
      expect(expressionMatter(3, 5, 7), equals(105));
    });
    test("expressionMatter(5, 6, 1)", () {
      expect(expressionMatter(5, 6, 1), equals(35));
    });
    test("expressionMatter(1, 6, 1)", () {
      expect(expressionMatter(1, 6, 1), equals(8));
    });
    test("expressionMatter(2, 6, 1)", () {
      expect(expressionMatter(2, 6, 1), equals(14));
    });
    test("expressionMatter(6, 7, 1)", () {
      expect(expressionMatter(6, 7, 1), equals(48));
    });
    test("expressionMatter(2, 10, 3)", () {
      expect(expressionMatter(2, 10, 3), equals(60));
    });
    test("expressionMatter(1, 8, 3)", () {
      expect(expressionMatter(1, 8, 3), equals(27));
    });
    test("expressionMatter(9, 7, 2)", () {
      expect(expressionMatter(9, 7, 2), equals(126));
    });
    test("expressionMatter(1, 1, 10)", () {
      expect(expressionMatter(1, 1, 10), equals(20));
    });
    test("expressionMatter(9, 1, 1)", () {
      expect(expressionMatter(9, 1, 1), equals(18));
    });
    test("expressionMatter(10, 5, 6)", () {
      expect(expressionMatter(10, 5, 6), equals(300));
    });
    test("expressionMatter(1, 10, 1)", () {
      expect(expressionMatter(1, 10, 1), equals(12));
    });
  });
}

int expressionMatter(a, b, c) {
  int result = 0;
  int combination1 = (a * (b + c));
  int combination2 = a * b * c;
  int combination3 = a + b * c;
  int combination4 = (a + b) * c;
  int combination5 = a + b + c;
  List pool = [
    combination1,
    combination2,
    combination3,
    combination4,
    combination5
  ];
  for (int i in pool) {
    print(i);
    if (i > result) result = i;
  }
  return result;
}

//recommended Codewars solution
// import "dart:math";

// int expressionMatter(a, b, c) {
//   List<int> list = [a * (b + c), a * b * c, a + b * c, (a + b) * c, a + b + c];
//   return list.reduce(max);
// }