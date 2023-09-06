///Task
/*
Complete the function which returns the weekday according to the input number:

    1 returns "Sunday"
    2 returns "Monday"
    3 returns "Tuesday"
    4 returns "Wednesday"
    5 returns "Thursday"
    6 returns "Friday"
    7 returns "Saturday"
    Otherwise returns "Wrong, please enter a number between 1 and 7"
*/
///Tester => C# 'Codewars' 'Sample Tests' Tester - part 1 (invariant) directives
using NUnit.Framework;

///Solution
//My
public class Kata
{
    public static string WhatDay(int n)
    {
        return n == 1
            ? "Sunday"
            : n == 2
                ? "Monday"
                : n == 3
                    ? "Tuesday"
                    : n == 4
                        ? "Wednesday"
                        : n == 5
                            ? "Thursday"
                            : n == 6
                                ? "Friday"
                                : n == 7
                                    ? "Saturday"
                                    : "Wrong, please enter a number between 1 and 7";
    }
}

//Codewars recommended
/*
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
        [TestCase(1, "Sunday")]
        [TestCase(2, "Monday")]
        [TestCase(3, "Tuesday")]
        [TestCase(4, "Wednesday")]
        [TestCase(5, "Thursday")]
        [TestCase(6, "Friday")]
        [TestCase(7, "Saturday")]
        [TestCase(-1, "Wrong, please enter a number between 1 and 7")]
        [TestCase(0, "Wrong, please enter a number between 1 and 7")]
        [TestCase(8, "Wrong, please enter a number between 1 and 7")]
        [TestCase(20, "Wrong, please enter a number between 1 and 7")]
        public void FixedTest(int n, string expected)
        {
            Assert.AreEqual(expected, Kata.WhatDay(n));
        }
    }
}
