/*
Task
Create a function that always returns True/true for every item in a given list.
However, if an element is the word 'flick', switch to always returning the opposite boolean value.

Examples
['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]

['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]

['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]
Notes
"flick" will always be given in lowercase.
A list may contain multiple flicks.
Switch the boolean value on the same element as the flick itself.
*/

import "package:test/test.dart";

void main() {
  group("Basic Tests", () {
    test("Basic Tests", () {
      expect(flickSwitch(['codewars', 'flick', 'code', 'wars']),
          equals([true, false, false, false]),
          reason: "lst = ['codewars', 'flick', 'code', 'wars']");
      expect(flickSwitch(['flick', 'chocolate', 'adventure', 'sunshine']),
          equals([false, false, false, false]),
          reason: "lst = ['flick', 'chocolate', 'adventure', 'sunshine']");
      expect(flickSwitch(['bicycle', 'jarmony', 'flick', 'sheep', 'flick']),
          equals([true, true, false, false, true]),
          reason: "lst = ['bicycle', 'jarmony', 'flick', 'sheep', 'flick']");
      expect(flickSwitch(['bicycle']), equals([true]),
          reason: "lst = [-4, -3, -4, -3, 5, 2, -5, -20, -42, -4, 5, 3, 5]");
      expect(flickSwitch(['john', 'smith', 'susan', 'flick']),
          equals([true, true, true, false]),
          reason: "lst = ['john', 'smith', 'susan', 'flick']");
      expect(flickSwitch(['flick', 'flick', 'flick', 'flick', 'flick']),
          equals([false, true, false, true, false]),
          reason: "lst = ['flick', 'flick', 'flick', 'flick', 'flick']");
      expect(flickSwitch([]), equals([]), reason: "lst = []");
    });
  });
}

List<bool> flickSwitch(List<String> lst) {
  bool value = true;
  List<bool> resultList = [];
  for (String i in lst) {
    if (i == 'flick') {
      if (value == true)
        value = false;
      else
        value = true;
    }
    resultList.add(value);
  }
  return resultList;
}

// Codewars recommended solution
// List<bool> flickSwitch(List<String> lst) {
//   bool s = true;
//   return lst.map((x) => s = x == 'flick' ? !s : s).toList();
// }
