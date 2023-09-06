///Task
/*
Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

Example:

"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"
*/
///Tester => C# 'Codewars' 'Sample Tests' Tester - part 1 (invariant) directives
using NUnit.Framework;
///Solution
//My
public static class Kata
{
  public static string Greet(string name)
  {
    return "Hello " + name[0].ToString().ToUpper() + name.ToString().Remove(0, 1).ToLower() + "!";
  }
}
//Codewars recommended
/*
public static class Kata
{
  public static string Greet(string name)
  {
    return $"Hello {name.ToUpper()[0] + name.ToLower().Substring(1)}!";
  }
}
*/
/// Tester => C# 'Codewars' 'Sample Tests' Tester - part 2 (adjusted) sample tests
namespace Solution
{
  using NUnit.Framework;
  using System;

  [TestFixture]
  public class SolutionTest
  {
    [Test]
    public void SampleTest()
    {
      // Additional sample tests are left as an exercise to the user.
      // Feel free to add more tests using the "Assert.That(actual, Is.EqualTo(expected))" syntax
      Assert.That(Kata.Greet("riley"), Is.EqualTo("Hello Riley!"));
    }
  }
}