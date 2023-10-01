<?php
use PHPUnit\Framework\TestCase;

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

class GrasshopperTest extends TestCase
{
    public function testPrintHelloWorld() {
      $this->expectOutputString('Hello World!');
      $this->assertNull(Solution::main());
    }
    
    public function testYouShouldNotProcessArguments() {
      $this->expectOutputString('Hello World!');
      $this->assertNull(Solution::main('hello'));
    }
}