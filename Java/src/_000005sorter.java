
///Task
/*
HELP! Jason can't find his textbook! 
It is two days before the test date, and Jason's textbooks are all out of order! 
Help him sort a list (ArrayList in java) full of textbooks by subject, so he can study before the test.

The sorting should NOT be case sensitive

*/
///Solution
//My
import java.util.Collections;
import java.util.List;

class _000005sorter {
  public static List<String> sort(List<String> textbooks) {
    Collections.sort(textbooks, String.CASE_INSENSITIVE_ORDER);
    return textbooks;
  }
}