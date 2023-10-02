
///Task
/*
Given an array of 4 integers
[a,b,c,d] representing two points (a, b) and (c, d), return a string representation of the slope of the line joining these two points.

For an undefined slope (division by 0), return undefined . Note that the "undefined" is case-sensitive.

   a:x1
   b:y1
   c:x2
   d:y2

Assume that [a,b,c,d] and the answer are all integers (no floating numbers!). Slope: https://en.wikipedia.org/wiki/Slope
*/
import static org.junit.Assert.*;
import org.junit.Test;

///Solution
//My
public class Find_the_Slope {

  public String slope(int[] points) {
    return 0;
  }

  // Codewars recommended
  /**/
  /// Tester => Java 'Codewars' 'Sample Test' Tester
  @Test
  public void test1() {
    int[] test1 = { 19, 3, 20, 3 };
    Slope s = new Slope();
    assertEquals("0", s.slope(test1));

    assertEquals("undefined", s.slope(new int[] { -7, 2, -7, 4 }));
    assertEquals("5", s.slope(new int[] { 10, 50, 30, 150 }));
    assertEquals("-5", s.slope(new int[] { 15, 45, 12, 60 }));
    assertEquals("6", s.slope(new int[] { 10, 20, 20, 80 }));
    assertEquals("undefined", s.slope(new int[] { -10, 6, -10, 3 }));
  }

}