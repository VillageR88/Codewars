///Task
/*
You can print your name on a billboard ad. Find out how much it will cost you. Each character has a default price of £30, but that can be different if you are given 2 parameters instead of 1 (allways 2 for Java).

You can not use multiplier "*" operator.

If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 (Space counts as a character).
*/
///Tester => C# 'Codewars' 'Sample Tests' Tester - part 1 (invariant) directives
using NUnit.Framework;

///Solution
//My
public class Kata
{
    public static double Billboard(string name, double price = 30)
    {
        double cost = 0;
        for (var i = 0; i < name.Length; i++)
            cost += price;
        return cost;
    }
}

//Codewars recommended
/*
using System.Linq;

public class Kata
{
  public static double Billboard(string name, double price = 30)
  {
    return name.Sum(_ => price);
  }
}
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
        public void SampleTests()
        {
            Assertion(600, "Jeong-Ho Aristotelis");
            Assertion(40, "CODEWARS", 5);
        }

        private static void Assertion(double expected, string name, double price = -1) =>
            Assert.AreEqual(
                expected,
                price == -1 ? Kata.Billboard(name) : Kata.Billboard(name, price),
                0.000001,
                $"\n  Name: \"{name}\"\n" + $"  Price: {(price == -1 ? 30 : price)}\n\n"
            );
    }
}
