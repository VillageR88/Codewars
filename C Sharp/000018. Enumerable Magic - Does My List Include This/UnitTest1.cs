///Task
/*
Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.
*/
///Tester => C# 'Codewars' 'Sample Tests' Tester - part 1 (invariant) directives
using NUnit.Framework;
///Solution
//My
using System.Linq;

public class Kata
{
  public static bool Include(int[] arr, int item)
  {
    return arr.Contains(item);
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
  public class KataTests
  {
    [Test]
    public void BasicTests()
    {
      Assert.AreEqual(true, Kata.Include(new int[] { 1, 2, 3, 4 }, 3));
      Assert.AreEqual(false, Kata.Include(new int[] { 1, 2, 4, 5 }, 3));
    }
  }
}