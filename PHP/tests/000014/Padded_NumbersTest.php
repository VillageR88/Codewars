<?php
///Task
/*
Complete the solution so that it returns a formatted string. 
The return value should equal "Value is VALUE" where value is a 5 digit padded number.

Example:

solution(5); // should return "Value is 00005"
*/
///Solution
//My

use SebastianBergmann\Type\ObjectType;
use SebastianBergmann\Type\TypeName;

use function PHPSTORM_META\type;

function solution($value)
{
  return "Value is " . str_repeat(0, 5 - strlen($value)) . "$value";
}
//Codewars recommended
/**/
///Tester => PHP 'Codewars' 'Sample Test' Tester
use PHPUnit\Framework\TestCase;

class Padded_NumbersTest extends TestCase
{
  public function testValueToString()
  {
    $this->assertSame("Value is 00005", solution(5));
  }
}
