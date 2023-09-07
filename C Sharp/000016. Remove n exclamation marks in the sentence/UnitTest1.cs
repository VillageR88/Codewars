///Task
/*
Description:

Remove n exclamation marks in the sentence from left to right. n is positive integer.
Examples

remove("Hi!",1) === "Hi"
remove("Hi!",100) === "Hi"
remove("Hi!!!",1) === "Hi!!"
remove("Hi!!!",100) === "Hi"
remove("!Hi",1) === "Hi"
remove("!Hi!",1) === "Hi!"
remove("!Hi!",100) === "Hi"
remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"
*/
///Tester => C# 'Codewars' 'Sample Tests' Tester - part 1 (invariant) directives
using NUnit.Framework;
///Solution
//My
public class Kata
{
  public static string Remove(string s, int n)
  {
    string s2 = "";
    foreach (var i in s)
    {
      if (i != '!') s2 += i;
      else if (n > 0 && i == '!') n--;
      else s2 += i;
    }
    return s2;
  }
}
//Codewars recommended
/*
using System.Text.RegularExpressions;

public class Kata
{
  public static string Remove(string s, int n) =>
    new Regex("!").Replace(s, "", n);
}
OR
using System.Linq;
public class Kata
{
  public static string Remove(string s, int n)
  {
    return string.Concat(s.Where(c => c == '!' ? n-- <= 0 : true));
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
    [Test, Description("It should work for basic tests")]
    public void SampleTest()
    {
      Assert.AreEqual("Hi", Kata.Remove("Hi!", 1));
      Assert.AreEqual("Hi", Kata.Remove("Hi!", 100));
      Assert.AreEqual("Hi!!", Kata.Remove("Hi!!!", 1));
      Assert.AreEqual("Hi", Kata.Remove("Hi!!!", 100));
      Assert.AreEqual("Hi", Kata.Remove("!Hi", 1));
      Assert.AreEqual("Hi!", Kata.Remove("!Hi!", 1));
      Assert.AreEqual("Hi", Kata.Remove("!Hi!", 100));
      Assert.AreEqual("!!Hi !!hi!!! !hi", Kata.Remove("!!!Hi !!hi!!! !hi", 1));
      Assert.AreEqual("Hi !!hi!!! !hi", Kata.Remove("!!!Hi !!hi!!! !hi", 3));
      Assert.AreEqual("Hi hi!!! !hi", Kata.Remove("!!!Hi !!hi!!! !hi", 5));
      Assert.AreEqual("Hi hi hi", Kata.Remove("!!!Hi !!hi!!! !hi", 100));
    }
  }
}
