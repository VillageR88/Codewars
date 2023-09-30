<?php

class Solution
{
    public static function main()
    {
        echo "Hello World!";
    }
}

require_once 'vendor/autoload.php'; // Include PHPUnit autoloader

class SolutionTest extends PHPUnit\Framework\TestCase
{
    public function testPrintHelloWorld()
    {
        $this->expectOutputString('Hello World!');
        $this->assertNull(Solution::main());
    }

    public function testYouShouldNotProcessArguments()
    {
        $this->expectOutputString('Hello World!');
        $this->assertNull(Solution::main('hello'));
    }
}
