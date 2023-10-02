///Task
/*
You need to write regex that will validate a password to make sure it meets the following criteria:

    At least six characters long
    contains a lowercase letter
    contains an uppercase letter
    contains a digit
    only contains alphanumeric characters (note that '_' is not alphanumeric)
*/
public class Slope {
  public String slope(int[] points) {
    try {
      return "" + (points[3] - points[1]) / (points[2] - points[0]);
    } catch (Exception e) {
      return "undefined";
    }
  }
}