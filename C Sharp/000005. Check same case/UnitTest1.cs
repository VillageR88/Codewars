///Task
/*
Write a function that will check if two given characters are the same case.

    If either of the characters is not a letter, return -1
    If both characters are the same case, return 1
    If both characters are letters, but not the same case, return 0

Examples

'a' and 'g' returns 1

'A' and 'C' returns 1

'b' and 'G' returns 0

'B' and 'g' returns 0

'0' and '?' returns -1
*/
///Tester => C# 'Codewars' 'Sample Tests' Tester - part 1 (invariant) directives
using NUnit.Framework;
using System;
///Solution
//My
using System.Text.RegularExpressions;

public class Kata
{
    public static int SameCase(char a, char b)
    {
        if (
            (Regex.IsMatch(a.ToString(), "[a-z]") && Regex.IsMatch(b.ToString(), "[a-z]"))
            || (Regex.IsMatch(a.ToString(), "[A-Z]") && Regex.IsMatch(b.ToString(), "[A-Z]"))
        )
            return 1;
        else if (
            (Regex.IsMatch(a.ToString(), "[a-z]") && Regex.IsMatch(b.ToString(), "[A-Z]"))
            || (Regex.IsMatch(a.ToString(), "[A-Z]") && Regex.IsMatch(b.ToString(), "[a-z]"))
        )
            return 0;
        else
            return -1;
    }
}

//Codewars recommended
/*
public class Kata {
  public static int SameCase(char a, char b)
  {
    if (!char.IsLetter(a) || !char.IsLetter(b))
      return -1;
    return char.IsLower(a) == char.IsLower(b) ? 1 : 0;
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
        public void TrueTests()
        {
            Assert.AreEqual(1, Kata.SameCase('a', 'u'));
            Assert.AreEqual(1, Kata.SameCase('A', 'U'));
            Assert.AreEqual(1, Kata.SameCase('Q', 'P'));
            Assert.AreEqual(1, Kata.SameCase('w', 'y'));
            Assert.AreEqual(1, Kata.SameCase('c', 'm'));
            Assert.AreEqual(1, Kata.SameCase('N', 'W'));
        }

        [Test]
        public void FalseTests()
        {
            Assert.AreEqual(0, Kata.SameCase('a', 'U'));
            Assert.AreEqual(0, Kata.SameCase('A', 'u'));
            Assert.AreEqual(0, Kata.SameCase('Q', 'p'));
            Assert.AreEqual(0, Kata.SameCase('w', 'Y'));
            Assert.AreEqual(0, Kata.SameCase('c', 'M'));
            Assert.AreEqual(0, Kata.SameCase('N', 'w'));
        }

        [Test]
        public void NotLetters()
        {
            Assert.AreEqual(-1, Kata.SameCase('a', '*'));
            Assert.AreEqual(-1, Kata.SameCase('A', '%'));
            Assert.AreEqual(-1, Kata.SameCase('Q', '1'));
            Assert.AreEqual(-1, Kata.SameCase('w', '-'));
            Assert.AreEqual(-1, Kata.SameCase('c', '8'));
            Assert.AreEqual(-1, Kata.SameCase('N', ':'));
        }
    }
}
