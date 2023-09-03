///Task
/*
Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

ball1 = new Ball();
ball2 = new Ball("super");

ball1.ballType     //=> "regular"
ball2.ballType     //=> "super"
*/
///Solution
//My
using System;
using NUnit.Framework;

public class Ball {
  public string ballType { get; set; }
  
  public Ball(string ballType) {

  }
}
//Codewars recommended
/*
*/
///Tester => C# 'Codewars' 'Sample Tests' Tester
[TestFixture]
public class FactorialTests {
  [Test]
  public void DefaultConstructorShouldSetBallTypeToRegular() {
    Assert.AreEqual("regular", new Ball().ballType);
  }
  
  [Test]
  public void ConstructorWithArgumentShouldSetBallTypeAsExpected() {
    Assert.AreEqual("super", new Ball("super").ballType);
  }
}