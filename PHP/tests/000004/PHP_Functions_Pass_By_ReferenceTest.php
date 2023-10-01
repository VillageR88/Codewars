<?php
///Task
/*
Task
Note: The lesson provided in this Kata is designed to teach you most, 
if not all, of the key concepts required to complete the Task in this Kata. 
However, if in doubt, you are strongly encouraged to conduct your own research.

Define and implement the following functions:

    double - This function should receive a number $n which should be passed into the function by reference. 
    The function should then double the value of $n and store this (new) value in $n. No return value is necessary.
    halve - This function should receive a number $n which should again be passed in by reference. Inside the function, 
    $n should be halved. No return value is necessary.
    enlarge - This function should receive two arguments, the first argument being $x which should be passed in by reference, 
    and the second argument being $n which should be passed in by value. 
    Both arguments are expected to be numbers. 
    $x should then be enlarged by a factor of $n in the function. 
    No return value is necessary.
*/
///Solution
//My

//Codewars recommended
function double(&$n): int
{
    return $n *= 2;
}
function halve(&$n)
{
    return $n /= 2;
}
function enlarge(&$n, $m)
{
    return $n *= $m;
}
/**/
///Tester => PHP 'Codewars' 'Sample Test' Tester
use PHPUnit\Framework\TestCase;

class PHP_Functions_Pass_By_ReferenceTest extends TestCase
{
    public function testExample()
    {
        $n = 10;
        double($n);
        $this->assertSame(20, $n);
        halve($n);
        $this->assertSame(10, $n);
        enlarge($n, 5);
        $this->assertSame(50, $n);
    }
}
