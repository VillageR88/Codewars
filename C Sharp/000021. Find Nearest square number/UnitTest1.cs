///Task
/*
Your task is to find the nearest square number, nearest_sq(n) or nearestSq(n), of a positive integer n.

For example, if n = 111, then nearest\_sq(n) (nearestSq(n)) equals 121, since 111 is closer to 121, the square of 11, than 100, the square of 10.

If the n is already the perfect square (e.g. n = 144, n = 81, etc.), you need to just return n.

Good luck :)

Check my other katas:

Alphabetically ordered

Case-sensitive!

Not prime numbers

Find your caterer
*/
///Tester => C# 'Codewars' 'Sample Tests' Tester - part 1 (invariant) directives
using NUnit.Framework;
///Solution
//My
using System;

public static class Kata
{
    public static int NearestSq(int n)
    {
        var a = Math.Floor(Math.Sqrt(n));
        var b = Math.Sqrt(n);
        var c = Math.Ceiling(Math.Sqrt(n));
        return b - a < c - b ? (int)Math.Pow(a, 2) : (int)Math.Pow(c, 2);
    }
}
//Codewars recommended
/*
using System;

public static class Kata
{
  public static int NearestSq(int n) => (int) Math.Pow(Math.Round(Math.Sqrt(n)), 2);
}
*/
/// Tester => C# 'Codewars' 'Sample Tests' Tester - part 2 (adjusted) sample tests
namespace Solution
{
    using NUnit.Framework;

    [TestFixture]
    public class SolutionTest
    {
        [Test]
        public void SampleTest()
        {
            Assert.That(Kata.NearestSq(1), Is.EqualTo(1));
            Assert.That(Kata.NearestSq(2), Is.EqualTo(1));
            Assert.That(Kata.NearestSq(10), Is.EqualTo(9));
            Assert.That(Kata.NearestSq(111), Is.EqualTo(121));
            Assert.That(Kata.NearestSq(9999), Is.EqualTo(10000));
        }
    }
}