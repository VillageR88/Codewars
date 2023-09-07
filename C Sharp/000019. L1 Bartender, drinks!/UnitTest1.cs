///Task
/*
Complete the function that receives as input a string, and produces outputs according to the following table:
Input 	Output
"Jabroni" 	"Patron Tequila"
"School Counselor" 	"Anything with Alcohol"
"Programmer" 	"Hipster Craft Beer"
"Bike Gang Member" 	"Moonshine"
"Politician" 	"Your tax dollars"
"Rapper" 	"Cristal"
anything else 	"Beer"

Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

Make sure you cover the cases where certain words do not show up with correct capitalization. 
For example, the input "pOLitiCIaN" should still return "Your tax dollars".
*/
///Tester => C# 'Codewars' 'Sample Tests' Tester - part 1 (invariant) directives
using NUnit.Framework;
///Solution
//My
public class Kata
{
  public static string GetDrinkByProfession(string p)
  {
    switch (p.ToLower())
    {
      case "jabroni": return "Patron Tequila";
      case "school counselor": return "Anything with Alcohol";
      case "programmer": return "Hipster Craft Beer";
      case "bike gang member": return "Moonshine";
      case "politician": return "Your tax dollars";
      case "rapper": return "Cristal";
      default: return "Beer";
    }
  }
}
//Codewars recommended
/*
using System;
using System.Collections.Generic;

public class Kata
{
  public static string GetDrinkByProfession(string p)
  {
    return new Dictionary<string, string>(StringComparer.InvariantCultureIgnoreCase)
    {
      { "Jabroni", "Patron Tequila" },
      { "School Counselor", "Anything with Alcohol" },
      { "Programmer", "Hipster Craft Beer" },
      { "Bike Gang Member", "Moonshine" },
      { "Politician", "Your tax dollars" },
      { "Rapper", "Cristal" }
    }.TryGetValue(p, out string value) ? value : "Beer";
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
    public void SampleTest()
    {
      Assert.AreEqual("Patron Tequila", Kata.GetDrinkByProfession("jabrOni"), "'Jabroni' should map to 'Patron Tequila'");
      Assert.AreEqual("Anything with Alcohol", Kata.GetDrinkByProfession("scHOOl counselor"), "'School Counselor' should map to 'Anything with alcohol'");
      Assert.AreEqual("Hipster Craft Beer", Kata.GetDrinkByProfession("prOgramMer"), "'Programmer' should map to 'Hipster Craft Beer'");
      Assert.AreEqual("Moonshine", Kata.GetDrinkByProfession("bike ganG member"), "'Bike Gang Member' should map to 'Moonshine'");
      Assert.AreEqual("Your tax dollars", Kata.GetDrinkByProfession("poLiTiCian"), "'Politician' should map to 'Your tax dollars'");
      Assert.AreEqual("Cristal", Kata.GetDrinkByProfession("rapper"), "'Rapper' should map to 'Cristal'");
      Assert.AreEqual("Beer", Kata.GetDrinkByProfession("pundit"), "'Pundit' should map to 'Beer'");
      Assert.AreEqual("Beer", Kata.GetDrinkByProfession("Pug"), "'Pug' should map to 'Beer'");
    }
  }
}