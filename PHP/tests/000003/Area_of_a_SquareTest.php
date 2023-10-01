<?php
///Task
/*
Complete the function that calculates the area of the red square, 
when the length of the circular arc A is given as the input. 
Return the result rounded to two decimals.

Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)
*/
///Solution
//My
function square_area($A): float {
    return 0.00; // Change this
  }
//Codewars recommended
/**/
///Tester => PHP 'Codewars' 'Sample Test' Tester
use PHPUnit\Framework\TestCase;

class AreaOfASquareTest extends TestCase {
    public function testFixed() {
      $this->assertSame(0.00, square_area(0));
      $this->assertSame(1.62, square_area(2));
      $this->assertSame(80.00, square_area(14.05));
    }
  }