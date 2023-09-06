###Task
"""
Given an array of integers, return a new array with each value doubled.
For example:
[1, 2, 3] --> [2, 4, 6]
"""
###Solution
##My
def maps(a):
    for i in range(len(a)):
        a[i]*=2
    return a
##Codewars recommended
def maps(a):
    return [2 * x for x in a]
###Tester => Python 'Codewars' 'Sample Tests' Tester
import codewars_test as test

@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(maps([1, 2, 3]), [2, 4, 6])
        test.assert_equals(maps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), [0, 2, 4, 6, 8, 10, 12, 14, 16, 18])
        test.assert_equals(maps([]), [])