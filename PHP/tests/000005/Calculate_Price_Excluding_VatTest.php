<?php
///Task
/*
Task
Write a function that calculates the original product price, without VAT.
Example

If a product price is 200.00 and VAT is 15%, then the final product price (with VAT) is: 200.00 + 15% = 230.00

Thus, if your function receives 230.00 as input, it should return 200.00

Notes:

    VAT is always 15% for the purposes of this Kata.
    Round the result to 2 decimal places.
    If null value given then return -1
*/
///Solution
//My

//Codewars recommended
//return price without vat

use SebastianBergmann\CodeCoverage\Util\Percentage;

function excludingVatPrice($price)
{
  if ($price == null) return -1;
  else return $price - $price / 115 * 15;
}
/**/
///Tester => PHP 'Codewars' 'Sample Test' Tester
use PHPUnit\Framework\TestCase;

class Calculate_Price_Excluding_VatTest extends TestCase
{
  private function assertFuzzyEquals($actual, $expected)
  {
    $inrange = abs($actual - $expected) <= 1e-2;
    if ($inrange == false) {
      echo "Testing at 1e-2: Expected value must be $expected but got $actual";
      echo "\r\n";
    }
    $this->assertSame(true, $inrange);
  }
  public function testAlgorithm()
  {
    $this->assertFuzzyEquals(excludingVatPrice(230), 200);
    $this->assertFuzzyEquals(excludingVatPrice(123), 106.96);
  }
}
