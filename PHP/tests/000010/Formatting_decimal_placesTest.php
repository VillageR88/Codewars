<?php
///Task
/*
Each number should be formatted that it is rounded to two decimal places. 
You don't need to check whether the input is a valid number because only valid numbers are used in the tests.

Example:    
5.5589 is rounded 5.56   
3.3424 is rounded 3.34
*/
///Solution
//My
function twoDecimalPlaces($n)
{
  return round($n, 2);
}
//Codewars recommended
/**/
///Tester => PHP 'Codewars' 'Sample Test' Tester
use PHPUnit\Framework\TestCase;

class Formatting_decimal_placesTest extends TestCase
{
  public function testTwoDecimalPlaces()
  {
    $this->assertSame(4.66, twoDecimalPlaces(4.659725356), "didn't work for 4.659725356");
    $this->assertSame(173735326.38, twoDecimalPlaces(173735326.3783732637948948), "didn't work for 173735326.3783732637948948");
    $this->assertSame(4.65, twoDecimalPlaces(4.653725356), "didn't work for 4.653725356");
  }
}
