<?php
///Task
/*
In this kata, we will make a function to test whether a period is late.

Our function will take three parameters:

last - The Date object with the date of the last period

today - The Date object with the date of the check

cycleLength - Integer representing the length of the cycle in days

Return true if the number of days passed from last to today is greater than cycleLength. Otherwise, return false.
*/
///Solution
//My
function periodIsLate($last, $today, $cycleLength)
{
  return (date_diff($last, $today)->days) > $cycleLength;
}
//Codewars recommended
/**/
///Tester => PHP 'Codewars' 'Sample Test' Tester
use PHPUnit\Framework\TestCase;

class Is_your_period_lateTest extends TestCase
{
  public function testExample()
  {
    $this->assertSame(false, periodIsLate(new DateTime('2016-07-13'), new DateTime('2016-08-16'), 35));
    $this->assertSame(true, periodIsLate(new DateTime('2016-07-13'), new DateTime('2016-08-16'), 28));
  }
}
