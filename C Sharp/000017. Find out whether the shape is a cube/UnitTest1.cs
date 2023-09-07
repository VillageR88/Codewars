///Task
/*
To find the volume (centimeters cubed) of a cuboid you use the formula:

volume = Length * Width * Height

But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!

It's up to you to find out whether the cuboid has equal sides (= is a cube).

Return true if the cuboid could have equal sides, return false otherwise.

Return false for invalid numbers too (e.g volume or side is less than or equal to 0).

Note: side will be an integer
*/
///Tester => C# 'Codewars' 'Sample Tests' Tester - part 1 (invariant) directives
using NUnit.Framework;
///Solution
//My
namespace CubeCheck
{
    using System;
    public class CubeChecker
    {
        public bool IsCube(double volume, double side)
        {
            return volume > 0 && side > 0 && volume == Math.Pow(side, 3);
        }
    }
}
//Codewars recommended
/*
*/
/// Tester => C# 'Codewars' 'Sample Tests' Tester - part 2 (adjusted) sample tests
namespace CubeCheck
{
    using NUnit.Framework;
    using System;
    [TestFixture]
    public class CubeTests
    {
        [Test]
        public void ShouldReturnFalse()
        {
            CubeChecker cube = new CubeChecker();
            Assert.AreEqual(true, cube.IsCube(1, 1));
            Assert.AreEqual(true, cube.IsCube(8, 2));
        }
        [Test]
        public void ShouldReturnTrue()
        {
            CubeChecker cube = new CubeChecker();
            Assert.AreEqual(false, cube.IsCube(2, 1));
            Assert.AreEqual(false, cube.IsCube(6, 3));
            Assert.AreEqual(false, cube.IsCube(-8, -2));
            Assert.AreEqual(false, cube.IsCube(0, 0));
            Assert.AreEqual(false, cube.IsCube(200, 4));
        }
    }
}