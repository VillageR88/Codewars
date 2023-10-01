<?php
///Task
/*
Write function parseFloat which takes an input and returns a number or Nothing if conversion is not possible.
*/
///Solution
//My
function parseFloat(string $s)
{
  return (float)$s != 0 ? (float)$s : null;
}
//Codewars recommended
/**/
///Tester => PHP 'Codewars' 'Sample Test' Tester
use PHPUnit\Framework\TestCase;

class Parse_floatTest extends TestCase
{
  public function testBasic()
  {
    $this->assertSame(1.0, parseFloat("1"));
    $this->assertSame(234.0234, parseFloat("234.0234"));
    $this->assertSame(null, parseFloat("string"));
  }
}
