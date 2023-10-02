///Task
/*
You need to write regex that will validate a password to make sure it meets the following criteria:

    At least six characters long
    contains a lowercase letter
    contains an uppercase letter
    contains a digit
    only contains alphanumeric characters (note that '_' is not alphanumeric)
*/
import org.junit.Test;
import static org.junit.Assert.assertEquals;

///Solution
//My
public class Sleigh {
  public static Boolean authenticate(String name, String password) {
    return (name.equals("Santa Claus") && password.equals("Ho Ho Ho!"));
  }

  // Codewars recommended
  /**/
  /// Tester => Java 'Codewars' 'Sample Test' Tester
  @Test
  public void test_authentication() {
    assertEquals(true, Sleigh.authenticate("Santa Claus", "Ho Ho Ho!"));
    assertEquals(false, Sleigh.authenticate("Santa", "Ho Ho Ho!"));
    assertEquals(false, Sleigh.authenticate("Santa Claus", "Ho Ho Ho"));
  }
}