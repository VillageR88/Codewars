<?php
///Task
/*
Task Description

You're re-designing a blog, and the blog's posts have the Weekday Month Day, time format for showing the date and time when a post was made, e.g., Friday May 2, 7pm.

You're running out of screen real estate, and on some pages you want to display a shorter format, Weekday Month Day that omits the time.

Write a function that takes the website date/time in its original string format and returns the shortened format.
Input

Input will always be a string, e.g., "Friday May 2, 7pm". 
Output

Output will be the shortened string, e.g., "Friday May 2".
*/
///Solution
//My
function shortenToDate($longDate)
{
  return substr($longDate, 0, stripos($longDate, ","));
}
//Codewars recommended
/**/
///Tester => PHP 'Codewars' 'Sample Test' Tester
use PHPUnit\Framework\TestCase;

class Remove_the_timeTest extends TestCase
{
  public function testExample()
  {
    $this->assertSame("Friday May 2", shortenToDate("Friday May 2, 9am"));
    $this->assertSame("Tuesday January 29", shortenToDate("Tuesday January 29, 10pm"));
    $this->assertSame("Monday December 25", shortenToDate("Monday December 25, 10pm"));
  }
}
