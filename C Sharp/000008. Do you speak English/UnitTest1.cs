///Task
/*
Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".

The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.

Upper or lower case letter does not matter -- "eNglisH" is also correct.

Return value as boolean values, true for the string to contains "English", false for it does not.
*/
///Tester => C# 'Codewars' 'Sample Tests' Tester - part 1 (invariant) directives
using NUnit.Framework;
//using System.Collections.Generic;
//sing System.Linq;
///Solution
//My
using System;

namespace Solution
{
    static class Kata
    {
        public static bool SpeakEnglish(string sentence)
        {
            return sentence.Contains("english", StringComparison.OrdinalIgnoreCase);
        }
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
    [TestFixture]
    public class SolutionTest
    {
        [TestCase("hello world", false)]
        [TestCase("egnlish", false)]
        [TestCase("", false)]
        [TestCase("english", true)]
        [TestCase("1234english ;k", true)]
        [TestCase("I speak English", true)]
        [TestCase("ABC123DOREME", false)]
        [TestCase("eNgliSh", true)]
        [TestCase("1234#$%%eNglish ;k9", true)]
        [TestCase("spanish, english, french", true)]
        [TestCase("englishENGLISHEnGlISHENglisH", true)]
        [TestCase("HeLlO tHeR3 enGLiSh MuffIN", true)]
        public void SampleTests(string str, bool expected)
        {
            var actual = Kata.SpeakEnglish(str);
            Assert.AreEqual(expected, actual, $"Input: \"{str}\"");
        }
    }
}
