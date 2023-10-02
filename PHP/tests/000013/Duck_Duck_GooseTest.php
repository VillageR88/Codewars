<?php
///Task
/*
The objective of Duck, duck, goose is to walk in a circle, tapping on each player's head until one is chosen.

Task: Given an array of Player objects (an array of associative arrays in PHP) and an index (1-based), 
return the name of the chosen Player(name is a property of Player objects, e.g Player.name)

Example:

duck_duck_goose([a, b, c, d], 1) should return a.name
duck_duck_goose([a, b, c, d], 5) should return a.name
duck_duck_goose([a, b, c, d], 4) should return d.name

// PHP only
duck_duck_goose([$a, $b, $c, $d], 1); // => $a["name"]
duck_duck_goose([$a, $b, $c, $d], 5); // => $a["name"]
duck_duck_goose([$a, $b, $c, $d], 4); // => $d["name"]
*/
///Solution
//My
function duck_duck_goose($players, $goose)
{
  $new_goose = $goose;
  while ($new_goose >  count($players)) {
    $new_goose -= count($players);
  }
  return $players[$new_goose - 1]['name'];
}
//Codewars recommended
/**/
///Tester => PHP 'Codewars' 'Sample Test' Tester
use PHPUnit\Framework\TestCase;

class Duck_Duck_GooseTest extends TestCase {
  public function testDescriptionExamples() {
    $this->assertSame("Andre", duck_duck_goose([["name" => "Andre"], ["name" => "Beatrice"], ["name" => "Christina"], ["name" => "Daniel"]], 1));
    $this->assertSame("Andre", duck_duck_goose([["name" => "Andre"], ["name" => "Beatrice"], ["name" => "Christina"], ["name" => "Daniel"]], 5));
    $this->assertSame("Daniel", duck_duck_goose([["name" => "Andre"], ["name" => "Beatrice"], ["name" => "Christina"], ["name" => "Daniel"]], 4));
  }
}