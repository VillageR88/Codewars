<?php
use PHPUnit\Framework\TestCase;

class Solution
{
    public static function main()
    {
        echo "Hello World!";
    }
}

class ClassicHelloWorldTest extends TestCase
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
