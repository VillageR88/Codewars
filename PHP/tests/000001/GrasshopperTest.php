<?php
///Task
/*
Messi goals function

Messi is a soccer player with goals in three leagues:

LaLiga
Copa del Rey
Champions

Complete the function to return his total number of goals in all three leagues.

Note: the input will always be valid.

For example:

5, 10, 2 --> 17
*/

///Solution
//My
function goals(int $laLigaGoals, int $copaDelReyGoals, int $championsLeagueGoals): int
{
  return $laLigaGoals + $copaDelReyGoals + $championsLeagueGoals;
}
//Codewars recommended
/**/
///Tester => PHP 'Codewars' 'Sample Test' Tester\
use PHPUnit\Framework\TestCase;

class GrasshopperTest extends TestCase
{
  public function testSample()
  {
    $this->assertSame(goals(0, 0, 0), 0);
    $this->assertSame(goals(43, 10, 5), 58);
  }
}
