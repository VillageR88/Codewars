///Task
/*
You need to write regex that will validate a password to make sure it meets the following criteria:

    At least six characters long
    contains a lowercase letter
    contains an uppercase letter
    contains a digit
    only contains alphanumeric characters (note that '_' is not alphanumeric)
*/
///Solution
//My
public class Sleigh {
  public static Boolean authenticate(String name, String password) {
    return (name.equals("Santa Claus") && password.equals("Ho Ho Ho!"));
  }
}