<?php
use PHPUnit\Framework\TestCase;
///Task
/*
Complete the function that calculates the area of the red square, 
when the length of the circular arc A is given as the input. 
Return the result rounded to two decimals.

Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)
*/
///Solution
//My
class Solution
{
    public static function main()
    {
        echo "Hello World!";
    }
}
//Codewars recommended
/**/
///Tester => PHP 'Codewars' 'Sample Test' Tester
class Area_of_a_SquareTest extends TestCase
{
    public function testPrintHelloWorld()
    {
        $this->expectOutputString('Hello World!');
        $this->assertNull(Solution::main());
    }

    public function testYouShouldNotProcessArguments()
    {
        $this->expectOutputString('Hello World!');
        $this->assertNull(Solution::main());
    }
}
