using System;
using NUnit.Framework;


public class Ball {
  public string ballType { get; set; }
  
  public Ball(string ballType) {

  }
}


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