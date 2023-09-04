///Task
/*
Write a simple regex to validate a username. Allowed characters are:

    lowercase letters,
    numbers,
    underscore

Length should be between 4 and 16 characters (both included).
*/
///Tester => C# 'Codewars' 'Sample Tests' Tester - part 1 (invariant) directives
using NUnit.Framework;
///Solution
//My
using System;
using System.Text.RegularExpressions;

public class Kata
{
  public static bool ValidateUsr(string username) 
  {
    if (username.Length >= 4 && username.Length <= 16 && username.ToLower() == username && !username.Contains(" ")) return true;
    else return false;
  }
}
//Codewars recommended
/*
using System.Text.RegularExpressions;

public class Kata
{
  public static bool ValidateUsr(string username) 
  {
    return Regex.IsMatch(username, "^[a-z0-9_]{4,16}$");
  }
}
*/
///Tester => C# 'Codewars' 'Sample Tests' Tester - part 2 (adjusted) sample tests
public class Tests
{
  [Test]
  [TestCase("asddsa", ExpectedResult=true)]
  [TestCase("a", ExpectedResult=false)]
  [TestCase("Hass", ExpectedResult=false)]
  [TestCase("Hasd_12ssssssssssssssasasasasasssasassss", ExpectedResult=false)]
  [TestCase("", ExpectedResult=false)]
  [TestCase("____", ExpectedResult=true)]
  [TestCase("012", ExpectedResult=false)]
  [TestCase("p1pp1", ExpectedResult=true)]
  [TestCase("asd43 34", ExpectedResult=false)]
  [TestCase("asd43_34", ExpectedResult=true)]
  public static bool FixedTest(string username)
  {
    return Kata.ValidateUsr(username);
  }
}