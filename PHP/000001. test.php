<?php
/// Task
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

/// Solution
// My
function goals(int $laLigaGoals, int $copaDelReyGoals, int $championsLeagueGoals): int
{
    return $laLigaGoals + $copaDelReyGoals + $championsLeagueGoals;
}

// Codewars recommended
/**/
/// Tester => PHP 'Codewars' 'Sample Test' Tester
class TestCase
{
    // Part Invariant
    public function assertEquals($expected, $actual)
    {
        if ($expected === $actual) {
            echo "Test Passed: $actual\n";
        } else {
            echo "Test Failed: Expected $expected but got $actual\n";
        }
    }

    // Part Adjusted
    public function testSample()
    {
        $this->assertEquals(goals(0, 0, 0), 0);
        $this->assertEquals(goals(43, 10, 5), 58);
    }
}

// Run the tests
(new TestCase())->testSample();
