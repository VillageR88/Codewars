///Task
/*
Input: Array of elements

["h","o","l","a"]

Output: String with comma delimited elements of the array in th same order.

"h,o,l,a"

Note: if this seems too simple for you try the next level
*/
///Tester => C# 'Codewars' 'Sample Tests' Tester - part 1 (invariant) directives
using NUnit.Framework;
using System;
///Solution
//My
using System.Collections.Generic;
using System.Linq;
public class Kata
{
  public static string PrintArray(object[] array)
    {
        if (string.Join(",", array).Contains("System.Object[]"))
        {
            return string.Join(",", array.SelectMany(subArray => (IEnumerable<object>)subArray).ToArray());
        }
        else
        {
            return string.Join(",", array);
        }
    }
}
//Codewars recommended
/*
using System;
using System.Linq;

public class Kata
{
  public static string PrintArray(object[] array)
  {
    return string.Join(",", array.Select(a => a.GetType().IsArray ? string.Join(",", (object[])a) : a));
  }
}
OR
using System;
using System.Linq;
public class Kata
{
  public static string PrintArray(object[] array)
  {
    return string.Join(",",array.Select(x=>x is Object[]?PrintArray(x as object[]):x));
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
      var data = new object[] { 2, 4, 5, 2 };
      Assert.AreEqual("2,4,5,2", Kata.PrintArray(data), "int test failed");
    }
  }
}