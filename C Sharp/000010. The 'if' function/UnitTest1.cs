///Task
/*
Create a function called _if which takes 3 arguments: a value bool and 2 functions (which do not take any parameters): func1 and func2

When bool is truthy, func1 should be called, otherwise call the func2.
Example:

Kata.If(true, () => Console.WriteLine("True"), () => Console.WriteLine("False"));
// write "True" to console
*/
///Tester => C# 'Codewars' 'Sample Tests' Tester - part 1 (invariant) directives
using NUnit.Framework;
///Solution
//My
using System;

public class Kata
{
    public static void If(bool condition, Action func1, Action func2)
    {
        if (condition == true)
            func1();
        else
            func2();
    }
}

//Codewars recommended
/*
*/
/// Tester => C# 'Codewars' 'Sample Tests' Tester - part 2 (adjusted) sample tests
[TestFixture]
public class Tests
{
    [Test]
    public void BasicTest()
    {
        var a = false;

        Kata.If(true, () => a = true, () => a = false);

        Assert.True(a, "func1 should be called");
    }
}
