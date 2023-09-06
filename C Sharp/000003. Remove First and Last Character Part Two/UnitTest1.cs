///Task
/*
This is a spin off of my first kata.

You are given a string containing a sequence of character sequences separated by commas.

Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

If the input string is empty or the removal of the first and last items would cause the resulting string to be empty,
return an empty value (represented as a generic value NULL in the examples below).
Examples

"1,2,3"      =>  "2"
"1,2,3,4"    =>  "2 3"
"1,2,3,4,5"  =>  "2 3 4"

""     =>  NULL
"1"    =>  NULL
"1,2"  =>  NULL
*/
///Tester => C# 'Codewars' 'Sample Tests' Tester - part 1 (invariant) directives
using NUnit.Framework;
using System.Linq;

///Solution
//My
using System;

public static class Kata
{
    public static string Array(string s)
    {
        if (s.Split(",").Length > 2)
        {
            var range = s.Split(",").Length - 2;
            string[] newTab = new string[range];
            for (var i = 0; i < range; i++)
            {
                newTab[i] = s.Split(",")[i + 1];
            }
            return string.Join(" ", newTab);
        }
        else
            return null;
    }
}

//Codewars recommended
/*
using System.Linq;

public static class Kata
{
    public static string Array(string s)
    {
        var arr = s.Split(",");
        return arr.Length > 2 ? string.Join(" ", arr[1..^1]) : null;
    }
}
*/
/// Tester => C# 'Codewars' 'Sample Tests' Tester - part 2 (adjusted) sample tests
public class KataTests
{
    [Test]
    public void SampleTest()
    {
        Assert.AreEqual(null, Kata.Array(""));
        Assert.AreEqual(null, Kata.Array("1"));
        Assert.AreEqual(null, Kata.Array("1, 3"));
        Assert.AreEqual("2", Kata.Array("1,2,3"));
        Assert.AreEqual("2 3", Kata.Array("1,2,3,4"));
    }
}
