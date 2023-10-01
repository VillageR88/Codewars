<?php
///Task
/*
Task

Given an integer (1 <= n <= 100) representing a person's age, return their minimum and maximum age range.

This equation doesn't work when the age <= 14, so use this equation instead:

min = age - 0.10 * age
max = age + 0.10 * age

You should floor all your answers so that an integer is given instead of a float (which doesn't represent age). Return your answer in the form [min]-[max]*/
///Solution
//My
function datingRange($age)
{
  $age > 14 ? $a = floor($age / 2 + 7) : $a = floor($age - 0.10 * $age);
  $age > 14 ? $b = floor(($age - 7) * 2) : $b = floor($age + 0.10 * $age);
  return "$a-$b";
}
//Codewars recommended
/**/
///Tester => PHP 'Codewars' 'Sample Test' Tester
use PHPUnit\Framework\TestCase;

class Age_Range_Compatibility_EquationTest extends TestCase
{
  public function testStaticOperations()
  {
    $this->assertSame("15-20", datingRange(17));
    $this->assertSame("27-66", datingRange(40));
    $this->assertSame("14-16", datingRange(15));
    $this->assertSame("24-56", datingRange(35));
    $this->assertSame("9-11", datingRange(10));
  }
}
