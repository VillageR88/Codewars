<?php
///Task
/*
Write a function that returns the total surface area and volume of a box as an array: [area, volume]
*/
///Solution
//My
function getSize($width, $height, $depth)
{
  return [(2 * $width * $height) + (2 * $depth * $height) + (2 * $width * $depth), $width * $height * $depth];
}
//Codewars recommended
/**/
///Tester => PHP 'Codewars' 'Sample Test' Tester
use PHPUnit\Framework\TestCase;

class Surface_Area_and_Volume_of_a_BoxTest extends TestCase
{
  public function testFixedTests()
  {
    $this->assertSame([88, 48], getSize(4, 2, 6));
    $this->assertSame([6, 1], getSize(1, 1, 1));
    $this->assertSame([10, 2], getSize(1, 2, 1));
    $this->assertSame([16, 4], getSize(1, 2, 2));
    $this->assertSame([600, 1000], getSize(10, 10, 10));
    $this->assertSame(88, getSize(4, 2, 6)[0]);
    $this->assertSame(48, getSize(4, 2, 6)[1]);
  }
}
