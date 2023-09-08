///Task
/*
Create a function that converts US dollars (USD) to Chinese Yuan (CNY). 
The input is the amount of USD as an integer, and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'
Examples (Input -> Output)

15  -> '101.25 Chinese Yuan'
465 -> '3138.75 Chinese Yuan'

The conversion rate you should use is 6.75 CNY for every 1 USD. 
All numbers should be represented as a string with 2 decimal places. (e.g. "21.00" NOT "21.0" or "21")
*/
///Tester => C# 'Codewars' 'Sample Tests' Tester - part 1 (invariant) directives
using NUnit.Framework;
///Solution
//My
public static class Kata
{
    public static string Usdcny(int usd)
    {
        return (usd * 6.75M).ToString().Replace(',', '.') + " Chinese Yuan";
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
        public void BasicTest1()
        {
            Assert.AreEqual("101.25 Chinese Yuan", Kata.Usdcny(15), "Testing Usd value at: " + 15
                + "\n Should return: 101.25 Chinese Yuan");
        }

        [Test]
        public void BasicTest2()
        {
            Assert.AreEqual("3138.75 Chinese Yuan", Kata.Usdcny(465), "Testing Usd value at: " + 465
                + "\n Should return: 3138.75 Chinese Yuan");
        }
    }
}