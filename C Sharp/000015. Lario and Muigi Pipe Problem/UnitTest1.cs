///Task
/*
Issue

Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

The pipes are correct when each pipe after the first is 1 more than the previous one.
Task

Given a list of unique numbers sorted in ascending order, return a new list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).
Example

Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8
*/
///Tester => C# 'Codewars' 'Sample Tests' Tester - part 1 (invariant) directives
using System;
using System.Linq;
using System.Collections.Generic;
using NUnit.Framework;
///Solution
//My
using System.Collections.Generic;

public class Fixer
{
  public static List<int> PipeFix(List<int> numbers)
  {
    List<int> list = new List<int>();
    for (int i = numbers[0]; i <= numbers[numbers.Count - 1]; i++)
      list.Add(i);
    return list;
  }
}
//Codewars recommended
/*
using System.Collections.Generic;

public class Fixer
{
  public static List<int> PipeFix(List<int> numbers)
  {
    List<int> list = new List<int>();
    for (int i = numbers[0]; i <= numbers[numbers.Count - 1]; i++)
      list.Add(i);
    return list;
  }
}
*/
/// Tester => C# 'Codewars' 'Sample Tests' Tester - part 2 (adjusted) sample tests

[TestFixture]
public class LarioWorld
{
  [Test]
  public void FixThosePipes_t1()
  {
    Assert.AreEqual(new List<int> { 1, 2, 3, 4, 5, 6, 7, 8, 9 }, Fixer.PipeFix(new List<int> { 1, 2, 3, 5, 6, 8, 9 }));
  }

  [Test]
  public void FixThosePipes_t2()
  {
    Assert.AreEqual(new List<int> { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 }, Fixer.PipeFix(new List<int> { 1, 2, 3, 12 }));
  }

  [Test]
  public void FixThosePipes_t3()
  {
    Assert.AreEqual(new List<int> { 6, 7, 8, 9 }, Fixer.PipeFix(new List<int> { 6, 9 }));
  }


}