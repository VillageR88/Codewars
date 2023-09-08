///Task
/*
Convert number to reversed array of digits

Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
Example(Input => Output):

35231 => [1,3,2,5,3]
0 => [0]
*/
///Tester => C# 'Codewars' 'Sample Tests' Tester - part 1 (invariant) directives
using NUnit.Framework;
///Solution
//My
namespace Solution
{
  class Digitizer
  {
    public static long[] Digitize(long n)
    {
      long[] lg = new long[n.ToString().Length];
      for (var i = 0; i < n.ToString().Length; i++)
      {
        lg[i] = n.ToString()[n.ToString().Length - 1 - i] - 48;
      }
      return lg;
    }
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
  public class SolutionTest
  {
    [Test]
    public void MyTest()
    {
      Assert.AreEqual(new long[] { 1, 3, 2, 5, 3 }, Digitizer.Digitize(35231));
      Assert.AreEqual(new long[] { 0 }, Digitizer.Digitize(0));
    }
  }
}