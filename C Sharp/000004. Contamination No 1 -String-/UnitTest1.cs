///Task
/*
An AI has infected a text with a character!!

This text is now fully mutated to this character.

If the text or the character are empty, return an empty string.
There will never be a case when both are empty as nothing is going on!!

Note: The character is a string of length 1 or an empty string.
Example

text before = "abc"
character   = "z"
text after  = "zzz"
*/
///Tester => C# 'Codewars' 'Sample Tests' Tester - part 1 (invariant) directives
using NUnit.Framework;
using System;

///Solution
//My
public class Kata
{
  public static string Contamination(string text, string character)
  {
    string j = "";
    for (var i = 0; i < text.Length ;i++) {
      j += character;
    }
    return j;
  }
}
//Codewars recommended
/*
using System.Text.RegularExpressions;

public class Kata {
  public static string Contamination(string text, string character) 
   =>  new Regex(@".").Replace(text, character);
}
OR
using System.Linq;

public class Kata
{
  public static string Contamination(string text, string character)
  {
    return character.Any() ? new string(character[0], text.Length) : "";
  }
}
*/
/// Tester => C# 'Codewars' 'Sample Tests' Tester - part 2 (adjusted) sample tests
namespace Solution {
  using NUnit.Framework;
  using System;

  [TestFixture]
  public class SolutionTest
  {
    [Test]
    public void SampleTest()
    {
      Assert.AreEqual("zzz", Kata.Contamination("abc", "z"));
      Assert.AreEqual("", Kata.Contamination("", "z"));
      Assert.AreEqual("", Kata.Contamination("abc", String.Empty));
      Assert.AreEqual("&&&&&&&&", Kata.Contamination("_3ebzgh4", "&"));
      Assert.AreEqual("      ", Kata.Contamination("//case", " "));
    }
  }
}