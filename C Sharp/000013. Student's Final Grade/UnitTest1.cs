///Task
/*
Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.

This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);

This function should return a number (final grade). There are four types of final grades:

    100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
    90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
    75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
    0, in other cases

Examples(Inputs-->Output):

100, 12 --> 100
99, 0 --> 100
10, 15 --> 100

85, 5 --> 90

55, 3 --> 75

55, 0 --> 0
20, 2 --> 0

*Use Comparison and Logical Operators.
*/
///Tester => C# 'Codewars' 'Sample Tests' Tester - part 1 (invariant) directives
using NUnit.Framework;
///Solution
//My
using System;
using System.Linq;

namespace Solution
{
    public class Kata
    {
        public static int FinalGrade(int exam, int projects)
        {
            return 
            (exam > 90 || projects > 10) ? 100 :
            (exam > 75 && projects >= 5) ? 90 :
            (exam > 50 && projects >= 2) ? 75 : 0;
        }
    }
}

//Codewars recommended
/*
*/
/// Tester => C# 'Codewars' 'Sample Tests' Tester - part 2 (adjusted) sample tests
namespace Solution {
  using NUnit.Framework;
  using System;

  [TestFixture]
  public class Testing
  {
    [Test]
    public void FinalGradeTest()
    {
      Assert.AreEqual(100, Kata.FinalGrade(100, 12));
      Assert.AreEqual(90, Kata.FinalGrade(85, 5));
    }
  }
}