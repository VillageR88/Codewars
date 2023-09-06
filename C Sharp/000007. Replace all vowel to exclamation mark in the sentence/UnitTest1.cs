///Task
/*
Description:

Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.
Examples

replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!"
*/
///Tester => C# 'Codewars' 'Sample Tests' Tester - part 1 (invariant) directives
using NUnit.Framework;
//using System.Collections.Generic;
//sing System.Linq;
///Solution
//My
using System;
using System.Text.RegularExpressions;

public static class Kata
{
  public static string Replace(string s)
  {
    return Regex.Replace(s, "[aeiouAEIOU]", "!");
  }
}
//Codewars recommended
/*
using System.Text.RegularExpressions;

public static class Kata
{
  public static string Replace(string s)
   => Regex.Replace(s, @"[aeiou]","!", RegexOptions.IgnoreCase);
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
    [Test, Description("Basic Tests")]
    public void BasicTest()
    {
      Assert.AreEqual("H!!", Kata.Replace("Hi!"));
      Assert.AreEqual("!H!! H!!", Kata.Replace("!Hi! Hi!"));
      Assert.AreEqual("!!!!!", Kata.Replace("aeiou"));
      Assert.AreEqual("!BCD!", Kata.Replace("ABCDE"));
    }
  }
}