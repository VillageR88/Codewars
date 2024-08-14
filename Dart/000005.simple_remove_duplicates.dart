/*
Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.

Example:
For input: [3, 4, 4, 3, 6, 3]

remove the 3 at index 0
remove the 4 at index 1
remove the 3 at index 3
Expected output: [4, 6, 3]

More examples can be found in the test cases.

Good luck!
*/

import "package:test/test.dart";

void main() {
  group("Fixed tests", () {
    test("Testing for [3, 4, 4, 3, 6, 3]", () {
      expect(solve([3, 4, 4, 3, 6, 3]), equals([4, 6, 3]));
    });
    // test("Testing for [1, 2, 1, 2, 1, 2, 3]", () {
    //   expect(solve([1, 2, 1, 2, 1, 2, 3]), equals([1, 2, 3]));
    // });
    // test("Testing for [1, 2, 3, 4]", () {
    //   expect(solve([1, 2, 3, 4]), equals([1, 2, 3, 4]));
    // });
    // test("Testing for [1, 1, 4, 5, 1, 2, 1]", () {
    //   expect(solve([1, 1, 4, 5, 1, 2, 1]), equals([4, 5, 2, 1]));
    // });
    // test("Testing for [1, 2, 1, 2, 1, 1, 3]", () {
    //   expect(solve([1, 2, 1, 2, 1, 1, 3]), equals([2, 1, 3]));
    // });
  });
}

List<int> solve(List<int> arr) {
  List<int> arrReversed = arr.reversed.toList();
  List<int> newArr = [];
  for (int i in arrReversed) if (!newArr.contains(i)) newArr.add(i);
  return newArr.reversed.toList();
}

// Codewars recommended solution
// List solve(arr) {
//   return arr.reversed.toSet().toList().reversed.toList();

// }