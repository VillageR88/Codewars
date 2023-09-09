///Task
/*
Description:

We want to generate a function that computes the series starting from 0 and ending until the given number.
Example:

Input:

> 6

Output:

    0+1+2+3+4+5+6 = 21

Input:

> -15

Output:

    -15<0

Input:

> 0

Output:

    0=0
*/
///Tester => C# 'Codewars' 'Sample Tests' Tester - part 1 (invariant) directives
using NUnit.Framework;
///Solution
//My
using System.Linq;

public class SequenceSum
{
  public static string ShowSequence(int n)
  {
    string a = "0";
    for (var i = 1; i <= n; i++) a += $"+{i}";
    string[] astr = a.Split("+");
    int sum = astr.Select(s => int.Parse(s)).Sum();
    return n < 0 ? $"{n}<0" : a == "0" ? "0=0" : $"{a} = {sum}";
  }
}
//Codewars recommended
/*
using System;
using System.Collections.Generic;
using System.Linq;

namespace Solution
{
  class Digitizer
  {
    public static long[] Digitize(long n)
    {
      return n.ToString()
              .Reverse()
              .Select(t => Convert.ToInt64(t.ToString()))
              .ToArray();
    }
  }
}
*/
/// Tester => C# 'Codewars' 'Sample Tests' Tester - part 2 (adjusted) sample tests
namespace Solution
{

  [TestFixture]
  public class SequenceSumTests
  {
    [Test]
    public void BasicTests()
    {
      Assert.AreEqual("0+1+2+3+4+5+6 = 21", SequenceSum.ShowSequence(6));
    }
  }
}