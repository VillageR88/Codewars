///Task
/*
This program tests the life of an evaporator containing a gas.

We know the content of the evaporator (content in ml), the percentage of foam or gas lost every day (evap_per_day) and the threshold (threshold) 
in percentage beyond which the evaporator is no longer useful. All numbers are strictly positive.

The program reports the nth day (as an integer) on which the evaporator will be out of use.
Example:

evaporator(10, 10, 5) -> 29

Note:

Content is in fact not necessary in the body of the function "evaporator", you can use it or not use it, as you wish. 
Some people might prefer to reason with content, some other with percentages only. 
It's up to you but you must keep it as a parameter because the tests have it as an argument.
*/
///Tester => C# 'Codewars' 'Sample Tests' Tester - part 1 (invariant) directives
using NUnit.Framework;
///Solution
//My
public class Evaporator
{

    public static int evaporator(double content, double evap_per_day, double threshold)
    {
        var counter = 0;
        var value = content;
        for (var i = 0; value > content * threshold / 100; i++)
        {
            counter++;
            value -= value * evap_per_day / 100;
        }
        return counter;
    }
}
//Codewars recommended
/*
using System;

public class Evaporator { 
  
  public static int evaporator(double content, double evap_per_day, double threshold) {
    return (int)Math.Ceiling(Math.Log(threshold / 100.0) / Math.Log(1.0 - evap_per_day / 100.0));
  }
}
*/
/// Tester => C# 'Codewars' 'Sample Tests' Tester - part 2 (adjusted) sample tests
[TestFixture]
public class EvaporatorTests
{

    [Test]
    public void Test1()
    {
        Assert.AreEqual(22, Evaporator.evaporator(10, 10, 10));
        Assert.AreEqual(29, Evaporator.evaporator(10, 10, 5));
    }
}