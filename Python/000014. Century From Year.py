###Task
"""
Introduction:
The first century spans from the year 1 up to and including the year 100,
the second century - from the year 101 up to and including the year 200, etc.

Task:
Given a year, return the century it is in.

Examples:
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20
"""
###Solution
##My
def century(year):
    if year/100 > int(year/100): return int(year/100+1)
    else: return int(year/100)
##Codewars recommended
def century(year):
    return (year + 99) // 100
###Tester => Python 'Codewars' 'Sample Tests' Tester
import codewars_test as test

@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(century(1705), 18, 'Testing for year 1705')
        test.assert_equals(century(1900), 19, 'Testing for year 1900')
        test.assert_equals(century(1601), 17, 'Testing for year 1601')
        test.assert_equals(century(2000), 20, 'Testing for year 2000')
        test.assert_equals(century(356), 4, 'Testing for year 356')
        test.assert_equals(century(89), 1, 'Testing for year 89')